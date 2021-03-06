import argparse
import requests
import os
import boto3
import json

from tqdm import tqdm
from requests_aws4auth import AWS4Auth
from itertools import zip_longest
from collections import Counter


def grouper(iterable, n, fillvalue=None):
    args = [iter(iterable)] * n
    return zip_longest(*args, fillvalue=fillvalue)


def get_max_answer(answers):
    processed_answers = []

    for answer in answers:
        processed_answers.append(answer.strip().lower())

    answer_counter = Counter(processed_answers)
    other_answers = ['unanswerable', 'no text in image',
                      'answering does not require reading text in the image', 'not a question']
    for item, _ in answer_counter.most_common():
        if item not in other_answers:
            return item

def get_rotation_map():
    rotation_map = {}
    with open('./train-images-boxable-with-rotation.csv', 'r') as f:
        f.readline()

        for line in f:
            line = line.strip().split(',')
            rotation_map[line[0]] = line[-1]
    return rotation_map

def create_index(config, auth, headers, config_dir):
    base_url = config["elasticsearch_url"]
    index_name = config["index_name"]

    index_url = "{}/{}".format(base_url, index_name)
    index_config = {}

    with open(os.path.join(config_dir, "settings.json")) as f:
        settings = json.load(f)

    with open(os.path.join(config_dir, "mapping.json")) as f:
        mappings = json.load(f)

    index_config["settings"] = settings
    index_config["mappings"] = mappings

    # requests.delete(index_url, auth=auth, headers=headers)
    response = requests.put(index_url, data=json.dumps(index_config), auth=auth, headers=headers)
    print(response.text, response.status_code)

    if response.status_code != 200:
        print("Index already exists")
    else:
        print("Index created")

def main(args):
    config_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    config_file = os.path.join(config_dir, "config.json")

    with open(config_file, "r") as f:
        config = json.load(f)

    with open(args.file, "r") as f:
        data = json.load(f)['data']

    credentials = boto3.Session(profile_name=config["aws"]["user_profile"]).get_credentials()
    region = config["aws"]["region"]
    service = config["aws"]["service"]

    awsauth = AWS4Auth(credentials.access_key, credentials.secret_key, region, service)
    base_url = config["elasticsearch_url"]

    url = "{}/{}/_bulk".format(base_url, config["index_name"])
    headers = {"content-type": "application/json"}

    rotation_map = get_rotation_map()
    create_index(config, awsauth, headers, config_dir)

    for items in tqdm(list(grouper(data, 400))):
        payload = ""
        for item in items:
            if item is None:
                break
            payload += json.dumps({ "index" : { "_index" : config["index_name"], "_type" : "_doc", "_id" : item['question_id'] } }) + "\n"
            item['answers'] = [get_max_answer(item['answers'])]
            item['rotation'] = rotation_map[item['image_id']]
            payload += json.dumps(item) + "\n"
        response = requests.put(url, data=payload, auth=awsauth, headers=headers)

        if str(response.status_code)[0] != '2':
            print("Failed", response.text, response.status_code)

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("-f", "--file", type=str, help="File for the json duml")
    main(parser.parse_args())
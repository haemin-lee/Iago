from pprint import pprint

from gpiozero import Button 
from time import sleep
from flask import Flask
import requests 
import json 

class iagoClient():
    def __init__(self, addr):
        self.serv_addr = addr

    def send_press(self, color, addr):
        #post request to post the button press
        headers = {
            'Content-Type': 'application/json',
            'Authorization': None
        }
        payload = {
            'Button': color
        }

        #Send an HTTP POST message and block until a respone 
        response = requests.post("http://{}/".format(addr), 
                                headers=headers,
                                data=json.dumps(payload))
        pprint(response.json())


XButton = Button (1)
OButton = Button (7)
TButton = Button (8)
SButton = Button (25)
address='162.208.92.132:5000'


buttonClient = iagoClient(address)
while True:
    if  XButton.is_pressed:
        buttonClient.send_press('blue", address)
        print("blue")
    elif OButton.is_pressed:
        buttonClient.send_press("yellow", address)
        print("yellow")
    elif TButton.is_pressed:
        buttonClient.send_press('green', address)
        print("green")
    elif SButton.is_pressed:
        buttonClient.send_press('red', address)
        print("red")
    sleep(0.5)

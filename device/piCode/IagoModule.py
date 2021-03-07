# from pprint import pprint

from gpiozero import Button 
from time import sleep
from flask import Flask
# from flask import jsonify
import requests 
import json 

class iagoClient():
    def __init__(self, addr):
        self.serv_addr = addr

    def send_press(self, color, addr):
        #post request to post the button press
        print("Entered send_press")
        headers = {
            'Content-Type': 'application/json',
            'Authorization': None
        }
        payload = {
            'Button': color
        }

        #Send an HTTP POST message and block until a respone 
        # response = requests.post("http://{}/".format(addr), 
        #                         headers=headers,
        #                         data=json.dumps(payload))
        response = requests.post(f"http://{addr}", 
                                headers=headers,
                                data=json.dumps(payload))


        print(response.json())
        # jsonify(response.json())

#GPIO button stuff/hardware 
xButton = Button(1)
oButton = Button(7)
tButton = Button(8)
sButton = Button(25)


address='e3060b9931e9.ngrok.io/'


buttonClient = iagoClient(address)
while True:
    if  xButton.is_pressed:
        print("blue")
        buttonClient.send_press("blue", address)
    elif oButton.is_pressed:
        print("yellow")
        buttonClient.send_press("yellow", address)
    elif tButton.is_pressed:
        print("green")
        buttonClient.send_press('green', address)
    elif sButton.is_pressed:
        print("red")
        buttonClient.send_press('red', address)
    sleep(0.5)

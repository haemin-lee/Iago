from gpiozero import Button 
from time import sleep
XButton = Button (1)
OButton = Button (7)
TButton = Button (8)
SButton = Button (25)
while True:
    if  XButton.is_pressed:
        print("XButton Pressed")
    elif OButton.is_pressed:
        print("OButton Pressed")
    elif TButton.is_pressed:
        print("TButton Pressed")
    elif SButton.is_pressed:
        print("SButton Pressed")
    sleep(1)

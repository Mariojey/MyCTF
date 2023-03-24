import requests

while True:
    x = requests.get('http://132.226.47.177:42069/1')
    try:
        print(x.flag)
        break
    except:
        print(x.text)
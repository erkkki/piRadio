# piRadio

Radio player for Raspberry Pi & touch screen.

Website [piRadio](http://piradio.fi/)


## Kiosk mode

How to run in Raspberry Pi in Kiosk mode.

[Raspberry Pi Kiosk](https://pimylifeup.com/raspberry-pi-kiosk/)

- Change url.
- I had to change in kiosk.service
    - ‘Type =simple’ to ‘Type=forking’ in my systemd kiosk.service file

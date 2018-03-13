# CPSC 473 - Front-End Engineering - Spring 2018
## Project 1
### Section 02 - Demonstrations April 2, Section 01 - Demonstrations April 4

Use client-side JavaScript, Ajax, and Deployd to build one of the applications listed below. You may use any additional third-party Web Service APIs, libraries, or modules, provided that you comply with the terms of their licenses.
Projects

Build a site where...
Users can create their own “business card” or “landing” pages similar to about.me or distilled.me

### Backend Installation (Assuming you're on linux)
Install MongoDB and Deployd
```
$ sudo apt update
$ sudo apt install -y mongodb
$ sudo systemctl stop mongodb
$ sudo systemctl disable mongodb
$ npm install deployd-cli -g
```

Creating Deployd app for this project
```
$ dpd create aboutme-backend
$ cd aboutme-backend
$ dpd -d
```



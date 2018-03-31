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

Creating Deployd app and download dpd-fileupload module
```
$ dpd create aboutme-backend
$ cd aboutme-backend
$ npm install deployd
$ npm install dpd-fileupload --save
$ dpd -d
```

### Backend properties
1st collection (name aboutme):
  1. firstName
  2. lastName
  3. location
  4. occupation
  5. imgInp
  
 2nd file upload collection (needs to be a file upload collection, if you don't see any option to create a file upload collection then you didn't install the module correctly)
   1. folder name should be "upload"
   2. don't check any of the boxes
   3. save
   
 3rd user collection (user):
   1. username
   2. emailAddress
   3. password
   4. password2



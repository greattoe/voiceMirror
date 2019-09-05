voiceMirror
===========
Node.js Web Server Codes for Raspberry Pi Smart Mirror

# 1. How to use these codes...
## 1.1. install node.js & express.js
### 1.1.1 install node.js
#### ● add repository of node.js & update
```
$ curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
```
#### ● install node.js
```
$ sudo apt-get install nodejs -y
```
#### ● check version of node.js
```
$ node -v
v10.16.3
```
#### ● check version of npm
```
$ npm -v
6.9.0
```
### 1.1.2. install express.js
#### ● install express globally
```
$ sudo npm install -g express
```
#### ● install express-generator globally
```
$ sudo npm install -g express-generator
```

## 1.2. make smart-mirror application with express.js
#### ● make application name voiceMirror
```
$ express voiceMirror
```
#### ● change directory & install basic dependancy
```
$ cd voiceMirror
$ npm install
```

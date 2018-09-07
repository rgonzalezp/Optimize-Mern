# Optimize-Mern
Optimize application developed with the MERN stack

## Table of Contents
- [Objectives](#objectives)
- [Technologies](#technologies)
- [Authors](#authors)
- [Quickstart](#quickstart)
- [Documentation](#documentation)
- [Preview](#preview)
- [Copyright and license](#copyright-and-license)

## Objectives
- 1

- 2

- 3

- 4

## Technologies
- MERN Stack, mongodb, express, react, redux, reactstrap, node.js
- mongoose,etc...

## Authors:
- Ricardo Enrique Gonzalez Penuela: https://rgonzalezp.github.io/
- Add Santiago Munera

## Quickstart:

- ```npm install``` to install node modules in the project folder
- ```npm run client-install``` to install the client
- add configuration file for oktaClient connection both in front and backend:
- Add "configfile.js" in client src folder with this code: ```export default{ url: '<<your okta domain>>', issuer: 'https://dev-767504.oktapreview.com/oauth2/default', redirect_uri: window.location.origin + '/implicit/callback', client_id: '<<your id client>>'};```
- Add "oktaClient.js" in root/lib folder with this code: ```const okta = require('@okta/okta-sdk-nodejs'); const client = new okta.Client({ orgUrl: '<<your okta domain>>', token: '<<secret-token>>'}); module.exports = client;```
- use command ```npm run dev``` to run client and backend concurrently
- Save any changes to the files and the server will automatically notice changes and re-deploy
- Also, make sure you are using a valid mongodb user @ config/keys.js

## Documentation
- 

## Preview

## Copyright and license
Code Copyright 2018 Ricardo Enrique Gonzalez Peñuela, Santiago Munera. Code released under the MIT license.


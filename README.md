# ChatGPT For Line Bot

## Table of Contents

- [About](#About)
- [How to use](#How-to-use)
- [Postscript](#P.S.)

## About

This is using Line bot Messaging API with ChatGPT API. So we make webhook to receive message and process it to send to chatgpt api, process and send result back to user.

## How to use

- config environment value for ChatGPT API Key (apiKey), Line Channel Access Token (token), port in `.env` file 

- use this command to install necessary package.
```
npm install
```

- use this command to start app.
```
npm start
```
- config webhook url at Line Developer Website 
- enjoy !!

## Example

<img src="https://github.com/sudlit/ChatGPT-For-Line-Bot/raw/main/img/example.jpg" width="300" height="400">

## P.S.

*https://developers.line.biz/en/services/messaging-api/*

*https://beta.openai.com/docs/api-reference/edits/create?lang=node.js*

*https://beta.openai.com/account/api-keys*


require('dotenv').config();
const https = require('https');
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.apiKey,
});

const openai = new OpenAIApi(configuration);

async function send(events) {
  let response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: events.message.text,
    max_tokens: 2046,
    temperature: 0,
  });

  let message = response["data"]["choices"][0]["text"].trim()

  if (events.type === "message") {
    const dataString = JSON.stringify({
      replyToken: events.replyToken,
      messages: 
      [
        {
          "type": "text",
          "text": message,
        }
      ]
    })

    const headers = {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + process.env.token,
      "ngrok-skip-browser-warning": ""
    }

    const webhookOptions = {
      "hostname": "api.line.me",
      "path": "/v2/bot/message/reply",
      "method": "POST",
      "headers": headers,
      "body": dataString
    }

    // Define request
    const request = https.request(webhookOptions, (res) => {
      res.on("data", (d) => {
        process.stdout.write(d)
      })
    })

    // Handle error
    request.on("error", (err) => {
      console.error(err)
    })

    // Send data
    request.write(dataString)
    request.end()
  }

}

module.exports = {
  send
}




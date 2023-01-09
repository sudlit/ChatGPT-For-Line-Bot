const express = require('express');
const app = express();
const api = require('./src/api');
require('dotenv').config();

app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

app.get("/", async (req, res) => {
    res.sendStatus(200)
})

app.post("/webhook", async function(req, res) {
    res.sendStatus(200)
    api.send(req.body.events[0])
})

app.listen(process.env.port,()=>{
    console.log(`Listening at http://localhost:${process.env.port}`)
})

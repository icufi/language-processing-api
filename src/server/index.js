const dotenv = require("dotenv");
dotenv.config();
const mcAPIKey = process.env.API_KEY;
const path = require("path");
const fetch = require("node-fetch");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static("dist"));
//API key and port variables
const APIKey = `${process.env.API_KEY}`;
const port = 8555;

//start server
const server = app.listen(port, () =>
  console.log(`Server available at localhost:${port}`)
);

//index page get request
app.get("/", function (req, res) {
  res.sendFile(path.resolve("dist/index.html"));
});

//API call
app.get("/textanalysis/*", async (req, res) => {
  //receives user input url as param
  const formData = req.params[0];
  const api_url = `https://api.meaningcloud.com/sentiment-2.1?key=${APIKey}&url=${formData}&lang=en`;
  //calls API
  const api_response = await fetch(api_url);
  const json = await api_response.json();
  // returns response
  res.json(json);
});

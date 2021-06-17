const dotenv = require("dotenv");
dotenv.config();

const mcAPIKey = process.env.API_KEY;
console.log(`Meaning Cloud API Key = ${mcAPIKey}`);

const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mockAPIResponse = require("./mockAPI.js");

let json = {
  title: "json test response",
  message: "test message",
  time: "current time",
};

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.static("dist"));
const port = 8555;

console.log(JSON.stringify(mockAPIResponse));

console.log(__dirname);

app.post("/input", async (req, res) => {
  console.log("req====+>", req.body);
  const result = await fetch(
    `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&url=${req.body.url}&lang=en`
  );
  try {
    console.log(result);
    const response = await result.json();
    res.send(response);
    console.log(response);
  } catch (error) {
    console.log("error", error);
  }
});

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
  // res.sendFile(path.resolve("src/client/views/index.html"));
});

// designates what port the app will listen to for incoming requests
const server = app.listen(port, () =>
  console.log(`Server listening on localhost:${port}`)
);

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

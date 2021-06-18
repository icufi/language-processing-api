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

console.log(__dirname);

const port = 8555;
const server = app.listen(port, () =>
  console.log(`Server available at localhost:${port}`)
);

app.post("/inputfield", async (req, res) => {
  const testText = req.body.formText;
  console.log(testText);
  const analysisResult = await fetch(
    `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&url=${req.body.url}&lang=en`,
    { method: "POST" }
  );
  try {
    const result = await analysisResult.json();
    console.log(result);
    res.send(result);
  } catch (error) {
    console.log("error", error);
  }
});

app.get("/", function (req, res) {
  res.sendFile(path.resolve("dist/index.html"));
});

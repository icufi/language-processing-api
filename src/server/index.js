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

const APIKey = `${process.env.API_KEY}`;


const port = 8555;
const server = app.listen(port, () =>
  console.log(`Server available at localhost:${port}`)
);

// const analysisResult = async (baseURL, APIKey, lang) => {
//   function testURL (req, res) {
//     let formURL = req.body.URL;
//     return formURL;

//   };
//   let APITestURL = `${baseURL}${APIKey}${formURL}${lang}`;
//   console.log(APITestURL);
//   const res = await fetch(APITestURL);
//   try {
//     const data = await res.json();
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.log("error", error);
//   }
// };

// app.post("/inputfield", analysisResult);

app.get("/", function (req, res) {
  res.sendFile(path.resolve("dist/index.html"));
});

app.get('/textanalysis/*', async (req, res) => {
  console.log(req.params);
  const formData = req.params[0]
  console.log(formData);
  const api_url = `https://api.meaningcloud.com/sentiment-2.1?key=${APIKey}&url=${formData}&lang=en`
  const api_response = await fetch(api_url);
  const json = await api_response.json();
  console.log(json);
  res.json(json);
});





// => {
//   const testURL = req.body.formText;
//   console.log(testURL, 'happy');
//   const analysisResult = await fetch(
//     `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&url=${req.body.url}&lang=en`,
//     { method: "POST" }
//   );
//   try {
//     const result = await analysisResult.json();
//     console.log(result);
//     res.send(result);
//   } catch (error) {
//     console.log("error", error);
//   }
// });

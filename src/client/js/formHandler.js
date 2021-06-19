import fetch from "node-fetch";
import { checkForName } from "./nameChecker";


// let elemTest = document.getElementById("score_tag");
// elemTest.innerHTML = 'hi';
//     console.log(elemTest,'yummy');1

const handleSubmit = async event => {
  event.preventDefault();
  let formData = document.getElementById("name").value;

  if (checkForName(formData)) {
    const api_url = `/textanalysis/${formData}`;
    const res = await fetch(api_url);
    const json = await res.json()
    console.log(json.score_tag);
    // console.log(json);
    const elemTest = document.getElementById('score_tag');
    console.log(elemTest,'happy');
    document.getElementById(
      "score_tag"
    ).innerHTML = `Score: ${json.score_tag}`;
    document.getElementById("model").innerHTML = `Score: ${json.model}`;
    document.getElementById(
      "agreement"
    ).innerHTML = `Score: ${json.agreement}`;
    document.getElementById(
      "subjectivity"
    ).innerHTML = `Score: ${json.subjectivity}`;
    document.getElementById(
      "confidence"
    ).innerHTML = `Score: ${json.confidence}`;
    document.getElementById("irony").innerHTML = `Score: ${json.irony}`;


  } else {
    alert("Please enter a valid URL to continue.");
  }
};




export { handleSubmit };

// import fetch from "node-fetch";
import { checkForName } from "./nameChecker";




const handleSubmit = async event => {
  event.preventDefault();
  let formData = document.getElementById("name").value;


  if (checkForName(formData)) {
    const api_url = `/textanalysis/${formData}`;
    const res = await fetch(api_url);
    const json = await res.json()
    console.log(json);
    document.getElementById(
      "agreement"
    ).innerHTML = `Agreement Score: ${json.agreement}`;
    document.getElementById("confidence").innerHTML = `Confidence Score: ${json.confidence}`;
    document.getElementById(
      "irony"
    ).innerHTML = `Irony Score: ${json.irony}`;
    document.getElementById(
      "model"
    ).innerHTML = `Model Type: ${json.model}`;
    document.getElementById(
      "scoretag"
    ).innerHTML = `Score Tag: ${json.score_tag}`;



  } else {
    alert("Please enter a valid URL to continue.");
  }
};

const APICall = async => {

}

export { handleSubmit };

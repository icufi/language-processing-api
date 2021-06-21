
import { checkForName } from "./nameChecker";


//client side code that receives input

const handleSubmit = async event => {
  event.preventDefault();
  let formData = document.getElementById("name").value;
  console.log(event);

//check if valid url
  if (checkForName(formData)) {

    //get request with input url as param
    const api_url = `/textanalysis/${formData}`;
    const res = await fetch(api_url);
    const json = await res.json()
//update UI with response object
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
    //alert if url input is not valid url
    alert("Please enter a valid URL to continue.");
  }
};


export { handleSubmit };

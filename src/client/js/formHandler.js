import fetch from "node-fetch";
import { checkForName } from "./nameChecker";

// const postFormText = async (url = "", data = {}) => {
//   const response = await fetch(url, {
//     method: "POST",
//     credentials: "same-origin",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });
// };
//    window.addEventListener("DOMContentLoaded", () => {
// 	// get reference to the form elemet
// 	const form = document.getElementById("form");
// 	// Add submit event listener on this form
// 	form.addEventListener("submit", handleSubmit);
// });
window.onload = () => {
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
}};


window.onload = function () {
  const elemTest = document.getElementById('score_tag');
  console.log(elemTest,'happy');
};



export { handleSubmit };

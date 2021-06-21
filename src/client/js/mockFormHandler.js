// import fetch from "node-fetch";
import { checkForName } from "./nameChecker";

async function mockHandleSubmit() {
  let formData = "https://www.carwow.co.uk/volkswagen/scirocco";

  if (checkForName(formData)) {
    const api_url = `/textanalysis/${formData}`;
    const res = await fetch(api_url);
    const json = await res.json();
    console.log(json);
  } else {
    alert("Please enter a valid URL to continue.");
  }
}

export { mockHandleSubmit };

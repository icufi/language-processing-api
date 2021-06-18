import { checkForName } from "./nameChecker";

const handleSubmit = event => {
  event.preventDefault();
  let formText = document.getElementById("name").value;
  const data = {
    formText,
  };
  if (checkForName(formText)) {
    fetch("http://localhost:8555/inputField", {
      method: "POST",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json " },
      body: JSON.stringify({ formtext: formText }),
    })
      .then((res) => res.json())
      .then(function (res) {
        document.getElementById(
          "score_tag"
        ).innerHTML = `Score: ${res.score_tag}`;
        document.getElementById("model").innerHTML = `Score: ${res.model}`;
        document.getElementById(
          "agreement"
        ).innerHTML = `Score: ${res.agreement}`;
        document.getElementById(
          "subjectivity"
        ).innerHTML = `Score: ${res.subjectivity}`;
        document.getElementById(
          "confidence"
        ).innerHTML = `Score: ${res.confidence}`;
        document.getElementById("irony").innerHTML = `Score: ${res.irony}`;
      });
  } else {
    alert("Please enter a valid URL to continue.");
  }
};

export { handleSubmit };

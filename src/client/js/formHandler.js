import bodyParser from "body-parser";

const APIBaseURL = "https://api.meaningcloud.com/sentiment-2.1";
const mcAPIKey = process.env.API_KEY;
import { checkForName } from './nameChecker'

const sentimentAnalysis = async inputURL => {
    const res = await fetch(`${APIBaseURL}?key=${mcAPIKey}&lang=en&url=${inputURL}`);
    try {
        const data = await res.json();
        console.log('data: ', data);
        return data;

    } catch (error) {
        console.log('error', error);
    }
};

const analysisResults = async (url = '', data = {}) => {
    console.log(':::Form Submitted:::', data);
    const response = await fetch("http://localhost:8555/inputfield", {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 'url': url })
    });
    try {
        const resData = await response.json();
        return resData;
    } catch (error) {
        console.log('error', error);
    }
};

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    console.log(formText);
    if(Client.checkForName(formText)) {
        postResults(formText).then(res => {
            document.getElementById('score-tag').innerHTML = `score_tag: ${res.score_tag}`;
            document.getElementById('model').innerHTML = `Model: ${res.model}`;
            document.getElementById('agreement').innerHTML = `Agreement: ${res.agreement}`;
            document.getElementById('subjectivity').innerHTML = `Subjectivity: ${res.subjectivity}`;
            document.getElementById('confidence').innerHTML = `Confidence: ${res.confidence}`;
            document.getElementById('irony').innerHTML = `Irony: ${res.irony}`;

            })} else {
                alert("Enter correct URL")
            }
    }

//     console.log("::: Form Submitted :::")
//     fetch('http://localhost:8081/test')
//     .then(res => res.json())
//     .then(function(res) {
//         document.getElementById('results').innerHTML = res.message
//     })
// }

export { handleSubmit }

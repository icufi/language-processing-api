//check if input is valid url format

const checkForName = inputText => {
    console.log("::: Running checkForName :::", inputText);
    const regex = new RegExp(/^(http|https):\/\/[^ "]+$/);
    return regex.test(inputText);
}

export {checkForName}


const inputBackgroundColor = () => {

    const inputText = document.getElementById('inputbox').value;

    inputText.includes("a") ? document.getElementById('inputbox').style.background = "green" : 
    document.getElementById('inputbox').style.background = "white";

}


export default inputBackgroundColor;
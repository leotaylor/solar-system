
const printToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML = domString;
};

const buildDomString = planetArray => {
    let domString = "";
}

function WTF (){
    console.log("Houston We Have A Problem!");
}

function executeFunction (){
    const data = JSON.parse(this.responseText);
    buildDomString(data.planets);
}

const startApplication = () => {
let myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeFunction);
myRequest.addEventListener("error", WTF);
myRequest.open("GET", "solar.json");
myRequest.send();
};

startApplication();
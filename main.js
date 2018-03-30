printToDom function
const printToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML = domString;
};



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
myRequest.open("GET", "planets.json");
myRequest.send();
};

startApplication();
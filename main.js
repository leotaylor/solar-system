
const printToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML = domString;
};

const buildDomString = (planetArray) => {
    console.log("PlanetArray:",planetArray);
    let domString = "";
    for(let i=0; i<planetArray.length; i++){
    domString += `<div class="planet">`;
    domString +=    `<h1>${planetArray[i].name}</h1>`;
    domString += `</div>`;
    }
    printToDom(domString, 'planet-holder');
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
myRequest.open("GET", "solar.json");
myRequest.send();
};

startApplication();
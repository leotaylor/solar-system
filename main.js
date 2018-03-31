//  ---------------------------------------------Print ON Load ----------------------------------
const printToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML = domString;
};

const buildDomString = (planetArray) => {
    let domString = "";
    for(let i=0; i<planetArray.length; i++){
    domString += `<div class="planet">`;
    domString +=    `<h2>${planetArray[i].name}</h2>`;
    domString +=    `<img id="planet-image" src="${planetArray[i].imageUrl}">`;
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

const startApplication = (callback) => {
let myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", callback);
myRequest.addEventListener("error", WTF);
myRequest.open("GET", "solar.json");
myRequest.send();
};

startApplication(executeFunction);

// ------------------------------Clicking on Planet -----------------------------------------


const buildBigDomString = (solarArray) => {
    console.log("solarArray:", solarArray);
    let domString = "";
    for(let j=0; j<solarArray.length; j++){
        domString += `<div class="bigCard">`;
        domString +=    `<h1>${solarArray[j].name}</h1>`;
        domString +=    `<img id="bigImage" src="${solarArray[j].imageUrl}">`;
        domString +=    `<p>${solarArray[j].description}</p>`;
        domString +=    `<h4>"Is gas planet? " ${solarArray[j].isGasPlanet}</h4>`;
        domString +=    `<h4>"Number of Moons: "${solarArray[j].numberOfMoons}</h4>`;
        domString +=    `<h4>"Largest Moon: "${solarArray[j].nameOfLargestMoon}</h4>`;
        domString += `</div>`;   
    }
    printToDom(domString, "bigCard-holder");
}


const addPlanetEventListener = () =>{
    const planetaryObject = document.getElementById("planet-image");
    for(let k=0; k<planetaryObject.length; k++){
        planetaryObject[k].addEventListener('click', clickItOrTicket);
    }
}

const clickItOrTicket = (e) => {
    const newContainer = e.target.parentNode;
}


function clickFunction (){
    const data = JSON.parse(this.responseText);
    buildBigDomString(data.planets);
    addPlanetEventListener();
}

// startApplication(clickFunction);




// const clickApplication = () =>{
// let newRequest = new XMLHttpRequest();
// newRequest.addEventListener("load", clickFunction);
// newRequest.addEventListener("error", WTF);
// newRequest.open("GET", "solar.json");
// newRequest.send();
// };

// clickApplication();
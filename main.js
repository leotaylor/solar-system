//  ---------------------------------------------Print ON Load ----------------------------------
let selectedPlanet ="";

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
    console.log("Houston, We Have A Problem!");
}

function executeFunction (){
    const data = JSON.parse(this.responseText);
    buildDomString(data.planets);
    addPlanetEventListener();
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
        if(solarArray[j].name === selectedPlanet){
        domString += `<div class="bigCard">`;
        domString +=    `<button class="x-button">&#x2718</button>`
        domString +=    `<h1>${solarArray[j].name}</h1>`;
        domString +=    `<img id="bigImage" src="${solarArray[j].imageUrl}">`;
        domString +=    `<p>${solarArray[j].description}</p>`;
        domString +=    `<h4>"Is gas planet? " ${solarArray[j].isGasPlanet}</h4>`;
        domString +=    `<h4>"Number of Moons: "${solarArray[j].numberOfMoons}</h4>`;
        domString +=    `<h4>"Largest Moon: "${solarArray[j].nameOfLargestMoon}</h4>`;
        domString += `</div>`;   
    }
}
    printToDom(domString, "planet-holder");
}

const addPlanetEventListener = () =>{
    const planetaryObject = document.getElementsByClassName("planet");
    console.log("planetaryObject:", planetaryObject);
    for(let k=0; k<planetaryObject.length; k++){
        planetaryObject[k].addEventListener('click', clickItOrTicket);
    }
}

const clickItOrTicket = (e) => {
    selectedPlanet = e.target.parentNode.children[0].innerHTML;
    // const selectedPlanet = e.target.parentNode.children[0];
    console.log("selectedPlanet: ", selectedPlanet);
    startApplication(clickFunction);
}

function clickFunction (){
    const data = JSON.parse(this.responseText);
    console.log("data", data);  
    // for loop, if statement, traverseDom
    buildBigDomString(data.planets);
    addXeventListener();
}

// --------------Clicking on X--------------------------

const addXeventListener = () =>{
    const XButton = document.getElementsByClassName("x-button");
    for(let n=0; n<XButton.length; n++){
    XButton[n].addEventListener('click', closeIt);
    }
}

const closeIt = e => {
    startApplication(executeFunction);
}
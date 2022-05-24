function httpPost(method,post){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( method, post, false ); // false for synchronous request
    xmlHttp.send( null );
}

document.querySelector("#nextStep").addEventListener('click', function(e) {
    httpPost("POST","https://bubble-machine-api-dummy.herokuapp.com/rest/session/2/step");
    location.reload();
}, false);

document.querySelector("#resetSimulation").addEventListener('click', function(e) {
    httpPost("PUT","https://bubble-machine-api-dummy.herokuapp.com/rest/session/2/reset");
    location.reload();
}, false);

var
  svg = document.getElementById('mysvg'),
  NS = svg.getAttribute('xmlns');

function httpGet(){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://bubble-machine-api-dummy.herokuapp.com/rest/session/2", false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

const session = JSON.parse(httpGet());

console.log(session);


function reversNumber(number){
if(number < 0){
    return Math.abs(number);
}
else{
    return Math.abs(number) * -1;
}
}

var i = 0;
for (const item of session["nodes"] ) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(session["nodes"][i]["id"]+" | "+ session["nodes"][i]["label"]+" | X="+session["nodes"][i]["x"]+" | Y="+session["nodes"][i]["y"]));
    document.querySelector("#listNotes").appendChild(li);
    c = document.createElementNS(NS, 'circle');
    c.setAttribute('id',session["nodes"][i]["id"]);
    c.classList.add(session["nodes"][i]["label"]);
c.setAttributeNS(null, 'cx', session["nodes"][i]["x"]);
c.setAttributeNS(null, 'cy',  reversNumber(session["nodes"][i]["y"]));
c.setAttributeNS(null, 'r', 0.04);
svg.appendChild(c);
    i++;
}




var i = 0;
for (const item of session["links"] ) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(session["links"][i]["label"]+" - "+session["links"][i]["source"]+" - "+session["links"][i]["target"]));
    document.querySelector("#listDocuments").appendChild(li);
    var newLine = document.createElementNS('http://www.w3.org/2000/svg','line');
newLine.setAttribute('id','line2');
newLine.setAttribute('x1',`${document.getElementById(session["links"][i]["source"]).cx.baseVal.value}`);
newLine.setAttribute('y1',`${document.getElementById(session["links"][i]["source"]).cy.baseVal.value}`);
newLine.setAttribute('x2',`${document.getElementById(session["links"][i]["target"]).cx.baseVal.value}`);
newLine.setAttribute('y2',`${document.getElementById(session["links"][i]["target"]).cy.baseVal.value}`);
newLine.setAttribute("stroke", "black")
newLine.setAttribute("stroke-width", "0.01")
svg.append(newLine);
i++;
}

// click a circle
svg.addEventListener('click', function(e) {
    var t = e.target;
    if (t.nodeName != 'circle') return;
    t.classList.add("test");
    console.log(t.getBoundingClientRect());
  }, false);

    // https://www.sitepoint.com/how-to-translate-from-dom-to-svg-coordinates-and-back-again/



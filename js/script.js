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



var i = 0;
for (const item of session["nodes"] ) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(session["nodes"][i]["id"]+" | "+ session["nodes"][i]["label"]+" | X="+session["nodes"][i]["x"]+" | Y="+session["nodes"][i]["y"]));
    document.querySelector("#listNotes").appendChild(li);
    c = document.createElementNS(NS, 'circle');
c.setAttributeNS(null, 'cx', session["nodes"][i]["x"]/2+1);
c.setAttributeNS(null, 'cy',  session["nodes"][i]["y"]/2+1);
c.setAttributeNS(null, 'r', 0.04);
svg.appendChild(c);
    i++;
}




// var i = 0;
// for (const item of session["links"] ) {
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode(session["links"][i]["label"]+" - "+session["links"][i]["source"]+" - "+session["links"][i]["target"]));
//     document.querySelector("#listDocuments").appendChild(li);
//     i++;
// }

// https://www.sitepoint.com/how-to-translate-from-dom-to-svg-coordinates-and-back-again/


  
// add random circles
//   c = document.createElementNS(NS, 'circle');
//   c.setAttributeNS(null, 'cx', 1);
//   c.setAttributeNS(null, 'cy',  1);
//   c.setAttributeNS(null, 'r', 0.04);
//   svg.appendChild(c);


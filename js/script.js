// function httpGet(){
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.open( "GET", "https://bubble-machine-api-dummy.herokuapp.com/rest/session/2", false ); // false for synchronous request
//     xmlHttp.send( null );
//     return xmlHttp.responseText;
// }

// const session = JSON.parse(httpGet());

// console.log(session);



// var i = 0;
// for (const item of session["nodes"] ) {
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode(session["nodes"][i]["id"]+" - "+ session["nodes"][i]["label"]+" - "+session["nodes"][i]["x"]+" - "+session["nodes"][i]["y"]));
//     document.querySelector("#listNotes").appendChild(li);
// // var c = document.getElementById("myCanvas");
// // var ctx = c.getContext("2d");
// // ctx.beginPath();
// // ctx.arc(session["nodes"][i]["x"]*100,session["nodes"][i]["y"]*100,10,0,2*Math.PI);
// // ctx.stroke();
//     i++;
// }



// var i = 0;
// for (const item of session["links"] ) {
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode(session["links"][i]["label"]+" - "+session["links"][i]["source"]+" - "+session["links"][i]["target"]));
//     document.querySelector("#listDocuments").appendChild(li);
//     i++;
// }


// // ctx.arc(x,y,40,0,2*Math.PI);
// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");
// ctx.beginPath();
// ctx.arc(95,50,10,0,2*Math.PI);
// ctx.stroke();

// https://www.sitepoint.com/how-to-translate-from-dom-to-svg-coordinates-and-back-again/

var
  svg = document.getElementById('mysvg'),
  NS = svg.getAttribute('xmlns');
  
// add random circles
var c, i;
for (i = 0; i < 1; i++) {
  c = document.createElementNS(NS, 'circle');
  c.setAttributeNS(null, 'cx', 800);
  c.setAttributeNS(null, 'cy',  400);
  c.setAttributeNS(null, 'r', 20);
  svg.appendChild(c);
}

// click a circle
svg.addEventListener('click', function(e) {
  var t = e.target;
  if (t.nodeName != 'circle') return;
  t.setAttributeNS(null, 'r', 
    parseFloat(t.getAttributeNS(null, 'r')) + 10
  );
  console.log(t.getBoundingClientRect());
}, false);
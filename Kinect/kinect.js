//Par Avatar Rousseau (Dark Best), alias seb03000.
exports.action = function(data, callback, config, SARAH) {	
var exec = require('child_process').exec;
switch(data.val) {
case "Kinect": // Lance une capture décran
var process = '%CD%/plugins/Kinect/bin/Kinect.bat';
var Txt = new Array; 
Txt[0] = "Prise de la photo en cour";
break;
}    
var child = exec(process,
function (error, stdout, stderr) {
console.log(process);
});
Choix = Math.floor(Math.random() * Txt.length); 
callback({'tts': Txt[Choix]});
}
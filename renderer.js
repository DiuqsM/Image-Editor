var nodeConsole = require('console');
var myConsole = new nodeConsole.Console(process.stdout, process.stderr);

//need IPC renderer to communicate with main.js

function button1Click(){
    console.log("Window api: " + window.myAPI.desktop);
    myConsole.log('Hello World!');
}

//loads any function so that we dont have to worry about where to put the script tag in HTML
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOMContentLoaded");
    document.getElementById('btn').addEventListener('click', button1Click);
});

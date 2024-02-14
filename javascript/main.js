const {app, BrowserWindow, document} = require('electron');
const path = require('path');
const { showOpenDialog, showSaveDialog} = require('./dialog');


let mainWindow;

function testing(){
  //testing
  console.log("showOpenDialog");
  }

app.whenReady().then(() => {
  mainWindow = new BrowserWindow();
  mainWindow.loadFile(path.join(__dirname, 'index.html'));
}) ;
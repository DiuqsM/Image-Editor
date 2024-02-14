const {app, BrowserWindow, document} = require('electron');
const path = require('path');
const { showOpenDialog, showSaveDialog} = require('./dialog');


let mainWindow;

app.whenReady().then(() => {
  mainWindow = new BrowserWindow();
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  let button = document.getElementById("input_file_btn");
  button.addEventListener("click", showOpenDialog(mainWindow));

}) ;
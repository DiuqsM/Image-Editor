const {dialog, app, BrowserWindow} = require('electron');
const fs = require('fs');
const path = require('path');

module.exports = {
  showSaveDialog,
  showOpenDialog
}

function showSaveDialog(BrowserWindow){
    //not implemeted yet
  }


function showOpenDialog(BrowserWindow){
  //testing
  console.log("showOpenDialog");

    dialog.showOpenDialog(BrowserWindow,{
      defaultPath: app.getPath("downloads"),
      filters: [
        { name: "Image", extensions: ["jpg", "png", "jpeg"]}
      ]
    }, (filepaths) => {
      if(filepaths) {
        console.log(filepaths, fs.readFileSync(filepaths[0], 'utf8'));
      }
    })
  }
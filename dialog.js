const {dialog, app} = require('electron');
const fs = require('fs');
const path = require('path');


module.exports = {showOpenDialog};

//saves the image
function showSaveDialog(){
    //not implemeted yet
    console.log("showSaveDialog called");
  }

//opens the image 
function showOpenDialog(){
  //testing
  console.log("showOpenDialog called");

    dialog.showOpenDialog({
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
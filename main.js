const {app, BrowserWindow} = require('electron');
const path = require('path');
const {setMainMenue} = require('./set-menue');

module.exports = {windowSetUp};

let mainWindow;

//get the main process id and print it to the console
console.log("Main Process id: " + process.pid);

function windowSetUp(){
  mainWindow = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });
  //mainWindow.loadURL('https://github.com');
  mainWindow.loadFile(path.join(__dirname, 'index.html'));
  setMainMenue();
}

//opens the window when the app is ready
app.whenReady().then(() => {
windowSetUp();
});

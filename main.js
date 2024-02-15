const {app, BrowserWindow} = require('electron');
const path = require('path');
const {setMainMenue} = require('./set-menue');

let mainWindow;

//opens the window when the app is ready
app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });
  //mainWindow.loadURL('https://github.com');
  mainWindow.loadFile(path.join(__dirname, 'index.html'));
  setMainMenue(mainWindow);
});

const path = require('path');
const {app, BrowserWindow, globalShortcut} = require('electron');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: { nodeIntegration: true }
  });

    mainWindow.loadFile(path.join(__dirname, 'index.html'));
}

function coordinate(event) {
  let x = event.clientX;
  let y = event.clientY;
  document.getElementById("X").value = x;
  document.getElementById("Y").value = y;
}

// if pressing ctrl + alt + shift
// screen_shot = true
// if press esc , screen_shot = false
// on click, save coordinate to data 
// on second click save coordinate to data
// screen_shot = false 
// take screenshot of the data 
// calculate the area and take the screenshot of that specific area 
// 1 (download the image and post it to google images in the browser app)
// 2 (open a google image search page and post the image to the search bar)
// redirect the user to the google images page


//need two frameworks 
app.whenReady().then(() => {
  // Register a 'CommandOrControl+X' shortcut listener.

  createWindow();

}) ;
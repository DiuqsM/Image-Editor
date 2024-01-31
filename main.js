const path = require('path');
const {app, BrowserWindow } = require('electron');

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


app.whenReady().then(() => {
    createWindow();
}) ;
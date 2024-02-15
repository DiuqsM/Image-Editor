const {app, Menu, BrowserWindow} = require('electron');
const path = require('path');
const {showOpenDialog} = require('./dialog');

module.exports = {setMainMenue};

//creates the top left menue tab
function setMainMenue(web){
    const template = [
        {
        label: "File",
        submenu: [
            {
            label: "New Window",
            click: () => {
                mainWindow = new BrowserWindow();
                mainWindow.loadFile(path.join(__dirname, 'index.html'));              
            }
            },
            {
            label: "Open",
            click: () => {
                showOpenDialog();
            }
            },
            {
            label: "Save",
            click: () => {
                console.log("Save clicked");
            }
            },
            {
            label: "Exit",
            click: () => {
                app.quit();
            }
            }
        ]
    }
];

const menue = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menue);
}

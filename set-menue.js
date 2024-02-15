const {app, Menu, BrowserWindow} = require('electron');
const path = require('path');
const {showOpenDialog} = require('./dialog');
const {windowSetUp} = require('./main');

module.exports = {setMainMenue};

//creates the top left menue tab

function setMainMenue(){
    const template = [
        {
        label: "File",
        submenu: [
            {
            label: "New Window",
            click: () => {

                //this is not workign as expected
                windowSetUp();

                //why is it the same process id as the original window? 
                console.log(process.pid);                         
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

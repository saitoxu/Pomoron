const electron = require('electron');
const app = electron.app;
const Menu = electron.Menu;
const BrowserWindow = electron.BrowserWindow;
const template = [];
const menu = Menu.buildFromTemplate(template);

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 280,
    height: 100,
    alwaysOnTop: true,
    resizable: false
  });
  win.webContents.openDevTools();
  win.loadURL(`file://${__dirname}/index.html`);
  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
Menu.setApplicationMenu(menu);

const { app, BrowserWindow, screen } = require('electron')
const path = require('path')
const { dialog } = require('electron')


const createWindow = () => {

const size = screen.getPrimaryDisplay().workAreaSize;
  
  const win = new BrowserWindow({
    width: size.width - 1,
    height: size.height - 1,
    minWidth: 260,
    minHeight: 360,
      transparent: true, 
      resizable: true,
      frame: false,
     webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js')
    },
    vibrancy: "under-window",
    titleBarStyle: "hidden",

  })
  win.webContents.openDevTools({mode:'undocked'})

  

  win.webContents.setFrameRate(60);

  // Set maximized size
  win.maximize(); // change window size -> redrawing
  win.setFullScreen(true); // change window property -> redrawing

 
  win.loadFile('index.html')
}

app.on('ready', function () {
  setTimeout(function() {
      createWindow();
  }, 500);
});
// app.whenReady().then(() => createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.whenReady().then(() => {

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
const { app, BrowserWindow } = require('electron')
const path = require('path')
const { dialog } = require('electron')
 const url = require('url').format({
  protocol: 'file',
  slashes: true,
  pathname: require('path').join(__dirname, 'index.html')
})

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    // frame:false,
    // transparent: true, 
    /** 
       titleBarStyle: 'hidden',
  titleBarOverlay: {
    color: '#2f3241',
    symbolColor: '#74b1be'
  },   
     **/
     webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // dialog.showOpenDialog(mainWindow, {properties: ['openFile', 'multiSelections'] }).then(result => { console.log(result.canceled); console.log(result.filePaths) }).catch(err => { console.log(err) })

  mainWindow.loadFile('index.html')
  // mainWindow.maximize()
}

app.whenReady().then(() => {
  createWindow()
})

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

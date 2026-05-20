const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 900,
    minHeight: 600,
    title: 'ABUBAKR INTERNATIONAL MODEL — School Results System',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  })

  win.loadFile('index.html')

  // Remove default menu bar
  Menu.setApplicationMenu(null)
}

app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

/*
const { app, BrowserWindow, ipcMain, nativeTheme, globalShortcut } = require('electron')
const path = require('path');

function createWindow () {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    title:"Gis Desktop",
    icon: path.join(__dirname, '../logo/logo.png'),
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule:true,
      preload: path.join(__dirname, "preload.js")
    }
  })
  process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';
  //load the index.html from a url
  //win.loadURL('http://localhost:3001');
  win.loadFile(path.join(__dirname, "../build/index.html"));

  ipcMain.handle('dark-mode:toggle', () => {
    if (nativeTheme.shouldUseDarkColors) {
      nativeTheme.themeSource = 'light'
    } else {
      nativeTheme.themeSource = 'dark'
    }
    return nativeTheme.shouldUseDarkColors
  })

  ipcMain.handle('dark-mode:system', () => {
    nativeTheme.themeSource = 'system'
  })

  app.whenReady().then(() => {
    globalShortcut.register('Alt+D', () => {
        if (nativeTheme.shouldUseDarkColors) {
          nativeTheme.themeSource = 'light'
        } else {
          nativeTheme.themeSource = 'dark'
        }
        return nativeTheme.shouldUseDarkColors
    })
  })
  
  app.whenReady().then(() => {
    if (process.platform !== 'darwin') {
        globalShortcut.register('CommandOrControl+F', () => {
          win.maximize();
        });
    }
    if (process.platform !== 'darwin') {
        globalShortcut.register('CommandOrControl+G', () => {
          win.unmaximize();
        });
    }

    ipcMain.on('online-status-changed', (event, status) => {
      console.log(status)
    })

  })

  // Open the DevTools.
  //win.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
*/
const { app, BrowserWindow, ipcMain, nativeTheme, globalShortcut } = require('electron')
const path = require('path');

function createWindow () {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    title:"Gis Desktop",
    icon: path.join(__dirname, './logo/logo.png'),
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule:true,
      preload: path.join(__dirname, "./public/preload.js")
    }
  })
  process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';
  //load the index.html from a url
  //win.loadURL('http://localhost:3001');
  win.loadFile(path.join(__dirname, "./build/index.html"));

  ipcMain.handle('dark-mode:toggle', () => {
    if (nativeTheme.shouldUseDarkColors) {
      nativeTheme.themeSource = 'light'
    } else {
      nativeTheme.themeSource = 'dark'
    }
    return nativeTheme.shouldUseDarkColors
  })

  ipcMain.handle('dark-mode:system', () => {
    nativeTheme.themeSource = 'system'
  })

  app.whenReady().then(() => {
    globalShortcut.register('Alt+D', () => {
        if (nativeTheme.shouldUseDarkColors) {
          nativeTheme.themeSource = 'light'
        } else {
          nativeTheme.themeSource = 'dark'
        }
        return nativeTheme.shouldUseDarkColors
    })
  })
  
  app.whenReady().then(() => {
    if (process.platform !== 'darwin') {
        globalShortcut.register('CommandOrControl+F', () => {
          win.maximize();
        });
    }
    if (process.platform !== 'darwin') {
        globalShortcut.register('CommandOrControl+G', () => {
          win.unmaximize();
        });
    }

    ipcMain.on('online-status-changed', (event, status) => {
      console.log(status)
    })

  })

  // Open the DevTools.
  //win.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})


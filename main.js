const {app, BrowserWindow,ipcMain} = require('electron')
const path = require('path')

function createWindow(){
    //创建浏览器窗口
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences:{
            preload: path.join(__dirname,'preload.js')
        }
    })
    ipcMain.handle('ping',() =>'pong')
    //然后加载应用的 index.html
    win.loadFile('index.html')
}

// app.on('ready',createWindow)
app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })
  

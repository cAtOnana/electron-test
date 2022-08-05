// window.addEventListener('DOMContentLoaded',() => {
//     const replaceText = (selector,text) => {
//         const element = document.getElementById(selector)
//         if (element) element.innerText = text
//     }

//     for (const dependency of ['chrome','node','electron']){
//         replaceText(`${dependency}-version`,process.versions[dependency])
//     }
// })
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('versions',{
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
    ping: () => ipcRenderer.invoke('ping'),//注册一个名为ping的频道（channel），与主程序的通信通过这个频道进行
})
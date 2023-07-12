const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('theme', {
  toggle: () => ipcRenderer.invoke('dark-mode:toggle'),
  setSystem: () => ipcRenderer.invoke('dark-mode:system')
})

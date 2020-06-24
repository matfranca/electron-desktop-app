const { app, BrowserWindow, Tray, Menu, ipcMain } = require('electron');
const shell = require('electron').shell;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}


const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 340,
    resizable: false,
    height: 500,
    maximizable: false,
    frame: false,
    enableLargerThanScreen: false,
    opacity: 0.90,
    titleBarStyle: "hidden",
    webPreferences: {
      nodeIntegration: true
    },
  });

  // and load the index.html of the app.
  mainWindow.loadFile('src/index.html');

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();

  // var menu = Menu.buildFromTemplate([
  //   {
  //     label: 'Menu',
  //     submenu: [
  //       {
  //         label: 'Hello',
  //         click() {
  //           console.log('World');
  //         }
  //       },
  //       {
  //         label: 'Hide from everybody',
  //         click() {
  //           app.hide(createWindow);
  //         }
  //       },
  //       {
  //         label: 'Tray On/Off',
  //         click() {
  //           tray.hide();
  //         }
  //       },
  //       {
  //         label: 'Exit',
  //         click(){
  //           app.quit;
  //         }
  //       }
  //     ]
  //   }
  // ])

  // Menu.setApplicationMenu(menu);
};

app.whenReady().then(createWindow);

// app.dock.hide();

let tray = null;

app.on('ready', () => {
  tray = new Tray('public/assets/logo_16x16.png');
  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Opacidade Settings',
      submenu: [
        {
          label: 'Opacidade +',
        },
        {
          label: 'Opacidade -' ,
        }
      ]
    },
    {
      label: 'Sair',
      click (){
        createWindow.call(createWindow);
      }
    }
  ]);
  tray.setToolTip('Electron App');
  tray.setContextMenu(contextMenu);

  // const loginBtn = document.getElementById('loginBtn');

  // loginBtn.addEventListener('click', () => {
  //   console.log('Button clicked');
  // });

  // const loginBtn = document.querySelector('loginBtn').addEventListener(
  //   'click', () => {
  //     console.log('Button clicked');
  //   }
  // );
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
//app.on('ready', createWindow);


// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  // if (process.platform !== 'darwin') {
  //   app.quit();
  // }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
ipcMain.on('btnclick', function(event,arg) {
  console.log(arg.username);
});

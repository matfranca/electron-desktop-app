const { BrowserView } = require('electron').remote;
const { ipcRenderer, remote, BrowserWindow } = require('electron');

const loginBtn = document.getElementById('loginBtn');

let userNotification = {
  title: String,
  body: 'Your login was made successfully',
};
// Handle creating/removing shortcuts on Windows when installing/uninstalling.
// loginBtn.addEventListener('click', () => {
//   console.log('Button clicked');
// });

loginBtn.addEventListener(
  'click', () => {
    let userLogin = {
      username: document.getElementById('usernameField').value,
      password: document.getElementById('passwordField').value,
    };
    const myNotification = new window.Notification(
      userNotification.title = `Olá ${userLogin.username}`,
      userNotification,
    );
    // console.log(userLogin);
    // let window = remote.getCurrentWindow();
    // window.close();
    ipcRenderer.send("btnclick", userLogin);

    let win = remote.getCurrentWindow();
    win.hide();
  }
);
// document.querySelector('loginBtn').addEventListener(
//   'click', () => {
//     console.log('Button clicked');
//   }
// );

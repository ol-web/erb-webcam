# ERB Webcam

![App preview](https://github.com/oL-web/erb-webcam/blob/master/resources/preview.png?raw=true)

Webcam desktop app based on electron-react-boilerplate made to test out Electron instead of nw.js (that I used before for [my game](https://store.steampowered.com/app/1274090/Hotfix/)) as well as the auto-update functionality of electron-builder with Github releases

I found no use case for Redux here, so some of the original boilerplate code and tests are left untouched or commented out, but the app and its tests work just fine :)

---

### Usage:

Download or clone this repository so you can run the following commands:

`yarn`  
`yarn dev` - development  
`yarn build` - builds the app  
`yarn package` - packages the app into standalone executables and installers  
`yarn my-publish` - publishes the packaged app to Github releases in your repository (make sure to have an .env file with GH_TOKEN API key and to approve the release manually afterwards)  
`yarn test` - runs Jest for testing  
`yarn test-watch` - like above but in watch mode

---

### Is there something wrong?

Please tell me!

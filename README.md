# tt-test-demo

首先启动h5页面，该h5页面内设置了定时，3秒后会调用navigateBack
```
//启动h5页面
$ cd h5
$ npm install
$ npm start
```
小程序内，连续点击文字，连续跳转到page1、page2、webview

在webview内停留3秒，会连续回退两层页面，回到page1

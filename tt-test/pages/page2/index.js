// pages/page2/index.js
Page({
  data: {

  },
  onLoad: function (options) {

  },
  clickToWebview(){
    tt.navigateTo({
      url: '/pages/webview/index' // 指定页面的url
    });
  }
})
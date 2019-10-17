// pages/page1/index.js
Page({
  data: {

  },
  onLoad: function (options) {

  },
  clickToPage2(){
    tt.navigateTo({
      url: '/pages/page2/index' // 指定页面的url
    });
  }
})
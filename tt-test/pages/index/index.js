const app = getApp()

Page({
  data: {

  },
  onLoad: function () {
    console.log('Welcome to Mini Code')
  },
  clickToPage1(){
    tt.navigateTo({
      url: '/pages/page1/index' // 指定页面的url
    });
  }
})

var app = getApp()

Page({
  onLoad: function() {
    console.log("[home] index onload")
    this.login()

  },
  data: {},
  login: function () {
    console.log("[home] login call")
    var that = this
    wx.login({
      success: function (res) {
        console.log('[home] login success, code:' + res.code)
        

      },
      timeout: function (res) {
        console.log('[home] login timeout')
      },
      fail: function (res) {
        console.log('[home] login fail')
      }
    })
  }
});
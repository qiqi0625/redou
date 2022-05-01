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
    
    wx.checkSession({
      success: (res) => {
        wx.request({
          url: 'http://192.168.0.103:7788/wx/login',
              data: {
                code: res.code
              }
        })
      },
      fail: (res) => {
        // session 失效
        wx.login({
          timeout: 120,
          success: (res) => {
            wx.request({
              url: 'http://192.168.0.103:7788/wx/login',
              data: {
                code: res.code
              }
            })
          }
        })
      }
    })


  }
});
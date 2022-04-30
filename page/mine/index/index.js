Page({
  data: {
    menuList: [
    {
      name: '我的佣金',
      opened: false, 
      url: '../commission/commission'
    },
    {
      name: '关注公众号',
      opened: false, 
      url: '../public-number/public-number'
    },
    {
      name: '在线客服',
      opened: false, 
      url: '../online-service/online-service'
    },
    {
      name: '关于我们',
      opened: false, 
      url: '../about-us/about-us'
    }]
  },
  tapMenuItem: function (e) {
    var menuItem = this.data.menuList[parseInt(e.currentTarget.id)] 
    if (menuItem.url) {
      wx.navigateTo({ url: menuItem.url })
    } else {
      var changeData = {}
      var opened = menuItem.opened

      changeData['menuList[' + e.currentTarget.id + '].opened'] = !opened
      this.setData(changeData)
    }
  }
})

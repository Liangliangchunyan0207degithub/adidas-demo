/*
 * @Author: chunyan.liang <chunyan.liang@hand-china.com>
 * @Date: 2021-07-06 17:23:25
 * @LastEditTime: 2021-07-12 14:49:00
 * @Description: 
 */
// app.ts
App<IAppOption>({
  globalData: {
    navBarHeight: 0,
    statusHeight: 0,
    navBarWidth: 0
  },
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log(res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    })
    let systemInfo: any = wx.getSystemInfoSync();
    let rect: any = wx.getMenuButtonBoundingClientRect ? wx.getMenuButtonBoundingClientRect() : null; //胶囊按钮位置信息
    let gap: number = rect.top - systemInfo.statusBarHeight;
    let navBarHeight: number = 2 * gap + rect.height
    this.globalData.navBarHeight = navBarHeight
    this.globalData.statusHeight = systemInfo.statusBarHeight
    this.globalData.navBarWidth = systemInfo.windowWidth - rect.width - (systemInfo.windowWidth - rect.right) * 2
    console.log(this.globalData.navBarWidth, rect, '宽度')
  },
})
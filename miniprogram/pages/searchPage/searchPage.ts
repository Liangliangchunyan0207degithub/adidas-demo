/*
 * @Author: chunyan.liang <chunyan.liang@hand-china.com>
 * @Date: 2021-07-09 17:47:06
 * @LastEditTime: 2021-07-12 13:47:07
 * @Description:
 */
interface searchData {
  historySearchList: any[],
  inputValue: any
}

Page({
  data: <searchData>{
    historySearchList: [],
    inputValue: ""
  },
  onLoad(options: any) {
    console.log(options, '参数')
    if (options && options.searchValue) {
      this.setData({
        inputValue: options.searchValue,
      })
    }
    let historySearchList = wx.getStorageSync('historySearchList')
    if (historySearchList) {
      this.setData({
        historySearchList,
      })
    } else {
      wx.setStorageSync('historySearchList', [])
    }

  },
  // 返回
  goBack(): void {
    wx.navigateBack()
  },
  clearHistory(): void {
    wx.setStorageSync('historySearchList', [])
    this.setData({
      historySearchList: [],
    })
  },
  search(e: any): void {
    console.log(e, "传递的值")
    let newList: any[] = this.data.historySearchList
    // 限制搜索历史，和搜索重复历史
    let findIdx: number = newList.findIndex((el: any) => el === e.detail.value)
    if (findIdx !== -1) {
      newList.splice(findIdx, 1)
    }
    if (newList.length > 10) {
      newList.pop()
    }
    newList.unshift(e.detail.value.trim())
    wx.setStorageSync('historySearchList', newList)
    this.setData({
      historySearchList: newList,
      inputValue: ""
    })
  }
})
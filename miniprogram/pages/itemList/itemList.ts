/*
 * @Author: chunyan.liang <chunyan.liang@hand-china.com>
 * @Date: 2021-07-06 18:13:48
 * @LastEditTime: 2021-07-08 16:57:37
 * @Description: 
 */
// 定义实例
interface itemListData {
  dataList: dataListInterface[],
  showPrelodImg: boolean,
  leftList: dataListInterface[],
  rightList: dataListInterface[],
}

interface dataListInterface {
  id: number,
  imgUrl: string,
  tagList: string[],
  name: string,
  price: number,
  isHot: boolean,
  HotName: string,
  Ranking: number
}
let leftHeight: number = 0
let rightHeight: number = 0
let query: any;
Page({
  data: <itemListData>{
    dataList: [],
    showPrelodImg: false,
    leftList: [],
    rightList: [],
  },
  onLoad(options: any): void {
    console.log(this.data.dataList, options)
    this.getItemList()
  },
  getItemList(type?: number): void {
    let _this = this
    _this.setData({
      showPrelodImg: true
    })
    wx.request({
      url: "https://example.com/getList",
      dataType: 'json',
      async success(res: any) {
        if (type) { // 上拉加载

          _this.setData({
            dataList: [..._this.data.dataList, ...res.data.list]
          })
        } else { // 下拉刷新
          _this.setData({
            dataList: res.data.list
          })
          wx.stopPullDownRefresh()
        }

        // 请求数据计算高度
        query = wx.createSelectorQuery();
        const { leftList, rightList } = _this.data
        for (const item of res.data.list) {
          leftHeight <= rightHeight ? leftList.push(item) : rightList.push(item); //判断两边高度，来觉得添加到那边
          await _this.getHeight(leftList, rightList);
        }
        _this.setData({
          showPrelodImg: false,
        })
      }
    })
  },
  // 上拉加载
  onReachBottom(): void {
    if (!this.data.showPrelodImg) {
      this.getItemList(1)
    }

  },
  // 下拉刷新
  onPullDownRefresh(): void {
    // 重置数据
    this.setData({
      dataList: [],
      showPrelodImg: false,
      leftList: [],
      rightList: [],
      loadingImgSite: "left"
    })
    this.getItemList(0)
  },
  // 获取高度
  getHeight(leftList: dataListInterface[], rightList: dataListInterface[]) {
    return new Promise((resolve, reject): void => {
      this.setData({ leftList, rightList }, () => {
        query.select('.left-item').boundingClientRect();
        query.select('.right-item').boundingClientRect();
        query.exec((res: any) => {
          leftHeight = res[0].height; //获取左边列表的高度
          rightHeight = res[1].height; //获取右边列表的高度
          resolve();
        });
      });
    })
  },


})

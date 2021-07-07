/*
 * @Author: chunyan.liang <chunyan.liang@hand-china.com>
 * @Date: 2021-07-06 18:13:48
 * @LastEditTime: 2021-07-07 21:12:11
 * @Description: 
 */
// 定义实例
interface itemListData {
  dataList: dataListInterface[],
  showPrelodImg: boolean
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

class NewItemList {
  data: itemListData = {
    dataList: [
    ],
    showPrelodImg: false
  };
  onLoad(options: any): void {
    console.log(this.data.dataList, options)
    this.getItemList()
  };
  getItemList(type?: number): void {
    let _this = this
    //@ts-ignore
    _this.setData({
      showPrelodImg: true
    })
    wx.request({
      url: "https://example.com/getList",
      dataType: 'json',
      success(res: any) {
        if (type) { // 上拉加载
          //@ts-ignore
          _this.setData({
            dataList: [..._this.data.dataList, ...res.data.list]
          })
        } else { // 下拉刷新
          //@ts-ignore
          _this.setData({
            dataList: res.data.list
          })
          wx.stopPullDownRefresh()
        }
        //@ts-ignore
        _this.setData({
          showPrelodImg: false
        })
      }
    })
  };
  // 上拉加载
  onReachBottom(): void {
    console.log(this.data.showPrelodImg)
    if (!this.data.showPrelodImg) {
      this.getItemList(1)
    }

  };
  // 下拉刷新
  onPullDownRefresh(): void {
    this.getItemList(0)
  };
  // 获取图片尺寸
  getImgSize(option: any): void {
    let imageWidth: number = option.detail.width
    let imageHeight: number = option.detail.height
  }

}

Page(new NewItemList())

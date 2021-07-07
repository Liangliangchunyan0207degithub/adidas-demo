/*
 * @Author: chunyan.liang <chunyan.liang@hand-china.com>
 * @Date: 2021-07-06 18:13:48
 * @LastEditTime: 2021-07-07 16:30:57
 * @Description: 
 */
// 定义实例
interface itemListData {
  dataList: dataListInterface[],
  aa: string,
  bb: number
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
    aa: '1111',
    bb: 11
  };
  onLoad(options: any): void {
    console.log(this.data.aa, this.data.bb, this.data.dataList, options)
    this.getItemList()
  };
  getItemList(type?: number): void {
    let _this = this
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

      }
    })
  };
  onReachBottom(): void {
    this.getItemList(1)
  };
  onPullDownRefresh(): void {
    this.getItemList(0)
  }

}

Page(new NewItemList())

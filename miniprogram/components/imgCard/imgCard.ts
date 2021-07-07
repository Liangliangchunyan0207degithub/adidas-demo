/*
 * @Author: chunyan.liang <chunyan.liang@hand-china.com>
 * @Date: 2021-07-06 18:14:22
 * @LastEditTime: 2021-07-07 19:09:41
 * @Description: 
 */
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imgData: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onImageLoad(options: any): void {
      console.log(options,)
      this.triggerEvent('getImgSize', options.detail)
    }
  }
})
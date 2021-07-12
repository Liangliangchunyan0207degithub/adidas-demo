/*
 * @Author: chunyan.liang <chunyan.liang@hand-china.com>
 * @Date: 2021-07-11 20:57:28
 * @LastEditTime: 2021-07-12 16:54:35
 * @Description:
 */
// import { IApp } from '../../app';

const app1 = getApp();
let timer: any
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    inputValue: {
      type: String,
      value: ""
    },
    placeholderArray: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    navBarHeight: 0,
    statusHeight: 0,
    navBarWidth: 0,
    top: 0,
    pageNumber: 1,
  },
  pageLifetimes: {
    show() {
      this.moveToTop()
    },
  },

  attached() {
    let navBarHeight: number = app1.globalData.navBarHeight
    let statusHeight: number = app1.globalData.statusHeight
    let navBarWidth: number = app1.globalData.navBarWidth
    let pageNumber: number = getCurrentPages().length
    console.log(pageNumber, '页面数')
    this.setData({
      navBarHeight,
      statusHeight,
      navBarWidth,
      pageNumber
    })

  },
  ready() {
    console.log('11111')
  },

  /**
   * 组件的方法列表
   */
  methods: {
    goBack(): void {
      this.triggerEvent("goBack")
    },
    confirm(e: any): void {
      this.triggerEvent("confirm", e.detail)
    },
    // 设置向上移动定时器
    moveToTop(): void {
      let _this = this
      let index: number = 0
      timer = setInterval(function () {
        if (index >= _this.data.placeholderArray.length) {
          index = 0
        }
        _this.setData({
          top: index * 60
        })
        index = index + 1
      }, 1000)
    },
    // 点击某一项
    clickItem(e: any) {
      this.triggerEvent("getItem", e.target.dataset)
      clearInterval(timer)
    }

  }
})
// pages/mine/mine.js

Page({

  /**
   * 页面的初始数据
   */
  data:{
    showModal:false
  },
  bindDateChange: function (e) {
    //console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  modalCancel:function(){
    showModal:false
  },
  viewer:function(e){
    this.setData({
      showModal: true
    })
  },
  OnLoad:function(e){
    wx.navigateTo({
      url: '../index/index?date=' + date,
      success:function(res){},
      fail:function(res){},
      complete:function(res){}
    })
  }
})
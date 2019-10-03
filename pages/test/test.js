Page({
  data: {
    src: 'http://mvvideo.meitudata.com/5402f68acf7a9581.mp4',
  },
  videoErrorCallback: function (e) {
    console.log('视频错误信息：')
    console.log(e.detail.errMsg)
  }

})


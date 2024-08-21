// pages/home_page/home_page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    local_kindList: [],
  },
  // toIndex(event) {
  //   console.log(event.currentTarget.dataset.index);
  //   const index=event.currentTarget.dataset.index
  //   // 当前页面的代码
  //   wx.navigateTo({
  //     url: '/pages/index/index',
  //     success: function (res) {
  //       // res.eventChannel 是一个通信通道，用于向新页面发送数据
  //       if (res.eventChannel) {
  //         // 发送数据到新页面
  //         res.eventChannel.emit('setData', {
  //           myData: index,
  //         });
  //       }
  //     }
  //   });

  //   // console.log(123);
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const app = getApp();
    this.setData({
      local_kindList: app.globalData.kindList
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  
  handleClick: function(e) {
    const url = "/pages/index/index";  // 获取目标页面路径
    console.log(e);
    const index_garbage = e.currentTarget.dataset.item.index_garbage;  // 获取 index_garbage 属性值
    if (url) {
      console.log(`${url}?index_garbage=${index_garbage}`);
      wx.navigateTo({
        url: `${url}?index_garbage=${index_garbage}`  // 跳转时传递参数
      });
      
    } else {
      console.error("没有指定跳转页面的 URL");
    }
  }

})
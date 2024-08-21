// pages/answer/answer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  //开始答题，按钮点击进入答题
  beginTap(){
    wx.navigateTo({
      url: '/pages/question/answer/answer',
      success:function(){
        console.log("beginTap success");
      },
      fail:function(err){
        console.log("beginTap fail");
        console.log(err);
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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

  }
})
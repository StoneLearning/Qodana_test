// pages/user/feedback/feedback.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue: '' // 初始时，inputValue 是空字符串
  },

 // 提交数据到云数据库的函数
 submitData() {
  const db = wx.cloud.database(); // 初始化数据库引用
  const collection = db.collection('feedback'); // 替换为您的集合名

  return new Promise((resolve, reject) => {
    // 使用 Promise 处理异步操作
    collection.add({
      data: {
        content: this.data.inputValue
      },
      success(res) {
        console.log('数据添加成功', res);
        wx.showToast({
          title: '提交成功',
          icon: 'success'
        });
        resolve(res); // 数据库操作成功，解决 Promise
      },
      fail(err) {
        console.error('数据库操作失败', err);
        wx.showToast({
          title: '提交失败',
          icon: 'none'
        });
        reject(err); // 数据库操作失败，拒绝 Promise
      }
    });
  });
},


  onInput(event){
    this.setData({
      inputValue: event.detail.value
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
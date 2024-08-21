// pages/my/my3.js
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    login: {
      show: false,
      line: false,
      avatar: 'https://img0.baidu.com/it/u=3204281136,1911957924&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    }
 
 
 
  },
 
// 登录监听
onLogin: function() {
  // 调用 wx.getUserProfile 获取用户信息并进行登录
  wx.getUserProfile({
    desc: '用于完善会员资料',
    success: (res) => {
      // 假设这里调用云函数进行登录逻辑处理
      this.loginWithCloudFunction(res.userInfo);
    },
    fail: (err) => {
      console.error('获取用户信息失败', err);
    }
  });
},
// 假设的云函数登录逻辑
loginWithCloudFunction: function(userInfo) {
  wx.cloud.callFunction({
    // 云函数名称和参数等
    name: 'loginWithWeChat', // 云函数名称
    data: {
      userInfo: userInfo
    },
    success: res => {
      // 登录成功，更新页面数据和本地存储
      this.setData({
        login: {
          avatar: userInfo.avatarUrl,
          show: true
        }
      });
      // 存储登录状态到本地存储
      wx.setStorageSync('isLoggedIn', true);
      wx.setStorageSync('avatarUrl', userInfo.avatarUrl);
    },
    fail: err => {
      console.error('云函数登录失败', err);
    }
  });
},
 
// 基本信息
basicClick() {
  console.log('基本信息监听');
  wx.navigateTo({
    url: '/pages/user/info/info',
  })
},
 
 // 匿名反馈
 feedbackClick() {
  console.log('匿名反馈监听');
  wx.navigateTo({
    url: '/pages/user/feedback/feedback',
  })
},

// 退出监听
exitClick() {
  let that = this;
  wx.showModal({
    title: '提示',
    content: '确定退出登录吗？退出后将无法答题哦',
    success(res) {
      if (res.confirm) {
        that.setData({
          login: {
            show: false,
            avatar: 'https://img0.baidu.com/it/u=3204281136,1911957924&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
          }
        })
      }
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
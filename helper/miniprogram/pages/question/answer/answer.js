// pages/answer_begin/answer_begin.js
const Items = require('../../utils/garbage_items.js');
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //答案是否正确
    isAnswerRight:'回答错误',
    // 垃圾属目
    item_categories:'',
    // 答案是否可见
    isVisible: false,
    // 选项是否可用
    allDisabled: false,
    // 是否确定过
    useOptions: false,
    // garbge: '废纸屑',
    // 数据列表
    items_list: [],
    // 题目数量
    number_items: 10,
    // 第几题
    index: 0,
    // 题目答案
    answer: '',
    // 初始化用户选择为 0
    userSelection: 0,
    // 存储用户选择的分类数组
    selectedCategories: [],
  },

  // 选项选择，改变分类值
  selectOption: function (e) {
    console.log(e);
    const category = parseInt(e.currentTarget.dataset.category);
    const index = this.data.selectedCategories.indexOf(category);

    if (index > -1) {
      // 如果该分类已经被选择，则取消选择
      this.data.selectedCategories.splice(index, 1);
      this.setData({
        userSelection: this.data.userSelection - category
      });
    } else {
      // 如果该分类未被选择，则选择它
      this.data.selectedCategories.push(category);
      this.setData({
        userSelection: this.data.userSelection + category
      });
    }
  },

  //下一题
  onNextButton: function () {
    // console.log(this.data.useOptions);
    if (this.data.useOptions) {
      let newIndex = this.data.index + 1; // 更新索引值
      if (newIndex < this.data.items_list.length) { // 检查索引是否超出数组长度
        this.setData({
          index: newIndex, // 使用setData更新index
          answer: this.data.items_list[newIndex].category,
        });
      } else {
        // 处理到达列表末尾的情况，例如回到第一题或者弹出提示
        wx.showToast({
          title: '没有更多题目了',
          icon: 'success'
        });
        console.log('没有更多题目了');
      }
    } else {
      wx.showToast({
        title: '请确定后再看下一题',
        icon: 'failure'
      });
      console.log("没确定前无法跳到下一题");
    }
    this.setData({
      useOptions: false,
      userSelection: 0,
      selectedCategories: [],
      allDisabled: false,
      isVisible: false,
      isAnswerRight:'回答错误',
    })
  },

  // 确定按钮，错误显示答案
  onConfirm() {
    if (this.data.userSelection <= 0) {
      wx.showToast({
        title: '还未做出选择',
      })
      return;
    }
    console.log('你的答案为:' + this.data.userSelection);
    console.log('答案序号为:' + this.data.answer);
    console.log('答案是否正确：' + (this.data.answer == this.data.userSelection));
    if (this.data.userSelection != this.data.answer) {
      wx.showToast({
        title: '回答错误',
      })
      this.setData({
        isVisible: true,

      })
    }else{
      this.setData({
        isAnswerRight:'回答正确',
      })
    }
    // console.log(typeof this.data.useOptions);
    // console.log('是否能够使用：'+this.data.useOptions);
    this.setData({
      useOptions: true,
      allDisabled: true,
      isVisible: true,
    }, () => {
      console.log(this.data.useOptions);
      console.log("答案能否被看见" + this.data.isVisible);
    });
    console.log("开始打印答案"+typeof this.data.answer+this.data.answer);
    this.printItemCategories(this.data.answer);
  },

// 显示垃圾条目的所属分类
printItemCategories: function(answer) {
  console.log(123); // 这个应该能够打印出来

  // 定义对象操作，使用箭头函数以保持 this 上下文
  let operations = {
    '1': () => this.setData({ item_categories: '可回收垃圾' }),
    '2': () => this.setData({ item_categories: '有害垃圾' }),
    '4': () => this.setData({ item_categories: '湿垃圾' }),
    '8': () => this.setData({ item_categories: '干垃圾' }),
    // 可以继续添加更多的条件和操作
  };

  // 执行操作的函数
  const performAction = (value) => {
    const action = operations[value];
    if (action) {
      action(); // 使用调用操作
    } else {
      console.log('Value is not recognized');
    }
  };

  // 调用 performAction 函数并传入 answer
  performAction(answer);
},
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    Items.listItems(this.data.number_items, (res) => {
      try {
        console.log('Callback listItmes:', res);
        this.setData({
          items_list: res || [],
          answer: res[0].category,
        }, () => {
          console.log('Data has been updated:', this.data.items_list, '第一题答案已储存：', this.data.answer);
        });
      } catch (error) {
        console.error('Error setting data:', error);
        this.setData({
          items_list: [],
        });
      }
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

  }
})
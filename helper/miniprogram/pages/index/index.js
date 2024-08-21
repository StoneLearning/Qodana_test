// pages/garbage_classification/index.js
const  listgarbage= require('../utils/garbage_list.js');
var util = require('../utils/util.js');

Page({
  data: {

    categories: [
      { name: '可回收物', description: '适宜回收利用和资源化利用的，如玻、金、塑、纸、衣等。' ,content:'酱油瓶、玻璃杯、平板玻璃、易拉罐、饮料瓶、 洗发水瓶、塑料玩具、书本、报纸、广告单、 纸板箱、衣服、床上用品等',action:["轻投轻放", "清洁干燥，避免污染", "废纸尽量平整", "立体包装物请清空内容物，清洁后压扁投放","有尖锐边角的，应包裹后投放"],image:'/miniprogram/images/kehuishouwu.png'
    },
      { name: "有害垃圾", description: '对人体健康或者自然环境造成直接或潜在危害的废弃物' ,content:'废电池、油漆桶、荧光灯管、废药品及其包装物等',action:["投放时请注意轻放", "易破损的请连带包装或包裹后轻放","如易挥发，请密封后投放"],image:'/miniprogram/images/youhailaji.png'},
      { name: '湿垃圾', description: '日常生活垃圾产生的容易腐烂的生物质废弃物' ,content:'剩菜剩饭、瓜皮果核、花卉绿植、过期食品等',action:["纯流质的食物垃圾，如牛奶等，应直接倒进下水口","有包装物的湿垃圾应将包装物去除后分类投放，包装物请投放到对应的可回收物或干垃圾容器"],image:'/miniprogram/images/shilaji.png'},
      { name: '干垃圾', description: '除有害垃圾、湿垃圾、可回收物以外的其他生活废弃物' ,content:'餐盒、餐巾纸、湿纸巾、卫生间用纸、塑料袋、 食品包装袋、污染严重的纸、烟蒂、纸尿裤、 一次性杯子、大骨头、贝壳、花盆、陶瓷等',action:["尽量沥干水分", "难以辨识类别的生活垃圾投入干垃圾容器内"],image:'/miniprogram/images/ganlaji.png'}
    ],
    garbage_list:["1","2","3"],
    list_garbage:[],
    garbage_index:2,
    // 其他数据...
  },

  

  onLoad: function(options) {

    // 接收传递过来的 index_garbage 参数
    let index = options.index_garbage || 0;
    index = parseInt(index, 10); // 转换为整数
    console.log(typeof index);
    console.log("跳转成功"+options.index_garbage);


    // 设置页面标题或其他属性
    this.setData({
      garbage_index: index
    },()=>{
      console.log(this.data.garbage_index);
      console.log(123);
      // console.log(garbage_index);
      console.log(1);
      this.fetchAndSetGarbageData();
      console.log('onLoad called'); // 页面加载时的日志
    }
    );

    // 获取数据列表

    // this.fetchAndSetGarbageData();
    console.log('onLoad called'); // 页面加载时的日志
  },
  fetchAndSetGarbageData: function() {
    console.log(typeof this.data.garbage_index+1);
    console.log(this.data.garbage_index+1);
    listgarbage.list(this.data.garbage_index+1, (res) => {
      try {
        console.log('Callback result:', res); // 调试日志
        // 使用setData更新数据，并在更新完成后执行回调函数
        this.setData({
          list_garbage: res || [], // 确保即使res是undefined或null，也设置为一个空数组
        }, () => {
          // setData的回调函数，确保数据更新后再执行
          console.log('Data has been updated:', this.data.list_garbage);
        });
      } catch (error) {
        console.error('Error setting data:', error);
        // 处理错误，例如设置一个错误消息或空数组
        this.setData({
          list_garbage: [], // 可以设置为null或undefined，根据实际需要
        });
      }
    });
  },

  // 其他页面逻辑...
});
const garbage_data = require('./garbage-sort/garbage_data.js');

function listItems(count, successCallback) {
  // 第一步：获取基本信息
  // 获取数据数组
  const data = garbage_data.Garbage;
  //获取数组长度 
  const length=data.length

  // 第二步：声明存储变量
  // 存储随机选取的数据项
  const randomItems = [];  
  // 确保请求的数量不超过数组长度
  const numItemsToPick = Math.min(count, length);

  // 第三步：获取数据并赋值
   // 循环选取指定数量的不重复数据项
   for (let i = 0; i < numItemsToPick; i++) {
    let randomIndex;

    do {
      randomIndex = Math.floor(Math.random() * length);  // 生成随机索引
    } while (randomItems.includes(data[randomIndex]));  // 检查是否重复

    // 将随机选取的数据项添加到结果数组
    randomItems.push(data[randomIndex]);
  }





  // console.log('listResult:', JSON.stringify(listResult));
  successCallback(randomItems); // 不需要 return，因为回调函数不需要返回值
}

module.exports = {
  listItems: listItems,
};
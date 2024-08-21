const garbage_data = require('./garbage-sort/garbage-sort-data.js');

function list(indexGarbage, successCallback) {
  const data = garbage_data.garbage_sort_data;

  const listResult = [];
  let hasData = false;

  data.forEach(function(categoryItem) {
    if (categoryItem && categoryItem.data && categoryItem.data.length > 0) {
      if (String(categoryItem.categroy) === String(indexGarbage)) {
        categoryItem.data.forEach(function(garbageItem) {
          garbageItem.garbageItem.forEach(function(garbage_list){
            listResult.push({
              categoryName: garbage_list,
            })
          });
        });
        hasData = true;
      }
    }
  });

  if (!hasData) {
    console.error('No data found for the given indexGarbage:', indexGarbage);
    // 处理没有找到数据的情况
  }

  // console.log('listResult:', JSON.stringify(listResult));
  successCallback(listResult); // 不需要 return，因为回调函数不需要返回值
}

module.exports = {
  list: list,
};
// 云函数 index.js
const cloud = require('wx-server-sdk')
cloud.init()

exports.main = async (event) => {
  const {collectionName, documentId, fieldName } = event;
  const db = cloud.database();
  try {
    const result = await db.collection(collectionName)
      .doc(documentId)
      .field({ [fieldName]: true }) // 只获取特定的字段
      .get();

    return {
      success: true,
      data: result.data[fieldName] || [] // 确保返回一个数组，如果字段不存在则返回空数组
    };
  } catch (e) {
    return {
      success: false,
      errMsg: e.toString()
    };
  }
}
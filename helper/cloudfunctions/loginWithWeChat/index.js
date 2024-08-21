// 云函数入口文件
const cloud = require('wx-server-sdk')

// 初始化云开发环境
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext() // 获取微信调用上下文，包括用户的 openId
  const db = cloud.database()
  const usersCollection = db.collection('users')

  try {
    // 检查用户是否已经存在
    const userCheck = await usersCollection.where({
      openId: wxContext.OPENID
    }).get()

    if (userCheck.data.length > 0) {
      // 如果用户已经存在，返回现有的用户信息
      return {
        success: true,
        data: userCheck.data[0]
      }
    } else {
      // 如果用户不存在，创建新用户
      const userInfo = event.userInfo // 从前端传递的用户信息
      const result = await usersCollection.add({
        data: {
          openId: wxContext.OPENID,
          nickName: userInfo.nickName,
          avatarUrl: userInfo.avatarUrl,
          createTime: new Date()
        }
      })
      return {
        success: true,
        data: {
          openId: wxContext.OPENID,
          nickName: userInfo.nickName,
          avatarUrl: userInfo.avatarUrl
        }
      }
    }
  } catch (err) {
    return {
      success: false,
      errorMessage: err.message
    }
  }
}

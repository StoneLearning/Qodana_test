

Page({
    data: {
        SHOW_TOP: true,
        canRecordStart: false,
    },
    onLoad: function (options) {
        console.log("onLoad！");
        var that=this
        wx.showShareMenu({
            withShareTicket: true //要求小程序返回分享目标信息
        });
        var isShowed = wx.getStorageSync("tip");
        if (isShowed != 1) {
            setTimeout(() => {
                this.setData({
                    SHOW_TOP: false
                })
                wx.setStorageSync("tip", 1)
            }, 3 * 1000)
        } else {
            this.setData({
                SHOW_TOP: false
            })
        };
        try {
            baiduTokenUtil.getBdAiAccessToken().then(
                function (res) {
                    console.log('获取百度ai token:' + JSON.stringify(res));
                    console.log(res.access_token)
                    that.accessToken = res.access_token ;
                }, function (error) {
                    console.error('获取百度ai token:' + error);
                }
            );
        } catch (error) {
            console.error(error);
        }
    },

    goSearch: function () {
        wx.navigateTo({
            url: '/pages/for/results/results'
        });
    },


})
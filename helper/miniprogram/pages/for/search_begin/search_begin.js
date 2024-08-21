const  searchGarbage = require('../../utils/garbage-search.js');
const db = wx.cloud.database();
var util = require('../../utils/util.js')

Page({
  data: {
    datas:[],
      searchText:"",
        noResult:"没有查到结果，换个词试试奥~",
      logo:"",
  },
  onChange(e) {
    // console.log("The text of input ischanged.");
    // console.log(e);
    console.log('search:'+e.detail);
      if(!e.detail){
        return ;
      }
      this.setData({
          searchText:e.detail
      });
    console.log("====="+e.detail)
    this.onGetData(this.data.searchText)
  },

  onGetData:function(text){
    console.log("搜索text:"+text);
    var that=this
    var searchResult = new Array();

     searchGarbage.search(text, function success(res){
       console.log('searchResult:'+res);
         searchResult = res;
         that.setData({
             datas:searchResult
         })
     });

      console.log('datas:'+JSON.stringify(this.data.datas));
      console.log('that.searchText:'+that.data.searchText);
      console.log(!that.data.datas);
      console.log(that.data.searchText.length>0);
      console.log(that.data.datas);
  },
  onItemClick:function(event){
    var index =event.currentTarget.dataset.index
    var logoImg=""
    console.log(index)
    switch (parseInt(index)) {
      case 1:
        logoImg = "/images/RecycleableWaste.jpg"
        break;
      case 2:
        logoImg = "/images/HazardouAwaste.jpg"
        break;
      case 3:
        logoImg = "/images/HouseholdfoodWaste.jpg"
        break;
      case 4:
        logoImg = "/images/ResidualWaste.png"
        break;
    }
    console.log(logoImg)
    this.setData({
      logo:logoImg,
      isShow:!this.data.isShow
    })
  }
});

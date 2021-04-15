import commom from  "../../utils/public.js"
import common from "../../utils/public.js"


Page({

  /**
   * 页面的初始数据
   */
  data: {
    // dataList:[
    //   {title:"新视觉实训动态111",zuozhe:"王进"},
    //   {title:"微信小程序开发基础",zuozhe:"张三"}
    // ]
    dataList:[]
    
  },
getRequest:function(){
  wx.request({
    url: 'https://ku.qingnian8.com/wxList.php',
    data:{
      num:5
    },
    success:res=>{

      //时间戳转换成日期格式
      //法二使用模块《==public.js
      res.data.forEach(item=>{
        item.posttime=common.getMyData(item.posttime,"Y-m-d")
        item.title=common.getStrLen(item.title,25)

      })




      //法一
      // res.data.forEach(item=>{
      //   var time=item.posttime*1000
      //   var d = new Date(time);
      //   //var d=new Data(time); 
      //   var year=d.getFullYear();
      //   var month=(d.getMonth()+1)<10?"0"+(d.getMonth()+1):(d.getMonth()+1)
      //   var day=d.getDate()<10?"0"+d.getDate():d.getDate()
      //   //console.log(day)
      //   var posttime=year+"-"+month+"-"+day
      //   item.posttime=posttime

      //})
    

      this.setData({
        dataList:res.data
      })
    }
  })
},
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.getRequest();
    
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})
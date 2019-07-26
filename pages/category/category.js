// pages/category/category.js
// 获取全局对象
const app =  getApp();
console.log(app.globalData.name);
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log("页面被加载出来了");
        wx.request({
            url:'',//必须配置到控制台（微信公众平台）
            success: (res) => {

            }
        })
    },
    // 或者用es6的增强写法
    // onLoad(){}

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        console.log("页面初次渲染完成");
    },
    // 先执行onShow在执行onReady
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        consle.log("页面显示出来了")
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
        console.log("页面隐藏了");
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
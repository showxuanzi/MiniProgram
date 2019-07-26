App({
    // 小程序在后台保留两个小时，两个小时内再次进入小程序事，不执行onLaunch，执行onShow

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
    onLaunch: function (options) {
        // console.log(options);
        console.log("小程序初始化完成：onLaunch");
        // setTimeout(function(){
        //     const err = new Error();
        //     throw err
        // },3000)
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    //   console.log(options);
    console.log("界面显示出来：onShow");
    //   判断小程序的进入场景
    switch(options.scene){
        case 1001:{
            break;
        }
    }
    // 获取用户信息，并且将信息传递给服务器，接口即将废弃
    wx.getUserInfo({
        success: function(res){
            // console.log(res)
        }
    });
    // 获取用户信息
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log("界面被隐藏了： onHide")
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
      console.log("小程序发生错误了")
    
  },
  globalData:{
      name: "xmx",
      age: 18
  }
})

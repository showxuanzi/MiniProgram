Page({
  data:{
    name: "Xmx呀",
    age: 18,
    list: [
      {id:1,name:"kobe",age: 28},
      {id:2,name:"Bob",age:20}
    ],
    count: 0
  },
  onPageScroll(event){
      console.log("页面滚动");
  },
  onPullDownRefresh(){
      console.log("下拉刷新")
  },
  handleBtnClick(){
    // 这样操作不会刷新界面
    // this.data.count++;

    this.setData({
      count: this.data.count + 1
    })
  },
  handleSubtraction(){
    this.setData({
      count: this.data.count - 1
    })
  },
  handleGetUserInfo(event){
      console.log('ddddd');
      console.log(event);
  }
})
[微信小程序---弹框组件model](#wx-model)<br/>
[微信小程序---消息提示框toast](#wx-toast)<br/>
[微信小程序---加载中提示框loading](#wx-loading)<br/>

------
<div id="wx-model"></div>

#### model弹框组件说明
> model类似于javascript中的confirm弹框，默认情况下是一个带有确认取消的弹框，不过点击取消弹框不会自动隐藏，需要通过触发事件调用函数来控制hidden属性
* 官网文档：<br/>

![model-Image](https://github.com/MoonCheung/Web-diary/blob/master/static/Images/model.png)

* .wxml：<br/>
```html
<modal hidden="{{hidden}}" title="这里是title" confirm-text="自定义确定按钮" cancel-text="自定义取消按钮" bindcancel="cancel" bindconfirm="confirm" no-cancel="{{nocancel}}">
  这是对话框的内容。
</modal>
```

* .js：<br/>
```js
Page({
  data:{
    hidden:false,
    nocancel:false
  },
  cancel: function(){
    this.setData({
          hidden: true
    });
  },
  confirm: function(){
    this.setData({
          nocancel: !this.data.nocancel
    });    
    console.log("clicked confirm");
  }
})
```
* 运行效果：<br/>

![model-gif](https://github.com/MoonCheung/Web-diary/blob/master/static/Images/model.gif)

<div id="wx-toast"></div>

#### toast消息提示框说明
> toast为消息提示框，无按钮，如需关闭弹框可以添加事件设置hidden为true，在弹框显示后经过duration指定的时间后触发bindchange绑定的函数。
* 官方文档：<br/>

![toast-Image](https://github.com/MoonCheung/Web-diary/blob/master/static/Images/toast.png)

* .wxml：<br/>
```html
<view>
  <toast hidden="{{hidden}}" duration="2500" bindchange="open" bindtap="close">
    内容
  </toast>
</view>
```

* .js：<br/>
```js
Page({
  data:{
    hidden:false
  },
  open: function(){
    console.log("延时调用");
  },
  close: function(){
    this.setData({
    	hidden:true
    });
    console.log("关闭弹框");
  }
})
```

* 运行效果：<br/>

![toast-gif](https://github.com/MoonCheung/Web-diary/blob/master/static/Images/toast.gif)

<div id="wx-loading"></div>

#### loading加载中提示框说明
> loading只有一个属性hidden

* .wxml：<br/>
```html
<view>
  <loading hidden="{{hidden}}">
    加载中...
  </loading>
  <button bindtap="changeHidden">show/hidden</button>
</view>
```

* .js：<br/>
```js
Page({
  data:{
    hidden:true
  },
  changeHidden: function(){
    this.setData({
      hidden: !this.data.hidden
    });
  }
})
```
* 运行效果：<br/>

![loading-gif](https://github.com/MoonCheung/Web-diary/blob/master/static/Images/loading.gif)
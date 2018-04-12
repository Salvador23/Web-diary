[微信小程序---弹框组件model](#wx-model)

------
<div id="wx-model"></div>

#### model弹框组件说明
> model类似于javascript中的confirm弹框，默认情况下是一个带有确认取消的弹框，不过点击取消弹框不会自动隐藏，需要通过触发事件调用函数来控制hidden属性
* 官网文档：<br/>
![model-png](https://github.com/Salvador23/Web-diary/blob/master/Public/Images/model.png)

* .wxml：<br/>
```python
<modal hidden="{{hidden}}" title="这里是title" confirm-text="自定义确定按钮" cancel-text="自定义取消按钮" bindcancel="cancel" bindconfirm="confirm" no-cancel="{{nocancel}}">
  这是对话框的内容。
</modal>
```

* .js：<br/>
```java
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
![model-git](https://github.com/Salvador23/Web-diary/blob/master/Public/Images/model.gif)

---
title: 遮罩层 Mask
---

# <H2Icon />  遮罩层 Mask

> 弹出占据全屏幕的半透明遮罩。

## 基本案例 

遮罩层可通过设置`show`属性为`true`、`false`来控制显示和隐藏，不设置则显示状态默认为`false`。

### 示例代码
```wxml
<l-mask show="{{true}}"> </l-mask>
```

如下图：

:::img
![height=300](/screenshots/mask/1.jpg)
:::

## 自定义透明度

遮罩层可以通过设置 `opacity` 属性的值来改变它的不透明度，`opacity` 为0～1的浮点值，默认0.5。

### 示例代码
```wxml
<l-mask show="{{true}}"  opacity="0.7"> </l-mask>

```

### 示例代码
```wxml
<l-mask show="{{true}}"  opacity="0.3"> </l-mask>
```


## 设置子节点

我们在使用的组件的时候，可以根据使用场景,自由的在遮罩层组件内插入 `<image>` `<view>` `<text>` 等子节点，当然，你也可以在其中插入 `自定义组件` 。

::: tip 注意事项
 * 如果需要设置多个子节点并定位在页面的不同位置，可以设置单个子节点的 `position` 为 `fixed`，再通过 `left` 和 `top` 这样的css属性来完成布局。
 * 默认原点为页面左上角，例如：`top:20rpx;left:20rpx;` 就代表子节点从页面左上角，先向下平移`20rpx`; 再向右平移`20rpx`。
:::

Tips：

### 示例代码
```wxml
<l-mask show="{{true}}">
    <view class='mask-content'>
      <view class='mask-close' bindtap='onHideMaskTap'>隐藏遮罩</view>
    </view>
</l-mask>

```

:::img
![height=300](/screenshots/mask/2.jpg)
:::


## 设置子节点是否居中

遮罩层可以通过设置 `center` 属性的值为`true` 或者 `false` 来设置他是否垂直居中，默认为 垂直居中显示。
::: tip 注意事项
 如果设置为 `false` ，则 `<slot>` 居左上角显示。
:::
### 示例代码

```wxml
<l-mask show="{{true}}" center="{{false}}">
    <view class="mask-content">
      <view class="mask-text" >取消子节点的垂直居中</view>
    </view>
</l-mask>

```

## 锁定mask
设置按钮的 `locked` 属性来控制遮罩层的锁定态，属性值为 `true` 时点击遮罩层背景部分不会关闭整个遮罩，属性值为 `false` 时点击遮罩层背景会立即关闭，默认为 `false`。 

### 示例代码
```wxml
<l-mask show="{{true}}" locked="{{true}}">
    <view class="mask-content">
      <view class="mask-close" bindtap="onHideMaskTap">隐藏遮罩</view>
    </view>
</l-mask>

```
## 用户案例

浏览完以上内容，我们已经简单了解了 `Mask` 组件的属性以及用法。

下面让我们来根据示例代码，实现多个子节点展示的效果。

:::img
![height=300](/screenshots/mask/3.jpg)
:::

通过效果图，我们来分析下怎样去实现该案例，可以将过程分为两部分:

 1. 设置Mask组件的 `show ` 属性为` true `，` locked ` 设置为 ` true `。 然后传入自定义的子节点。
 2. 将子节点的css属性设置为`position: fixed` ,再通过 `left` 和 `top` 等对它进行定位。

以下是实现该案例的代码。

### 代码示例

```wxml
 <!-- wxml文件 -->
 <l-mask
    show="{{true}}"
    locked="{{true}}"
    class="mask-class"
  >
    <view class='content mask-content1' >
      这里是子节点一
    </view>
    <view class='content mask-content2'>
      这里是子节点二
    </view>
    <view class='content mask-content3' >
      这里是子节点三
    </view>
  </l-mask>

```

```wxss
 /* wxss文件 */
  .content {
    height: 80rpx;
    width: 300rpx;
    border-radius: 10rpx;
    line-height: 80rpx;
    font-size: 28rpx;
    text-align: center;
    color: #333;
  }

  .mask-content1 {
    position: fixed;
    top: 50rpx;
    left: 50rpx;
    background: #fff;
  }

  .mask-content2 {
    position: fixed;
    top: 300rpx;
    right: 20rpx;
    background: #fff;
  }

  .mask-content3 {
    position: fixed;
    bottom: 50rpx;
    left: 50rpx;
    background: #fff;
  }
```

## 遮罩层属性（Mask Attributes）

| 参数   | 说明 | 类型 | 可选值 | 默认值 |  
|:----|:----|:----|:----|:----|
| show | 控制遮罩层的显示 | String | true/false | false | 
| opacity | 透明度 | String,Number |  0~1 | 0.5  | 
| z-index | 组件的页面层级 | Number | ----- | 99 | 
| locked   | 遮罩层是否设定为锁定态 | Boolean | true/false | false |
| center   | 设置子节点是否为垂直居中 | Boolean | true/false | true |

## 遮罩层外部样式类 (Mask ExternalClasses)

| 外部样式类名    | 说明    | 备注 |
| :--------- | :----------------- | :----- |
| l-class   | 覆盖遮罩层外部样式类 | --- | 
| l-mask-class   | 覆盖遮罩层插槽部分外部样式类 | --- | 


::: tip 注意事项
 1. z-index默认为99，如果当前引入mask组件的页面中有z-index值大于99的节点，那么为了避免错误的显示效果，可以将mask的z-index属性的值重新设置。
 2. 传入 `true/false` 时候，需要使用 `Mustache 语法`（双大括号）将值包起来
:::


## 遮罩层事件（Mask Events）

| 事件名称   | 说明   | 返回值   | 备注   | 
|:----|:----|:----|:----|
| bind:lintap   | 当点击背景时触发   | ---------   | --------   | 
|  |    |   |  | 


<RightMenu />
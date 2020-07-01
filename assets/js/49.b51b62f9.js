(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{409:function(t,a,s){"use strict";s.r(a);var e=s(42),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"倒计时-countdown"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#倒计时-countdown"}},[t._v("#")]),t._v(" "),s("H2Icon"),t._v(" 倒计时 Countdown")],1),t._v(" "),s("blockquote",[s("p",[t._v("计时组件，可用于验证码、音频播放计时等场景")])]),t._v(" "),s("h2",{attrs:{id:"目标时间"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目标时间"}},[t._v("#")]),t._v(" 目标时间")]),t._v(" "),s("p",[t._v("通过"),s("code",[t._v("time")]),t._v("设置目标时间，默认值为当前日期的后一天，"),s("code",[t._v("time")]),t._v("值格式默认为日期,通过"),s("code",[t._v("time-type")]),t._v("属性修改"),s("code",[t._v("time")]),t._v("属性值的格式，可选值为"),s("code",[t._v("datetime")]),t._v("、"),s("code",[t._v("second")]),t._v("，默认为"),s("code",[t._v("datetime")]),t._v("；")]),t._v(" "),s("h3",{attrs:{id:"示例代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例代码"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),s("p",[t._v("1 基本用法")]),t._v(" "),s("p",[t._v("当"),s("code",[t._v("time-type='datetime'")]),t._v("时，"),s("code",[t._v("time")]),t._v("值格式为日期,且需要大于当前日期，如果小于当前日期，组件不会开始工作；")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://imglf6.nosdn.127.net/img/VVpkaDA0b3BNODdIWkVtZ3NRc1d5L0xvWVlHd1BKSEVsaVZHZ0JCdlk1V29rekx2S3lyNlBnPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0",alt:""}})]),t._v(" "),s("div",{staticClass:"language-wxml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-wxml"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-countdown")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-countdown")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("time")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("2018-11-09 00:00"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("p",[t._v("2 修改"),s("code",[t._v("time-type")]),t._v("为"),s("code",[t._v("second")])]),t._v(" "),s("p",[t._v("当"),s("code",[t._v("time-type='second'")]),t._v("时，"),s("code",[t._v("time")]),t._v("属性接收一个整数，单位为秒，若传入的值小于 0 时，则会从 0 开始，目标时间为"),s("code",[t._v("time")]),t._v("的绝对值；若传入的值大于 0，则会从"),s("code",[t._v("time")]),t._v("值开始，到 0 结束。")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://imglf3.nosdn.127.net/img/VVpkaDA0b3BNODdIWkVtZ3NRc1d5ejhLbDNvK2MyY0laMUpRekpoZk93WjE0c3A2YU02bU1BPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0",alt:""}})]),t._v(" "),s("div",{staticClass:"language-wxml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-wxml"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-countdown")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("time-type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("second"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("time")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("1500"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-countdown")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("time-type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("second"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("time")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("-1500"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("h2",{attrs:{id:"自定义显示日期模板"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义显示日期模板"}},[t._v("#")]),t._v(" 自定义显示日期模板")]),t._v(" "),s("p",[t._v("通过"),s("code",[t._v("format")]),t._v("定义时间显示的格式,默认为"),s("code",[t._v("{%d}天{%h}时{%m}分{%s}秒")]),t._v("；")]),t._v(" "),s("h3",{attrs:{id:"示例代码-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-2"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://imglf6.nosdn.127.net/img/VVpkaDA0b3BNODdIWkVtZ3NRc1d5M0t2REZWTk91QWp3dkUzbkdhMUxSZVNIY0tPYXI3WHpBPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0",alt:""}})]),t._v(" "),s("div",{staticClass:"language-wxml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-wxml"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-countdown")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("time-type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("second"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("time")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("60"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{%s}秒"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-countdown")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("time-type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("second"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("time")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("1500"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{%m}:{%s}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-countdown")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("time-type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("second"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("time")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("3690"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{%h}:{%m}:{%s}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-countdown")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("time-type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("second"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("time")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("-1500"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n")])])]),s("h2",{attrs:{id:"自定义样式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义样式"}},[t._v("#")]),t._v(" 自定义样式")]),t._v(" "),s("p",[t._v("通过"),s("code",[t._v("l-class")]),t._v("修改倒计时组件整体样式，通过"),s("code",[t._v("l-class-time")]),t._v("修改倒计时组件中数字区域的样式")]),t._v(" "),s("h3",{attrs:{id:"示例代码-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-3"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://imglf6.nosdn.127.net/img/VVpkaDA0b3BNODdIWkVtZ3NRc1d5NkRRUDNDUHNpY1RHSVlaZFJaVGJ3bnozZlNxRkJXNzRnPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0",alt:""}})]),t._v(" "),s("div",{staticClass:"language-wxml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-wxml"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-countdown")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("l-class-time")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("countdown-blue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("time")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("1500"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("time-type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("second"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("l-class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("countdown-text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("div",{staticClass:"language-wxss extra-class"},[s("pre",{pre:!0,attrs:{class:"language-wxss"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".content .countdown-blue")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 52rpx "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 52rpx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2rpx solid #3683D6"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-radius")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("transparent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #3683D6"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".content .countdown-text")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #3683D6"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"停止计时器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#停止计时器"}},[t._v("#")]),t._v(" 停止计时器")]),t._v(" "),s("p",[t._v("通过"),s("code",[t._v("status")]),t._v("属性切换倒计时组件的计时状态，默认为"),s("code",[t._v("true")]),t._v("，表示计时器处于计时状态")]),t._v(" "),s("h2",{attrs:{id:"纪念日模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#纪念日模式"}},[t._v("#")]),t._v(" 纪念日模式")]),t._v(" "),s("p",[t._v("设置"),s("code",[t._v('countdownType="anniversary"')]),t._v("开启纪念日模式计时，此时计时器会计算距离设定的时间已经过去多久。可选值目前只有"),s("code",[t._v("anniversary")]),t._v("和"),s("code",[t._v("normal")]),t._v(",默认是"),s("code",[t._v("normal")])]),t._v(" "),s("div",{staticClass:"language-wxml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-wxml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-countdown")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("time")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("2019-04-24"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("countdownType")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("anniversary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("此时")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("time-type")]),t._v("必须是"),s("code",[t._v("datetime")])]),t._v(" "),s("li")])]),t._v(" "),s("h2",{attrs:{id:"倒计时-countdown-attributes）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#倒计时-countdown-attributes）"}},[t._v("#")]),t._v(" 倒计时 (Countdown Attributes）")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("time")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("目标时间")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("日期或者秒数")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("当前日期的后一天")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("time-type")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("输入时间的格式")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("datetime")]),t._v("、"),s("code",[t._v("second")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("datetime")])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("status")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("倒计时的计时状态")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("true")])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("format")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("自定义显示时间格式")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("{%d}天{%h}时{%m}分{%s}秒")])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("is-zero-padd")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("一位数值时，是否自动补零")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("true")])])])])]),t._v(" "),s("h2",{attrs:{id:"倒计时外部样式类（countdown-externalclasses）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#倒计时外部样式类（countdown-externalclasses）"}},[t._v("#")]),t._v(" 倒计时外部样式类（Countdown ExternalClasses）")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("外部样式类名")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("l-class")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("修改倒计时组件的样式")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("l-time-class")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("修改数字区域的样式")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("替代l-class-time")])])])]),t._v(" "),s("h2",{attrs:{id:"已经弃用的外部样式类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#已经弃用的外部样式类"}},[t._v("#")]),t._v(" 已经弃用的外部样式类")]),t._v(" "),s("p",[t._v("以下这些外部样式类已经停止支持，将在未来的某个版本中去除，请使用上方的外部样式类替代")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("外部样式类名")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("l-class-time")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("修改数字区域的样式")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("请使用l-time-class替代")])])])]),t._v(" "),s("h2",{attrs:{id:"倒计时-countdown-events）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#倒计时-countdown-events）"}},[t._v("#")]),t._v(" 倒计时 (Countdown Events）")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("返回值")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("bind:linend")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("倒计时结束后的事件")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-")])])])]),t._v(" "),s("h2",{attrs:{id:"行为属性-behavior-attributes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#行为属性-behavior-attributes"}},[t._v("#")]),t._v(" 行为属性 (Behavior Attributes)")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("time")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("目标时间")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("日期或者秒数")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("当前日期的后一天")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("time-type")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("输入时间的格式")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("datetime")]),t._v("/"),s("code",[t._v("second")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("datetime")])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("status")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("倒计时的计时状态")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("true")])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("format")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("自定义显示时间格式")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("{%d}天{%h}时{%m}分{%s}秒")])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("is-zero-padd")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("一位数值时，是否自动补零")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("true")])])])])]),t._v(" "),s("h2",{attrs:{id:"行为事件-behavior-events"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#行为事件-behavior-events"}},[t._v("#")]),t._v(" 行为事件 (Behavior Events)")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("返回值")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("bind:linend")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("倒计时结束后的事件")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-")])])])]),t._v(" "),s("h2",{attrs:{id:"拓展"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#拓展"}},[t._v("#")]),t._v(" 拓展")]),t._v(" "),s("p",[t._v("我们将倒计时组件的部分属性和方法写在了"),s("code",[t._v("behaviors")]),t._v("文件中，你还可以直接引用"),s("code",[t._v("behavior")]),t._v("到你自己的组件中。具体使用方法参考"),s("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/behaviors.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("小程序 behaviors"),s("OutboundLink")],1)]),t._v(" "),s("RightMenu")],1)}),[],!1,null,null,null);a.default=n.exports}}]);
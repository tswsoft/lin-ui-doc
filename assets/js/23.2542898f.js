(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{395:function(t,a,s){"use strict";s.r(a);var e=s(26),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"图片选择器-imagepicker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图片选择器-imagepicker"}},[t._v("#")]),t._v(" "),s("H2Icon"),t._v(" 图片选择器 ImagePicker")],1),t._v(" "),s("blockquote",[s("p",[t._v("用于选择需要上传的图片，可自定义需要上传的图片数量。")])]),t._v(" "),s("div",{staticClass:"l-img"},[s("p",[s("img",{attrs:{src:"/screenshots/image-picker/image1.jpg",alt:"height=200"}})])]),s("h2",{attrs:{id:"设置最大值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置最大值"}},[t._v("#")]),t._v(" 设置最大值")]),t._v(" "),s("p",[t._v("图片选择器内部可以通过"),s("code",[t._v("count")]),t._v("设置最多可以选择的图片张数，默认是9张，没有最大张数的限制，但因根据实际情况合理选择，"),s("code",[t._v("linchange")]),t._v("事件能监听到选中图片数量的变化。")]),t._v(" "),s("h3",{attrs:{id:"示例代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例代码"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),s("div",{staticClass:"language-wxml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-wxml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-image-picker")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("count")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("9"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("bind:")]),t._v("linchange")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("onChangeTap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("h2",{attrs:{id:"自定义每行图片的数量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义每行图片的数量"}},[t._v("#")]),t._v(" 自定义每行图片的数量")]),t._v(" "),s("p",[t._v("图片选择器内部可以通过"),s("code",[t._v("size")]),t._v("设置每行图片的数量，默认是3张，可选值为"),s("code",[t._v("[3, 4]")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"示例代码-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-2"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),s("div",{staticClass:"language-wxml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-wxml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-image-picker")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("size")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("bind:")]),t._v("linchange")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("onChangeTap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("div",{staticClass:"l-img"},[s("p",[s("img",{attrs:{src:"/screenshots/image-picker/image2.jpg",alt:"height=100"}})])]),s("h2",{attrs:{id:"设置选择图片的质量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置选择图片的质量"}},[t._v("#")]),t._v(" 设置选择图片的质量")]),t._v(" "),s("p",[t._v("通过"),s("code",[t._v("size-type")]),t._v("可以设置图片来源，可选值是"),s("code",[t._v("original/compressed")]),t._v("，默认是"),s("code",[t._v("original")]),t._v("。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("注意事项")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("original")]),t._v("表示原图。")]),t._v(" "),s("li",[s("code",[t._v("compressed")]),t._v("表示缩略图。")])])]),t._v(" "),s("h3",{attrs:{id:"示例代码-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-3"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),s("div",{staticClass:"language-wxml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-wxml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-image-picker")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("count")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("9"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("size-type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("compressed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("h2",{attrs:{id:"自定义图片添加按钮"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义图片添加按钮"}},[t._v("#")]),t._v(" 自定义图片添加按钮")]),t._v(" "),s("p",[t._v("通过 "),s("code",[t._v("<slot>")]),t._v(" 的方式可以自定义"),s("code",[t._v("ImagePicker")]),t._v("组件的添加图片部分，在此之前需要将"),s("code",[t._v("custom")]),t._v("设置为"),s("code",[t._v(t._s(!0))])]),t._v(" "),s("h3",{attrs:{id:"示例代码-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-4"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),s("div",{staticClass:"language-wxml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-wxml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-image-picker")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("custom")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{true}}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("image")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("path/to/img.png"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("l-image-picker")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("div",{staticClass:"l-img"},[s("p",[s("img",{attrs:{src:"/screenshots/image-picker/image3.jpg",alt:"height=150"}})])]),s("h2",{attrs:{id:"自定义图片的样式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义图片的样式"}},[t._v("#")]),t._v(" 自定义图片的样式")]),t._v(" "),s("p",[t._v("当我们需要改变图片的样式时，可以通过"),s("code",[t._v("l-item-class")]),t._v("这样的外部样式类来完成。")]),t._v(" "),s("h3",{attrs:{id:"示例代码-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-5"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),s("div",{staticClass:"language-wxml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-wxml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-image-picker")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("l-item-class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("h2",{attrs:{id:"清除图片"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#清除图片"}},[t._v("#")]),t._v(" 清除图片")]),t._v(" "),s("p",[t._v("当我们需要清除所有的图片时，可以通过"),s("code",[t._v("clear")]),t._v("属性为"),s("code",[t._v("true")]),t._v("。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("注意事项")]),t._v(" "),s("ul",[s("li",[t._v("每次在清除图片成功后，组件内会将"),s("code",[t._v("clear")]),t._v("属性还原为"),s("code",[t._v("false")]),t._v(", 如果你需要再次将图片清空，再次将"),s("code",[t._v("clear")]),t._v("设置为"),s("code",[t._v("true")]),t._v("即可。")]),t._v(" "),s("li",[t._v("除此之外，你还可以设置"),s("code",[t._v("urls")]),t._v("属性为 "),s("code",[t._v("[]")]),t._v("，来使图片清空")])])]),t._v(" "),s("h3",{attrs:{id:"示例代码-6"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-6"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),s("div",{staticClass:"language-wxml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-wxml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-image-picker")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("clear")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{ isClear }}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("bind:")]),t._v("lintap")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("onClearTap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("清除图片"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("l-button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Page")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onClearTap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      isClear"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"图片选择器属性-imagepicker-attributes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图片选择器属性-imagepicker-attributes"}},[t._v("#")]),t._v(" 图片选择器属性（ImagePicker Attributes）")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("urls")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("初始图片链接，仅支持字符串数据")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Array")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("[]")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("cells")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("初始图片链接，对象数组格式")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Array")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("null")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("count")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("最多可以选择的图片张数")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String/Number")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("9")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("size")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("每行可显示的个数")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String/Number")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("3/4")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("3")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("mode")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("图片剪裁、缩放的模式")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("参考官方image组件的mode属性可选值")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("aspectFit")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("size-type")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("所选的图片的尺寸")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("original/compressed")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("original")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("custom")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("设置是否传入"),s("code",[t._v("slot")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("true/false")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("preview")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("是否可以预览")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("true/false")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("clear")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("是否清空列表")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("true/false")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("max-image-size")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("图片最大限制，单位字节")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("10000000")])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("urls 和 cells 两个属性中仅需选择其一传入即可，两者区别如下：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("若你的链接为如下"),s("strong",[t._v("字符串数组")]),t._v("格式，请使用 "),s("code",[t._v("urls")]),t._v(" 属性")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    'https"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//talelin.com/logo1.png',")]),t._v("\n    'https"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//talelin.com/logo2.png'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("若你的链接为如下"),s("strong",[t._v("对象数组")]),t._v("格式，请使用 "),s("code",[t._v("cells")]),t._v(" 属性")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// url 属性名称不可改变，其余部分可根据你的业务需求随意修改")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    url"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("'https"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//talelin.com/logo1.png',")]),t._v("\n    name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("'桔子'\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    url"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("'https"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//talelin.com/logo2.png',")]),t._v("\n    name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("'juzi'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    sex"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("'男'\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])])])]),t._v(" "),s("h2",{attrs:{id:"已经弃用的属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#已经弃用的属性"}},[t._v("#")]),t._v(" 已经弃用的属性")]),t._v(" "),s("p",[t._v("以下这些属性已经停止支持，将在未来的某个版本中去除，请使用上方的属性替代")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("temp-file-paths(已弃用)")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("图片显示的列表")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("请按照最新格式传入urls属性")])])])]),t._v(" "),s("h2",{attrs:{id:"图片选择器外部样式类-imagepicker-externalclasses"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图片选择器外部样式类-imagepicker-externalclasses"}},[t._v("#")]),t._v(" 图片选择器外部样式类（ImagePicker ExternalClasses）")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("外部样式类名")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("l-class")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("设置ImagePicker的外部样式类")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("l-item-class")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("设置ImagePicker每个图片的外部样式类")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("---")])])])]),t._v(" "),s("h2",{attrs:{id:"图片选择器事件-imagepicker-events"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图片选择器事件-imagepicker-events"}},[t._v("#")]),t._v(" 图片选择器事件 (ImagePicker Events）")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("返回值")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("bind:linchange")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("新增图片时触发")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("选中项发生变化时触发 "),s("code",[t._v("linchange")]),t._v(" 事件，event.detail = {current: [ 新增项的url信息 ], all: [ 当前urls值 ]}")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("urls格式与传入的urls格式保持一致")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("bind:linremove")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("移除图片时触发")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("图片移除时触发 "),s("code",[t._v("linremove")]),t._v(" 事件，event.detail = {current: 移除项的url信息, all: [ 当前urls值 ], index: 移除项的下标}")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("urls格式与传入的urls格式保持一致")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("bind:linpreview")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("图片被点击时（预览）触发")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("图片预览触发 "),s("code",[t._v("linpreview")]),t._v(" 事件，event.detail = {current:[ 当前点击项的url信息 ], all: [ 当前urls值 ], index: 点击项的下标}")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("urls格式与传入的urls格式保持一致")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("bind:linclear")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("清除图片全部时触发")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("图片移除时触发 "),s("code",[t._v("linclear")]),t._v(" 事件，event.detail = {current: [ 移除项的url信息 ], all: [ 删除前urls值 ]}")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("urls格式与传入的urls格式保持一致")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("bind:linoversize")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("新增图片大小超过max-image-size设置的值时触发")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("event.detail = {all:[当前urls值],oversize:[超过max-image-size限制的图片值],current:[当前值]}")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),s("RightMenu")],1)}),[],!1,null,null,null);a.default=n.exports}}]);
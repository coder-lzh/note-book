(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{800:function(e,t,a){"use strict";a.r(t);var s=a(2),r=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"分布式搜索引擎内核解密之-fetch-phase"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分布式搜索引擎内核解密之-fetch-phase","aria-hidden":"true"}},[e._v("#")]),e._v(" 分布式搜索引擎内核解密之 fetch phase")]),e._v(" "),a("h2",{attrs:{id:"什么是-fetch-phase？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-fetch-phase？","aria-hidden":"true"}},[e._v("#")]),e._v(" 什么是  fetch phase？")]),e._v(" "),a("p",[e._v("就是获取数据阶段，query phase 获取到的只是 id，fetch phase 会批量到各个 shard 上去获取数据")]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("疑问")]),e._v(" "),a("p",[e._v("这里就明白了之前为什么需要正排索引了？\n貌似在这一步获取数据之后再排序不行么？\n搞不明白，好像都很麻烦的原理")])]),e._v(" "),a("h2",{attrs:{id:"fetch-phbase-工作流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fetch-phbase-工作流程","aria-hidden":"true"}},[e._v("#")]),e._v(" fetch phbase 工作流程")]),e._v(" "),a("ol",[a("li",[e._v("coordinate node 构建完 priority queue 之后，就发送 mget 请求去所有 shard 上获取对应的 document")]),e._v(" "),a("li",[e._v("各个 shard 将 document 返回给 coordinate node")]),e._v(" "),a("li",[e._v("coordinate node 将合并后的 document 结果返回给 client 客户端")])]),e._v(" "),a("p",[e._v("一般搜索，如果不加 from 和 size，就默认搜索前 10条，按照 "),a("code",[e._v("_score")]),e._v(" 排序")])])},[],!1,null,null,null);t.default=r.exports}}]);
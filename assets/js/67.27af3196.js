(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{206:function(n,_,v){n.exports=v.p+"assets/img/markdown-img-paste-20190317110607139.7a0248b1.png"},523:function(n,_,v){"use strict";v.r(_);var t=v(2),i=Object(t.a)({},function(){var n=this,_=n.$createElement,t=n._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"_004-大型电商网站的异步多级缓存构建-nginx-数据本地化动态渲染的架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_004-大型电商网站的异步多级缓存构建-nginx-数据本地化动态渲染的架构","aria-hidden":"true"}},[n._v("#")]),n._v(" 004. 大型电商网站的异步多级缓存构建 + nginx 数据本地化动态渲染的架构")]),n._v(" "),t("p",[t("img",{attrs:{src:v(206),alt:""}})]),n._v(" "),t("p",[n._v("大型电商网站的详情页架构一般是这样的核心思路，如上图")]),n._v(" "),t("p",[n._v("两个关键点：")]),n._v(" "),t("ol",[t("li",[n._v("缓存数据生产服务")]),n._v(" "),t("li",[n._v("nginx 上的 html 模板 + 本地缓存数据")])]),n._v(" "),t("p",[n._v("来捋一捋流程：")]),n._v(" "),t("ol",[t("li",[t("p",[n._v("用户访问 nginx")]),n._v(" "),t("p",[n._v("会先从 nginx 的本地缓存获取数据渲染后返回，这个速度很快，因为全是内存操作。\n本地缓存数据是有时间的，比如 10 分钟")])]),n._v(" "),t("li",[t("p",[n._v("假如 nginx 本地缓存失效")]),n._v(" "),t("p",[n._v("会从 redis 中获取数据回来并缓存上")])]),n._v(" "),t("li",[t("p",[n._v("假如 redis 中的数据失效")]),n._v(" "),t("p",[n._v("会从缓存数据生产服务中获取数据并缓存上")])]),n._v(" "),t("li",[t("p",[n._v("缓存数据生产服务")]),n._v(" "),t("p",[n._v("本地也有一个缓存，比如用的是 ehcache\n他们通过队列监听商品修改等事件，让自己的缓存数据及时更新")])]),n._v(" "),t("li",[t("p",[n._v("其他服务")]),n._v(" "),t("p",[n._v("商品、店铺等服务能获取到商品的修改事件等，及时往 mq 中发出商品的修改事件，\n并提供商品原始数据的查询。这里可能是直接从 mysql 库中查询的")])])]),n._v(" "),t("p",[n._v("这样一来，在缓存上其实就挡掉了很多数据，一层一层的挡并发")])])},[],!1,null,null,null);_.default=i.exports}}]);
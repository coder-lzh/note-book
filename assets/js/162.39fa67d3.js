(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{586:function(n,s,t){"use strict";t.r(s);var a=t(2),r=Object(a.a)({},function(){var n=this,s=n.$createElement,t=n._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"_083-将热点缓存自动降级解决方案的代码运行后观察效果以及调试和修复-bug"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_083-将热点缓存自动降级解决方案的代码运行后观察效果以及调试和修复-bug","aria-hidden":"true"}},[n._v("#")]),n._v(" 083. 将热点缓存自动降级解决方案的代码运行后观察效果以及调试和修复 bug")]),n._v(" "),t("h2",{attrs:{id:"热点感知测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#热点感知测试","aria-hidden":"true"}},[n._v("#")]),n._v(" 热点感知测试")]),n._v(" "),t("p",[n._v("测试：")]),n._v(" "),t("ol",[t("li",[t("p",[n._v("nginx 需要 "),t("code",[n._v("/usr/servers/nginx/sbin/nginx -s reload")])])]),n._v(" "),t("li",[t("p",[n._v("在一些关键处增加日志打印，方便查看调试结果")])]),n._v(" "),t("li",[t("p",[n._v("后面都在本地运行 storm 了，由于 gradle 打包太麻烦了。 HotProductTopology")])]),n._v(" "),t("li",[t("p",[n._v("修改应用层 nginx 上的模板 html")]),n._v(" "),t("p",[n._v("因为需要观察是否被降级为随机路由了，在模板上写上自己本机的 hostanme 即可")])])]),n._v(" "),t("p",[n._v("调试日志如下：")]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("商品 1,次数 1\nThread-35：[1=1, null, null]\nThread-36：[null, null, null]\n商品 2,次数 1\nThread-36：[2=1, null, null]\nThread-35：[1=1, null, null]\n商品 3,次数 1\n商品 4,次数 1\n51677 [Thread-37] INFO  c.m.c.e.s.ProductCountBolt$HotProductFindThread - 后 95% 商品数量 1 个，平均访问值为 1\n51677 [Thread-37] INFO  c.m.c.e.s.ProductCountBolt$HotProductFindThread - 热点商品列表：[]\n51688 [Thread-38] INFO  c.m.c.e.s.ProductCountBolt$HotProductFindThread - 后 95% 商品数量 1 个，平均访问值为 1\n51688 [Thread-38] INFO  c.m.c.e.s.ProductCountBolt$HotProductFindThread - 热点商品列表：[]\nThread-36：[2=1, 4=1, null]\nThread-35：[1=1, 3=1, null]\n商品 5,次数 1\n56678 [Thread-37] INFO  c.m.c.e.s.ProductCountBolt$HotProductFindThread - 后 95% 商品数量 2 个，平均访问值为 1\n56678 [Thread-37] INFO  c.m.c.e.s.ProductCountBolt$HotProductFindThread - 热点商品列表：[]\n56689 [Thread-38] INFO  c.m.c.e.s.ProductCountBolt$HotProductFindThread - 后 95% 商品数量 1 个，平均访问值为 1\n56689 [Thread-38] INFO  c.m.c.e.s.ProductCountBolt$HotProductFindThread - 热点商品列表：[]\n商品 6,次数 1\nThread-36：[2=1, 4=1, 6=1]\nThread-35：[1=1, 3=1, 5=1]\n商品 6,次数 2\n商品 6,次数 3\n商品 6,次数 4\n商品 6,次数 5\n商品 6,次数 6\n商品 6,次数 7\n商品 6,次数 8\n商品 6,次数 9\n61679 [Thread-37] INFO  c.m.c.e.s.ProductCountBolt$HotProductFindThread - 后 95% 商品数量 2 个，平均访问值为 1\n61679 [Thread-37] INFO  c.m.c.e.s.ProductCountBolt$HotProductFindThread - 热点商品列表：[]\n61690 [Thread-38] INFO  c.m.c.e.s.ProductCountBolt$HotProductFindThread - 后 95% 商品数量 2 个，平均访问值为 1\n61690 [Thread-38] INFO  c.m.c.e.s.ProductCountBolt$HotProductFindThread - 发现一个热点商品：6=9  // 倍数设置的 5 。9 满足条件称为热点了\n商品 6,次数 10\n商品 6,次数 11\n商品 6,次数 12\n商品 6,次数 13\n商品 6,次数 14\n商品 6,次数 15\n商品 6,次数 16\n62209 [Thread-38] INFO  c.m.c.e.s.ProductCountBolt$HotProductFindThread - 热点商品列表：[6]\n商品 6,次数 17\n商品 6,次数 18\nThread-36：[6=18, 2=1, 4=1]\nThread-35：[1=1, 3=1, 5=1]\n66680 [Thread-37] INFO  c.m.c.e.s.ProductCountBolt$HotProductFindThread - 后 95% 商品数量 2 个，平均访问值为 1\n66681 [Thread-37] INFO  c.m.c.e.s.ProductCountBolt$HotProductFindThread - 热点商品列表：[]\n商品 6,次数 19\n商品 6,次数 20\n商品 6,次数 21\n商品 6,次数 22\n商品 6,次数 23\n67211 [Thread-38] INFO  c.m.c.e.s.ProductCountBolt$HotProductFindThread - 后 95% 商品数量 2 个，平均访问值为 1\n67211 [Thread-38] INFO  c.m.c.e.s.ProductCountBolt$HotProductFindThread - 发现一个热点商品：6=23\n67301 [Thread-38] INFO  c.m.c.e.s.ProductCountBolt$HotProductFindThread - 热点商品列表：[6]\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br"),t("span",{staticClass:"line-number"},[n._v("11")]),t("br"),t("span",{staticClass:"line-number"},[n._v("12")]),t("br"),t("span",{staticClass:"line-number"},[n._v("13")]),t("br"),t("span",{staticClass:"line-number"},[n._v("14")]),t("br"),t("span",{staticClass:"line-number"},[n._v("15")]),t("br"),t("span",{staticClass:"line-number"},[n._v("16")]),t("br"),t("span",{staticClass:"line-number"},[n._v("17")]),t("br"),t("span",{staticClass:"line-number"},[n._v("18")]),t("br"),t("span",{staticClass:"line-number"},[n._v("19")]),t("br"),t("span",{staticClass:"line-number"},[n._v("20")]),t("br"),t("span",{staticClass:"line-number"},[n._v("21")]),t("br"),t("span",{staticClass:"line-number"},[n._v("22")]),t("br"),t("span",{staticClass:"line-number"},[n._v("23")]),t("br"),t("span",{staticClass:"line-number"},[n._v("24")]),t("br"),t("span",{staticClass:"line-number"},[n._v("25")]),t("br"),t("span",{staticClass:"line-number"},[n._v("26")]),t("br"),t("span",{staticClass:"line-number"},[n._v("27")]),t("br"),t("span",{staticClass:"line-number"},[n._v("28")]),t("br"),t("span",{staticClass:"line-number"},[n._v("29")]),t("br"),t("span",{staticClass:"line-number"},[n._v("30")]),t("br"),t("span",{staticClass:"line-number"},[n._v("31")]),t("br"),t("span",{staticClass:"line-number"},[n._v("32")]),t("br"),t("span",{staticClass:"line-number"},[n._v("33")]),t("br"),t("span",{staticClass:"line-number"},[n._v("34")]),t("br"),t("span",{staticClass:"line-number"},[n._v("35")]),t("br"),t("span",{staticClass:"line-number"},[n._v("36")]),t("br"),t("span",{staticClass:"line-number"},[n._v("37")]),t("br"),t("span",{staticClass:"line-number"},[n._v("38")]),t("br"),t("span",{staticClass:"line-number"},[n._v("39")]),t("br"),t("span",{staticClass:"line-number"},[n._v("40")]),t("br"),t("span",{staticClass:"line-number"},[n._v("41")]),t("br"),t("span",{staticClass:"line-number"},[n._v("42")]),t("br"),t("span",{staticClass:"line-number"},[n._v("43")]),t("br"),t("span",{staticClass:"line-number"},[n._v("44")]),t("br"),t("span",{staticClass:"line-number"},[n._v("45")]),t("br"),t("span",{staticClass:"line-number"},[n._v("46")]),t("br"),t("span",{staticClass:"line-number"},[n._v("47")]),t("br"),t("span",{staticClass:"line-number"},[n._v("48")]),t("br"),t("span",{staticClass:"line-number"},[n._v("49")]),t("br"),t("span",{staticClass:"line-number"},[n._v("50")]),t("br"),t("span",{staticClass:"line-number"},[n._v("51")]),t("br"),t("span",{staticClass:"line-number"},[n._v("52")]),t("br"),t("span",{staticClass:"line-number"},[n._v("53")]),t("br"),t("span",{staticClass:"line-number"},[n._v("54")]),t("br"),t("span",{staticClass:"line-number"},[n._v("55")]),t("br"),t("span",{staticClass:"line-number"},[n._v("56")]),t("br")])]),t("p",[n._v("通过日志观察到该商品，当成为热点的时候，触发了往 nginx 上推送标志，\n进行策略降级（这个可以通过）不停的访问 "),t("code",[n._v("http://eshop-cache03/product?method=product&productId=6&shopId=1")]),n._v("\n商品 id 为 6 的这个商品，当不是热点商品的时候，只会被路由到指定机器上，当成为热点之后，就会随机路由了")]),n._v(" "),t("h2",{attrs:{id:"热点消失感知测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#热点消失感知测试","aria-hidden":"true"}},[n._v("#")]),n._v(" 热点消失感知测试")]),n._v(" "),t("p",[n._v("怎么测试热点消失呢？看上面的日志有一条很重要的信息")]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("Thread-36：[6=18, 2=1, 4=1]\n66680 [Thread-37] INFO  c.m.c.e.s.ProductCountBolt$HotProductFindThread - 后 95% 商品数量 2 个，平均访问值为 1\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br")])]),t("p",[n._v("商品 id 为 6 能被计算为瞬时热点商品是因为，后两个商品平均访问次数为 1，大于 5 倍的阈值，\n那么让 商品 id 为 6 的取消热点的方案就出来了：选择商品 id 为 2 的狂刷，把 6 的顶下来")]),n._v(" "),t("p",[n._v("测试日志如下")]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("Thread-36：[6=13, 2=2, 4=1]\n85287 [Thread-37] INFO  c.m.c.e.s.ProductCountBolt$HotProductFindThread - 后 95% 商品数量 2 个，平均访问值为 1\n85287 [Thread-37] INFO  c.m.c.e.s.ProductCountBolt$HotProductFindThread - 发现一个热点商品：6=13\n85364 [Thread-37] INFO  c.m.c.e.s.ProductCountBolt$HotProductFindThread - 热点商品列表：[6]\n...\nThread-36：[2=25, 6=13, 4=1]\n90364 [Thread-37] INFO  c.m.c.e.s.ProductCountBolt$HotProductFindThread - 后 95% 商品数量 2 个，平均访问值为 7\n90364 [Thread-37] INFO  c.m.c.e.s.ProductCountBolt$HotProductFindThread - 热点商品列表：[]\n90364 [Thread-37] INFO  c.m.c.e.s.ProductCountBolt$HotProductFindThread - 一个热点商品消失了：6\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br")])]),t("p",[n._v("这个时候再访问 id=6 的商品，发现一直被路由到 eshop-eache01 上了")]),n._v(" "),t("h2",{attrs:{id:"优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优化","aria-hidden":"true"}},[n._v("#")]),n._v(" 优化")]),n._v(" "),t("p",[n._v("根据日志来看，当商品 id=6 被定为热点的时候，如果没有其他热点商品进来，那么按照现在休眠 5 秒的时间，\n每 5 秒就会获取一次缓存并推送到 nginx 上。可以针对这一点进行优化")]),n._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("// 3. 计算热点商品")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("for")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("int")]),n._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("<")]),n._v(" avg95Count"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v(" i"),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("++")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n   Map"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("Entry"),t("span",{pre:!0,attrs:{class:"token generics function"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("<")]),n._v("Long"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(",")]),n._v(" Long"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(">")])]),n._v(" entry "),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v(" countList"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("get")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),n._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("if")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),n._v("entry"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("getValue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v(">")]),n._v(" avg95Avg "),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("*")]),n._v(" threshold"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n       logger"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("info")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[n._v('"发现一个热点商品："')]),n._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("+")]),n._v(" entry"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n       hotPidList"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("add")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),n._v("entry"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("getKey")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n       "),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("if")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("!")]),n._v("lastTimeHotPids"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("contains")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),n._v("entry"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("getKey")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n           "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("// 如果该商品已经是热点商品了，则不推送，新热点商品才推送")]),n._v("\n           "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("// 这里根据具体业务要求进行定制")]),n._v("\n           "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("// 推送热点商品信息到 所有 nginx 上")]),n._v("\n           "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("pushHotToNginx")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),n._v("entry"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("getKey")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n       "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br"),t("span",{staticClass:"line-number"},[n._v("11")]),t("br"),t("span",{staticClass:"line-number"},[n._v("12")]),t("br"),t("span",{staticClass:"line-number"},[n._v("13")]),t("br"),t("span",{staticClass:"line-number"},[n._v("14")]),t("br")])]),t("h2",{attrs:{id:"小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小结","aria-hidden":"true"}},[n._v("#")]),n._v(" 小结")]),n._v(" "),t("p",[n._v("本小结是为了解决：热点商品在路由 hash 策略下，大流量打到同一台机器上扛不住\n方案思路如下：")]),n._v(" "),t("ol",[t("li",[t("p",[n._v("通过 storm 实时统计访问次数")])]),n._v(" "),t("li",[t("p",[n._v("热点商品感知：对每个 task 中的访问列表排序，前 5% 的商品与后 95% 商品平均访问值进行阀值比较，达到到具体设定倍数即认为是热点商品")])]),n._v(" "),t("li",[t("p",[n._v("热点商品消失感知：记录上一次的热点商品，当它跌出前 5% 时，被感知到，通过两次热点列表比较能得到")])]),n._v(" "),t("li",[t("p",[n._v("感知到热点商品时通知流量分发层 nginx 改变路由策略")]),n._v(" "),t("p",[n._v("分发到更多的 nginx 上去，同时 storm 需要反推该商品详情到更多的 nginx 上去，\n本列是所有 nginx，随机分发策略")])]),n._v(" "),t("li",[t("p",[n._v("感知到热点消失时，通知流量分发层取消降级策略")]),n._v(" "),t("p",[n._v("之前推送到 nginx 上的缓存可以不用理睬，因为设置了缓存过期时间。\n只需要再流量分发层上取消掉随机分发策略即可")])])])])},[],!1,null,null,null);s.default=r.exports}}]);
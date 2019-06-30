(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{595:function(e,a,_){"use strict";_.r(a);var v=_(2),s=Object(v.a)({},function(){var e=this,a=e.$createElement,_=e._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"_116-为源头服务的限流场景增加-stubbed-fallback-降级机制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_116-为源头服务的限流场景增加-stubbed-fallback-降级机制","aria-hidden":"true"}},[e._v("#")]),e._v(" 116. 为源头服务的限流场景增加 stubbed fallback 降级机制")]),e._v(" "),_("p",[e._v("我们上一讲讲到限流，计算了一下线程池的最大的大小，和这个等待队列，去限制了每秒钟最多能发送多少次请求到商品服务；避免大量的请求都发送到商品服务商去")]),e._v(" "),_("p",[e._v("限流过后，就会导致什么呢，比如 redis 集群崩溃了，雪崩，大量的请求涌入到商品服务调用的 command 中，\n这个时候线程池肯定不够处理比预估并发量大的请求的，那么超出了处理能力的请求，就会被 reject 掉，\n从而走 fallback 降级机制")]),e._v(" "),_("p",[e._v("这里再来理清楚一些前提：")]),e._v(" "),_("ol",[_("li",[e._v("首先请求能到这里来，那么 nginx 本地缓存肯定失效了、redis 已经崩溃了、ehcache 中没有这条数据的缓存。")]),e._v(" "),_("li",[e._v("只能从源头的商品服务里面去查询，但是被限流走了降级机制")])]),e._v(" "),_("p",[e._v("所以本章重点就是降级机制怎么实现的问题。")]),e._v(" "),_("p",[e._v("这里根据自身的业务需求和场景来定，本章给出一个方案：多级降级策略")]),e._v(" "),_("ol",[_("li",[_("p",[e._v("第一级：走 hbase 查询")])]),e._v(" "),_("li",[_("p",[e._v("第二级：走 stubbed 策略，也就是残缺策略")]),e._v(" "),_("p",[e._v("疑问就是本人没有做过电商相关系统，在本课程背景中的代码中，只能拿到一个商品 id，\n而且本地缓存又没有商品数据了，怎么做残缺策略呢？")])])]),e._v(" "),_("p",[e._v("由于之前讲过多级降级策略，这里也不示范了。而且还有 hbase，也不可能花很多时间来讲解。\n这里介绍下 hbase 这种方案思路")]),e._v(" "),_("h2",{attrs:{id:"hbase-冷数据备份降级策略方案"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#hbase-冷数据备份降级策略方案","aria-hidden":"true"}},[e._v("#")]),e._v(" hbase 冷数据备份降级策略方案")]),e._v(" "),_("p",[e._v("hbase： 基于 hdfs 分布式存储基础之上，封装了一个系统，叫做 hbase，分布式在线存储，分布式 NoSQL数据库，里面可以放大量的冷数据。")]),e._v(" "),_("p",[e._v("由于是分布式 NoSQL数据库，只要运维还过得去，比 mysql 并发强太多。")]),e._v(" "),_("p",[e._v("什么叫冷数据备份？可以是把一天前、一周前的商品数据版本做一个快照存放在 Hbase 中")]),e._v(" "),_("h2",{attrs:{id:"缓存雪崩回顾"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#缓存雪崩回顾","aria-hidden":"true"}},[e._v("#")]),e._v(" 缓存雪崩回顾")]),e._v(" "),_("p",[e._v("到这里基本上缓存雪崩已经讲解完了")]),e._v(" "),_("ol",[_("li",[_("p",[e._v("事前")]),e._v(" "),_("p",[e._v("redis 高可用性，redis cluster、sentinal、复制、主从，从->主，双机房部署")])]),e._v(" "),_("li",[_("p",[e._v("事中")]),e._v(" "),_("p",[e._v("ehcache 可以抗一抗，redis 挂掉之后的资源隔离、超时控制、熔断，商品服务的访问限流、多级降级，缓存服务在雪崩场景下存活下来，基于 ehcache 和存活的商品服务提供数据")])]),e._v(" "),_("li",[_("p",[e._v("事后")]),e._v(" "),_("p",[e._v("快速恢复 Redis，备份+恢复，快速的缓存预热的方案")])])])])},[],!1,null,null,null);a.default=s.exports}}]);
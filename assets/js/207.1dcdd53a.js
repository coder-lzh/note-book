(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{723:function(_,v,a){"use strict";a.r(v);var t=a(2),e=Object(t.a)({},function(){var _=this,v=_.$createElement,a=_._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[a("h1",{attrs:{id:"elasticsearch-正式介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch-正式介绍","aria-hidden":"true"}},[_._v("#")]),_._v(" Elasticsearch 正式介绍")]),_._v(" "),a("ol",[a("li",[_._v("Elasticsearch 的功能，干什么的")]),_._v(" "),a("li",[_._v("Elasticsearch 的适用场景，能在什么地方发挥作用")]),_._v(" "),a("li",[_._v("Elasticsearch 的特点，跟其他类似的东西不同的地方在哪里")])]),_._v(" "),a("h2",{attrs:{id:"功能，干什么的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能，干什么的","aria-hidden":"true"}},[_._v("#")]),_._v(" 功能，干什么的")]),_._v(" "),a("ol",[a("li",[a("p",[_._v("分布式的搜索引擎和数据分析引擎")]),_._v(" "),a("p",[_._v("搜索：百度，网站的站内搜索，IT系统的检索")]),_._v(" "),a("p",[_._v("数据分析：电商网站，最近7天牙膏这种商品销量排名前10的商家有哪些；新闻网站，最近1个月访问量排名前3的新闻版块是哪些")]),_._v(" "),a("p",[_._v("分布式，搜索，数据分析")])]),_._v(" "),a("li",[a("p",[_._v("全文检索，结构化检索，数据分析")]),_._v(" "),a("p",[_._v("全文检索：我想搜索商品名称包含牙膏的商品，"),a("code",[_._v('select * from products where product_name like "%牙膏%"')])]),_._v(" "),a("p",[_._v("结构化检索：我想搜索商品分类为日化用品的商品都有哪些，"),a("code",[_._v("select * from products where category_id='日化用品'")])]),_._v(" "),a("p",[_._v("部分匹配、自动完成、搜索纠错、搜索推荐")]),_._v(" "),a("p",[_._v("数据分析：我们分析每一个商品分类下有多少个商品，"),a("code",[_._v("select category_id,count(*) from products group by category_id")])])]),_._v(" "),a("li",[a("p",[_._v("对海量数据进行近实时的处理")]),_._v(" "),a("p",[_._v("分布式：ES自动可以将海量数据分散到多台服务器上去存储和检索")]),_._v(" "),a("p",[_._v("海联数据的处理：分布式以后，就可以采用大量的服务器去存储和检索数据，自然而然就可以实现海量数据的处理了")]),_._v(" "),a("p",[_._v("近实时：检索个数据要花费1小时（这就不是近实时，是离线批处理，batch-processing）；在秒级别对数据进行搜索和分析")])])]),_._v(" "),a("p",[_._v("跟分布式/海量数据相反的：lucene，单机应用，只能在单台服务器上使用，最多只能处理单台服务器可以处理的数据量")]),_._v(" "),a("h2",{attrs:{id:"适用场景，能在什么地方发挥作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#适用场景，能在什么地方发挥作用","aria-hidden":"true"}},[_._v("#")]),_._v(" 适用场景，能在什么地方发挥作用")]),_._v(" "),a("h3",{attrs:{id:"国外"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#国外","aria-hidden":"true"}},[_._v("#")]),_._v(" 国外")]),_._v(" "),a("ol",[a("li",[a("p",[_._v("维基百科，类似百度百科，牙膏，牙膏的维基百科，全文检索，高亮，搜索推荐")])]),_._v(" "),a("li",[a("p",[_._v("The Guardian（国外新闻网站）")]),_._v(" "),a("p",[_._v("类似搜狐新闻，用户行为日志（点击，浏览，收藏，评论）+ 社交网络数据（对某某新闻的相关看法），数据分析，给到每篇新闻文章的作者，让他知道他的文章的公众反馈（好，坏，热门，垃圾，鄙视，崇拜）")])]),_._v(" "),a("li",[a("p",[_._v("Stack Overflow（国外的程序异常讨论论坛）")]),_._v(" "),a("p",[_._v("IT问题，程序的报错，提交上去，有人会跟你讨论和回答，全文检索，搜索相关问题和答案，程序报错了，就会将报错信息粘贴到里面去，搜索有没有对应的答案")])]),_._v(" "),a("li",[a("p",[_._v("GitHub（开源代码管理），搜索上千亿行代码")])]),_._v(" "),a("li",[a("p",[_._v("电商网站，检索商品")])]),_._v(" "),a("li",[a("p",[_._v("日志数据分析，logstash采集日志，ES进行复杂的数据分析（ELK技术，elasticsearch+logstash+kibana）")])]),_._v(" "),a("li",[a("p",[_._v("商品价格监控网站")]),_._v(" "),a("p",[_._v("用户设定某商品的价格阈值，当低于该阈值的时候，发送通知消息给用户，比如说订阅牙膏的监控，如果高露洁牙膏的家庭套装低于50块钱，就通知我，我就去买")])]),_._v(" "),a("li",[a("p",[_._v("BI系统，商业智能，Business Intelligence。")]),_._v(" "),a("p",[_._v("比如说有个大型商场集团，BI，分析一下某某区域最近3年的用户消费金额的趋势以及用户群体的组成构成，产出相关的数张报表，xxx区，最近3年，每年消费金额呈现100%的增长，而且用户群体85%是高级白领，开一个新商场。ES执行数据分析和挖掘，Kibana进行数据可视化")])])]),_._v(" "),a("h3",{attrs:{id:"国内"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#国内","aria-hidden":"true"}},[_._v("#")]),_._v(" 国内")]),_._v(" "),a("p",[_._v("站内搜索（电商，招聘，门户，等等），IT系统搜索（OA，CRM，ERP，等等），数据分析（ES热门的一个使用场景）")]),_._v(" "),a("h2",{attrs:{id:"特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特点","aria-hidden":"true"}},[_._v("#")]),_._v(" 特点")]),_._v(" "),a("ol",[a("li",[a("p",[_._v("可以作为一个大型分布式集群（数百台服务器）技术")]),_._v(" "),a("p",[_._v("处理PB级数据，服务大公司；也可以运行在单机上，服务小公司")])]),_._v(" "),a("li",[a("p",[_._v("Elasticsearch 不是什么新技术")]),_._v(" "),a("p",[_._v("主要是将全文检索、数据分析以及分布式技术，合并在了一起，才形成了独一无二的ES；")]),_._v(" "),a("p",[_._v("lucene（全文检索），商用的数据分析软件（也是有的），分布式数据库（mycat）")])]),_._v(" "),a("li",[a("p",[_._v("对用户而言，是开箱即用的")]),_._v(" "),a("p",[_._v("非常简单，作为中小型的应用，直接3分钟部署一下ES，就可以作为生产环境的系统来使用了，数据量不大，操作不是太复杂")])]),_._v(" "),a("li",[a("p",[_._v("数据库的功能面对很多领域是不够用的（事务，还有各种联机事务型的操作）")]),_._v(" "),a("p",[_._v("特殊的功能，比如全文检索，同义词处理，相关度排名，复杂数据分析，海量数据的近实时处理；Elasticsearch作为传统数据库的一个补充，提供了数据库所不不能提供的很多功能")])])])])},[],!1,null,null,null);v.default=e.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{542:function(s,a,n){"use strict";n.r(a);var e=n(2),t=Object(e.a)({},function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_049-zookeeper-kafka-集群的安装部署以及如何简单使用的介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_049-zookeeper-kafka-集群的安装部署以及如何简单使用的介绍","aria-hidden":"true"}},[s._v("#")]),s._v(" 049. zookeeper + kafka 集群的安装部署以及如何简单使用的介绍")]),s._v(" "),n("h2",{attrs:{id:"回顾"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#回顾","aria-hidden":"true"}},[s._v("#")]),s._v(" 回顾")]),s._v(" "),n("p",[s._v("多级缓存的架构主要用来解决的问题是：时效高低数据的维度存储")]),s._v(" "),n("p",[s._v("时效性不高的数据，比如一些商品的基本信息，如果发生了变更，假设在 5 分钟之后再更新到页面中，\n供用户观察到，也是 ok 的，那么我们采取的是异步更新缓存的策略")]),s._v(" "),n("p",[s._v("时效性要求很高的数据，如库存，采取的是数据库 + 缓存双写的技术方案，也解决了双写的一致性的问题")]),s._v(" "),n("p",[s._v("上面这两条可能直接看觉得好像差不多的，这里忽略了一个解释，对于页面来说，需要静态的生成页面，\n这个过程可能稍微耗时一些，而对于双写来说则快太多了，它不负责页面渲染等工作，只需要把缓存数据更新即可")]),s._v(" "),n("p",[s._v("缓存数据生产服务，监听一个消息队列，然后数据源服务（商品信息管理服务）发生了数据变更之后，\n就将数据变更的消息推送到消息队列中")]),s._v(" "),n("p",[s._v("缓存数据生产服务可以去消费到这个数据变更的消息，然后根据消息的指示提取一些参数，\n然后调用对应的数据源服务的接口拉取数据，这个时候一般是从 mysql 库中拉去的")]),s._v(" "),n("p",[s._v("消息队列这里采用的是 kafka，这里选择 kafka 另外一个原因：\n后面我们还要用 zookeeper 来解决缓存的分布式并发更新的问题（如分布式锁解决）")]),s._v(" "),n("p",[s._v("而 kafka 集群是依赖 zookeeper 集群，所以先搭建 zookeeper 集群，再搭建 kafka 集群")]),s._v(" "),n("p",[s._v("zookeeper + kafka 的集群，都至少是三节点")]),s._v(" "),n("h2",{attrs:{id:"老师旁白"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#老师旁白","aria-hidden":"true"}},[s._v("#")]),s._v(" 老师旁白")]),s._v(" "),n("p",[s._v("我工作的时候，很多项目是跟大数据相关的，当然也有很多是纯 java 系统的架构，最近用 kafka 用得比较多")]),s._v(" "),n("p",[s._v("kafka 比较简单易用，讲课来说，很方便")]),s._v(" "),n("p",[s._v("解释一下，我们当然是不可能对课程中涉及的各种技术都深入浅出的讲解的了，比如 kafka，花上 20个小时给你讲解一下，不可能的")]),s._v(" "),n("p",[s._v("所以说呢，在这里，一些技术的组合，用什么都 ok")]),s._v(" "),n("p",[s._v("笑傲江湖中的风清扬，手中无剑胜有剑，还有任何东西都可以当做兵器，哪怕是一根草也可以")]),s._v(" "),n("p",[s._v("搞技术，kafka 和 activemq 肯定有区别，但是说，在有些场景下，其实可能没有那么大的区分度，kafka 和 activemq 其实是一样的")]),s._v(" "),n("p",[s._v("生产者+消费者的场景，kafka + activemq 都 ok")]),s._v(" "),n("p",[s._v("涉及的这种架构，对时效性要求高和时效性要求低的数据，分别采取什么技术方案？数据库+缓存双写一致性？异步+多级缓存架构？大缓存的维度化拆分？")]),s._v(" "),n("p",[n("strong",[s._v("你要关注的，是一些架构上的东西和思想，而不是具体的什么 mq 的使用")])]),s._v(" "),n("p",[s._v("作为一名架构师，需要宏观的思考，通盘去考虑整个架构，还有未来的技术规划，业务的发展方向，\n架构的演进方向和路线，站在一个 java 高级工程师的角度来思考的话，就是这么去落地实现，\n这个侧重点不一样")]),s._v(" "),n("p",[s._v("把课程里讲解的各种技术方案组合成、修改成你需要的适合你的业务的缓存架构")]),s._v(" "),n("div",{staticClass:"warning custom-block"},[n("p",[s._v("建议不要跟着老师的版本走，如果你一开始所有的版本都跟着走的话，就可以")]),s._v(" "),n("p",[s._v("否则，请安装最新版的 kafka，因为 kafka 的客户端与 linux 服务端通信的兼容性问题很麻烦，\n且老版本的配置在 boot 2.x 中不兼容，如果手工安装的话（也就是本笔记跟着老师视频走的），\n会出现 debug 这个消费者的时候，debug 异常，不知道什么原因")])]),s._v(" "),n("h2",{attrs:{id:"zookeeper-集群安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper-集群安装","aria-hidden":"true"}},[s._v("#")]),s._v(" zookeeper 集群安装")]),s._v(" "),n("p",[s._v("版本：zookeeper-3.4.5.tar.gz")]),s._v(" "),n("p",[s._v("安装机器：eshop-01、eshop-02、eshop-03")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" /usr/local\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://archive.apache.org/dist/zookeeper/zookeeper-3.4.5/zookeeper-3.4.5.tar.gz\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf zookeeper-3.4.5.tar.gz\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置环境变量，原来 .bashrc 才是环境变量的配置处")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" ~/.bashrc\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 内容新增")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("export")]),s._v(" ZOOKEEPER_HOME"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/zookeeper-3.4.5\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("export")]),s._v(" PATH"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PATH")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ZOOKEEPER_HOME")]),s._v("/bin\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 刷新环境变量配置")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("source")]),s._v(" ~/.bashrc\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改配置文件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" /usr/local/zookeeper-3.4.5/conf\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" zoo_sample.cfg zoo.cfg\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" zoo.cfg\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 涉及到的内容如下")]),s._v("\ndataDir"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/zookeeper-3.4.5/data\nserver.0"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("eshop-cache01:2888:3888\nserver.1"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("eshop-cache02:2888:3888\nserver.2"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("eshop-cache03:2888:3888\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# data")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /usr/local/zookeeper-3.4.5/data\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编辑集群 id，给一个 0，从 0 开始起")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vi 一个不存在的文件，保存后就存在了")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" /usr/local/zookeeper-3.4.5/data\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" myid\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br")])]),n("p",[s._v("一台搞定之后，使用 scp 命令把环境变量和 zookper 复制到 02 和 03 上")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# scp --help 中查看支持同时 scp 到多个机器，但是这里尝试一部分成功，一部分失败，所以分开")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" ~/.bashrc root@eshop-cache02:~/\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" ~/.bashrc root@eshop-cache03:~/\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" -r /usr/local/zookeeper-3.4.5 root@eshop-cache02:/usr/local\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" -r /usr/local/zookeeper-3.4.5 root@eshop-cache03:/usr/local\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("复制之后，需要修改的地方有：myid ，分别修改为 1 和 2，唯一即可")]),s._v(" "),n("p",[s._v("zookper 启动与检查；三台机器都执行操作")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 由于之前配置了环境变量，这里可以任意目录执行")]),s._v("\nzkServer.sh start\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查 ZooKeeper 状态：一个 leader，两个 follower")]),s._v("\nzkServer.sh status\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# jps：检查三个节点是否都有 QuromPeerMain 进程")]),s._v("\njps\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h2",{attrs:{id:"scala-安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#scala-安装","aria-hidden":"true"}},[s._v("#")]),s._v(" scala 安装")]),s._v(" "),n("p",[s._v("kafka 依赖 scala ，所以需要先安装")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" /usr/local\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://downloads.lightbend.com/scala/2.11.12/scala-2.11.12.tgz\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf scala-2.11.12.tgz\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置环境变量，原来 .bashrc 才是环境变量的配置处")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" ~/.bashrc\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 内容新增")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("export")]),s._v(" SCALA_HOME"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/scala-2.11.12\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("export")]),s._v(" PATH"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PATH")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$SCALA_HOME")]),s._v("/bin\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 刷新环境变量配置")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("source")]),s._v(" ~/.bashrc\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看是否已经配置好")]),s._v("\nscala -version\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" ~/.bashrc root@eshop-cache02:~/\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" ~/.bashrc root@eshop-cache03:~/\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" -r /usr/local/scala-2.11.12 root@eshop-cache02:/usr/local/\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" -r /usr/local/scala-2.11.12 root@eshop-cache03:/usr/local/\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("h2",{attrs:{id:"kafka-集群"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#kafka-集群","aria-hidden":"true"}},[s._v("#")]),s._v(" kafka 集群")]),s._v(" "),n("p",[s._v("版本：kafka_2.9.2-0.8.1.1.tgz，该版本是 2014 年发布的，很老的一个版本了")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" /usr/local\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://archive.apache.org/dist/kafka/0.8.1.1/kafka_2.9.2-0.8.1.1.tgz\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf kafka_2.9.2-0.8.1.1.tgz\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置环境变量，原来 .bashrc 才是环境变量的配置处")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" ~/.bashrc\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 内容新增")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("export")]),s._v(" KAFKA_HOME"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/kafka_2.9.2-0.8.1.1\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("export")]),s._v(" PATH"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PATH")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$KAFKA_HOME")]),s._v("/bin\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 刷新环境变量配置")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("source")]),s._v(" ~/.bashrc\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("配置 kafka")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /usr/local/kafka_2.9.2-0.8.1.1/config/server.properties\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 涉及到的内容如下")]),s._v("\nbroker.id  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 类似 myid。每台机器唯一即可")]),s._v("\nzookeeper.connect"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("192.168.99.170:2181,192.168.99.171:2181,192.168.99.172:2181\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("安装 slf4j 日志")]),s._v(" "),n("ul",[n("li",[s._v("slf4j-1.7.6.zip 包解压后")]),s._v(" "),n("li",[s._v("slf4j-nop-1.7.6.jar 包放在 kafka/libs 目录下")])]),s._v(" "),n("p",[s._v("解决 kafka 启动 报错 Unrecognized VM option 'UseCompressedOops' 问题")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /usr/local/kafka_2.9.2-0.8.1.1/bin/kafka-run-class.sh\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 去掉 -XX:+UseCompressedOops 即可")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -z "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$KAFKA_JVM_PERFORMANCE_OPTS")]),s._v('"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n  KAFKA_JVM_PERFORMANCE_OPTS"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-server  -XX:+UseCompressedOops -XX:+UseParNewGC -XX:+UseConcMarkSweepGC -XX:+CMSClassUnloadingEnabled -XX:+CMSScavengeBeforeRemark -XX:+DisableExplicitGC -Djava.awt.headless=true"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("启动命令")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" /usr/local/kafka_2.9.2-0.8.1.1\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" bin/kafka-server-start.sh config/server.properties "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看是否启动是否报错")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" nohup.out\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("单机启动没有问题后，可以按照之前的方法把环境变量和 kafka 目录 copy 到另外两台机器")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" ~/.bashrc root@eshop-cache02:~/\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" ~/.bashrc root@eshop-cache03:~/\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" -r /usr/local/kafka_2.9.2-0.8.1.1 root@eshop-cache02:/usr/local/\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" -r /usr/local/kafka_2.9.2-0.8.1.1 root@eshop-cache03:/usr/local/\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 记得修改每台机器的 broker.id 。修改之后才能启动成功")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("检查集群状态")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("使用 jps 检查启动是否成功\n\n使用基本命令检查kafka是否搭建成功\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" /usr/local/kafka_2.9.2-0.8.1.1\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建测试的 topic，名称为 test")]),s._v("\nbin/kafka-topics.sh --zookeeper 192.168.99.170:2181,192.168.99.171:2181,192.168.99.172:2181 --topic "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),s._v(" --replication-factor 1 --partitions 1 --create\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生产者和消费者是一个命令行互动程序，所以需要开启两个终端连接")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在生产者程序中输入字符串发送后，会在消费者上显示出来")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建一个生产者")]),s._v("\nbin/kafka-console-producer.sh --broker-list 192.168.99.170:9092,192.168.99.171:9092,192.168.99.172:9092 --topic "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建一个消费者")]),s._v("\nbin/kafka-console-consumer.sh --zookeeper 192.168.99.170:2181,192.168.99.171:2181,192.168.99.172:2181 --topic "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),s._v(" --from-beginning\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])])])},[],!1,null,null,null);a.default=t.exports}}]);
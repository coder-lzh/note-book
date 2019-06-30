(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{551:function(s,n,a){"use strict";a.r(n);var t=a(2),e=Object(t.a)({},function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_052-基于-openresty-部署应用层-nginx-以及-nginx-lua-开发-hello-world"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_052-基于-openresty-部署应用层-nginx-以及-nginx-lua-开发-hello-world","aria-hidden":"true"}},[s._v("#")]),s._v(" 052. 基于 OpenResty 部署应用层 nginx 以及 nginx + lua 开发 hello world")]),s._v(" "),a("p",[s._v("我们这里玩儿 nginx，全都会在 nginx 里去写 lua 脚本，因为我们需要自定义一些特殊的业务逻辑")]),s._v(" "),a("p",[s._v("比如说，流量分发，自己用 lua 去写分发的逻辑，在分发层 nginx 里去写的")]),s._v(" "),a("p",[s._v("再比如说，要用 lua 去写多级缓存架构存取的控制逻辑，在应用层 nginx 里去写的")]),s._v(" "),a("p",[s._v("后面还要做热点数据的自动降级机制，也是用 lua 脚本去写降级机制的，在分发层 nginx 里去写的")]),s._v(" "),a("p",[s._v("因为我们要用 nginx+lua 去开发，所以会选择用最流行的开源方案，就是用 OpenResty")]),s._v(" "),a("p",[s._v("nginx+lua 打包在一起，而且提供了包括 redis 客户端，mysql 客户端，http 客户端在内的大量的组件")]),s._v(" "),a("p",[s._v("我们这一讲是去部署应用层 nginx，会采用 OpenResty 的方式去部署 nginx，\n而且会带着大家写一个 nginx+lua 开发的一个 hello world")]),s._v(" "),a("p",[s._v("部署第一个 nginx，作为应用层 nginx，部署机器：eshop-01")]),s._v(" "),a("h2",{attrs:{id:"部署-openresty"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署-openresty","aria-hidden":"true"}},[s._v("#")]),s._v(" 部署 openresty")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /usr/servers  \n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" /usr/servers/\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装依赖")]),s._v("\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y readline-devel pcre-devel openssl-devel gcc\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可能需要翻墙才能下载，所以可以离线下载好")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://openresty.org/download/ngx_openresty-1.7.7.2.tar.gz  \n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -xzvf ngx_openresty-1.7.7.2.tar.gz  \n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ngx_openresty-1.7.7.2.tar.gz\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 lua 等相关组件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" /usr/servers/ngx_openresty-1.7.7.2/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" bundle/LuaJIT-2.1-20150120/  \n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" clean "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -sf luajit-2.1.0-alpha /usr/local/bin/luajit\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://github.com/FRiCKLE/ngx_cache_purge/archive/2.3.tar.gz  \n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -xvf 2.3.tar.gz  \n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://github.com/yaoweibin/nginx_upstream_check_module/archive/v0.3.0.tar.gz  \n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -xvf v0.3.0.tar.gz  \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" /usr/servers/ngx_openresty-1.7.7.2  \n./configure --prefix"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/servers --with-http_realip_module  --with-pcre  --with-luajit --add-module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("./bundle/ngx_cache_purge-2.3/ --add-module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("./bundle/nginx_upstream_check_module-0.3.0/ -j2  \n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 会发现多了好多目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@eshop-cache01 servers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ll")]),s._v("\ntotal 3316\ndrwxr-xr-x 2 root root    4096 Apr  1 23:38 bin\ndrwxr-xr-x 6 root root    4096 Apr  1 23:38 luajit\ndrwxr-xr-x 5 root root    4096 Apr  1 23:38 lualib\ndrwxr-xr-x 6 root root    4096 Apr  1 23:38 nginx\ndrwxrwxr-x 4 1000 1000    4096 Apr  1 23:35 ngx_openresty-1.7.7.2\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动nginx:")]),s._v("\n/usr/servers/nginx/sbin/nginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br")])]),a("h2",{attrs:{id:"nginx-lua-开发的-hello-world"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-lua-开发的-hello-world","aria-hidden":"true"}},[s._v("#")]),s._v(" nginx+lua 开发的 hello world")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /usr/servers/nginx/conf/nginx.conf\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在 http 部分添加如下内容")]),s._v("\n\nlua_package_path "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/servers/lualib/?.lua;;"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \nlua_package_cpath "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/servers/lualib/?.so;;"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n\n如下位置\n\nhttp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    lua_package_path "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/servers/lualib/?.lua;;"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    lua_package_cpath "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/servers/lualib/?.so;;"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    include       mime.types"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    default_type  application/octet-stream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("/usr/servers/nginx/conf 下，创建一个 lua.conf，内容如下")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("server {  \n    listen       80;  \n    server_name  _;  \n}  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("接着在 nginx.conf 的 http 部分添加："),a("code",[s._v("include lua.conf;")])]),s._v(" "),a("p",[s._v("验证配置是否正确：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@eshop-cache01 conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /usr/servers/nginx/sbin/nginx -t")]),s._v("\nnginx: the configuration "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" /usr/servers/nginx/conf/nginx.conf syntax is ok\nnginx: configuration "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" /usr/servers/nginx/conf/nginx.conf "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),s._v(" is successful\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("在 lua.conf 的 server 部分添加：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("location /lua {  \n    default_type 'text/html';  \n    content_by_lua 'ngx.say(\"hello world\")';  \n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("添加完成后，再次测试验证是否正确："),a("code",[s._v("/usr/servers/nginx/sbin/nginx -t")])]),s._v(" "),a("p",[s._v("重新加载 nginx 配置: "),a("code",[s._v("/usr/servers/nginx/sbin/nginx -s reload")])]),s._v(" "),a("p",[s._v("访问 "),a("code",[s._v("http://192.168.99.170/lua")]),s._v(" 会看到页面输出 「hello world」")]),s._v(" "),a("p",[s._v("这里把嵌入配置文件的代码迁移到独立文件中")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mkdir -p /usr/servers/nginx/conf/lua\nvi /usr/servers/nginx/conf/lua/test.lua\n# 在文件中写入迁入的代码\nngx.say(\"hello world\");\n\n# 并修改 lua.conf ，配置成 file 方式\n\nlocation /lua {  \n    default_type 'text/html';  \n    content_by_lua_file conf/lua/test.lua;\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("查看异常日志 : "),a("code",[s._v("tail -f /usr/servers/nginx/logs/error.log")])]),s._v(" "),a("h2",{attrs:{id:"工程化的-nginx-lua-项目结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工程化的-nginx-lua-项目结构","aria-hidden":"true"}},[s._v("#")]),s._v(" 工程化的 nginx+lua 项目结构")]),s._v(" "),a("p",[s._v("项目工程结构")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("|- hello  # 项目名\n  |- hello.conf     \n  |- lua              \n    |- hello.lua\n  |- lualib  # 该包的文件可以在之前的 /usr/servers/lualib 全部 copy 过来           \n    |- *.lua\n    |- *.so\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("放在 /usr/hello 目录下")]),s._v(" "),a("h2",{attrs:{id:"搭建另外一个应用层-nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#搭建另外一个应用层-nginx","aria-hidden":"true"}},[s._v("#")]),s._v(" 搭建另外一个应用层 nginx")]),s._v(" "),a("p",[s._v("如法炮制，在另外一个机器上，也用 OpenResty 部署一个 nginx")]),s._v(" "),a("p",[s._v("部署机器：eshop-02")]),s._v(" "),a("p",[s._v("这次的 hello word 就按照工程化的目录来放置和配置")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /usr/hello\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" hello.conf\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 内容如下")]),s._v("\nserver "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("  \n    listen       80"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n    server_name  _"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n    location /lua "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("  \n      default_type "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'text/html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n      content_by_lua_file /usr/hello/lua/hello.lua"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" lua\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" lua/hello.lua\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 内容如下")]),s._v("\nngx.say"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello world,工程化结构"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复制 lualib")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" -r /usr/servers/lualib/ ./\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编辑 nginx.conf")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /usr/servers/nginx/conf/nginx.conf\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加内容")]),s._v("\nhttp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    lua_package_path "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/hello/lualib/?.lua;;"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    lua_package_cpath "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/hello/lualib/?.so;;"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    include /usr/hello/hello.conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    include       mime.types"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 测试是否成功")]),s._v("\n/usr/servers/nginx/sbin/nginx -t\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重新加载 nginx 配置")]),s._v("\n/usr/servers/nginx/sbin/nginx -s reload\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br")])]),a("p",[s._v("浏览器访问 http://eshop-cache02/lua  显示出信息，成功")]),s._v(" "),a("h2",{attrs:{id:"讲师旁白"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#讲师旁白","aria-hidden":"true"}},[s._v("#")]),s._v(" 讲师旁白")]),s._v(" "),a("p",[s._v("对于我的课程来说，主要还是关注我们核心的 topic：大型缓存的架构")]),s._v(" "),a("p",[s._v("那么对于课程里涉及到的各种技术来说，比如 nginx，lua 脚本，你说让我给你讲成 nginx从入门到精通，也不太现实; 讲一个 lua 脚本开发从入门到精通，也不太现实")]),s._v(" "),a("p",[s._v("我只能说，跟着整个项目的思路去走，把项目里涉及的相关技术的知识给你讲解一下，然后保证说，带着你手把手的去做，让你至少可以学会项目里讲解的这些知识，可以做出来")]),s._v(" "),a("p",[s._v("如果你后面真的是要自己去用 nginx+lua 去做项目，其实个人建议你还是得去查询和学习一些更多的资料，比如：nginx 的一些知识、lua 的一些语法")]),s._v(" "),a("p",[s._v("如龙果里面最受欢迎的一套课程，就是 dubbo 实战课程，里面也是 dubbo 整合了各种技术：active mq、zookeeper、redis 3.0 分布式集群、mysql读写分离")]),s._v(" "),a("p",[s._v("但是有个问题，每个课程，我相信一个好的课程，它总是可以让你学到很多知识的")]),s._v(" "),a("p",[s._v("但是任何一个好的课程，它都不是万能的，比如 dubbo 这个课程中，你可能能学习到 zookeeper 怎么当注册中心，但是 zookeeper 分布式锁、分布式协调、分布式选举等等技术，你能学到吗？")]),s._v(" "),a("p",[s._v("dubbo 它也不可能说是给你把 zookeeper、redis、mysql 全部讲解到从入门到精通这样子")]),s._v(" "),a("p",[s._v("topic 主题，基于 dubbo 复杂的分布式系统的通用架构，分布式系统，dubbo rpc 的调用，服务的开发; zookeeper 做注册中心; redis 分布式集群; mysql 读写分离; tomcat 集群; hudson 持续集成")]),s._v(" "),a("p",[s._v("它告诉你的是一个通用的分布式系统的架构")]),s._v(" "),a("p",[s._v("我这里的也会带着你做 nginx 的部署、openresty、nginx+lua 的开发，redis 集群/高可用/高并发/读写分离/持久化/数据备份恢复、zookeeper 分布式锁、kafka 去做消息通信，hystrix 去做限流")]),s._v(" "),a("p",[s._v("但是任何一个技术都不可能给你从入门到精通讲解完")]),s._v(" "),a("p",[s._v("大家可以去关注一下我的 es 的课程，你如果录一套课程，基本选择方向就两个，要不就是讲解技术本身，大量案例实战贯穿，把技术本身讲解的很细致")]),s._v(" "),a("p",[s._v("我之前有两个 es 顶尖高手系列的课程属于技术课程，把 es 这个技术讲解的非常非常的细致")]),s._v(" "),a("p",[s._v("像我们现在这个课程，大规模缓存、支撑高并发、高性能、海量数据，类似之前 dubbo 实战课程，它讲解的还是一种架构课程，那么就关注点在整个架构的整体、整合、架构方案、架构设计、架构思想")]),s._v(" "),a("p",[s._v("里面涉及的技术是不可能给你去深入讲解的")])])},[],!1,null,null,null);n.default=e.exports}}]);
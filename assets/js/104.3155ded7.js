(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{622:function(t,a,s){"use strict";s.r(a);var v=s(6),_=Object(v.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"dns查找"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dns查找"}},[t._v("#")]),t._v(" DNS查找")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/blogs/计算机网络/DNS查询过程.html"}},[t._v("GO")])],1),t._v(" "),s("h2",{attrs:{id:"tcp握手"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp握手"}},[t._v("#")]),t._v(" TCP握手")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/blogs/计算机网络/三握四挥.html"}},[t._v("GO")])],1),t._v(" "),s("h2",{attrs:{id:"tls协商"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tls协商"}},[t._v("#")]),t._v(" TLS协商")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/blogs/计算机网络/https.html"}},[t._v("GO")])],1),t._v(" "),s("h2",{attrs:{id:"请求-响应"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请求-响应"}},[t._v("#")]),t._v(" 请求-响应")]),t._v(" "),s("h2",{attrs:{id:"渲染"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#渲染"}},[t._v("#")]),t._v(" 渲染")]),t._v(" "),s("h2",{attrs:{id:"chrome浏览器的架构模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#chrome浏览器的架构模型"}},[t._v("#")]),t._v(" Chrome浏览器的架构模型")]),t._v(" "),s("p",[t._v("chrome浏览器采用的多进程的架构模块，一个浏览器进程、一个GPU进程、一个网络进程、多个渲染进程和插件进程。")]),t._v(" "),s("h3",{attrs:{id:"浏览器进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器进程"}},[t._v("#")]),t._v(" 浏览器进程")]),t._v(" "),s("p",[t._v("主要负责界面显示、用户交互、子进程管理，同时提供存储等功能。")]),t._v(" "),s("h3",{attrs:{id:"渲染进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#渲染进程"}},[t._v("#")]),t._v(" 渲染进程")]),t._v(" "),s("p",[t._v("核心任务是将HTML、CSS和JavaScript转换成可以和用户交互的网页，排版引擎Blink和V8引擎都是运行在这个进程里面。默认情况下，chrome浏览器的每个tab都会创建一个渲染进程。如果一个页面打开了另一个页面，而新页面和当前页面属于同一个站点的话，那么新页面会复用父页面的渲染进程。")]),t._v(" "),s("h3",{attrs:{id:"gpu进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gpu进程"}},[t._v("#")]),t._v(" GPU进程")]),t._v(" "),s("p",[t._v("绘制页面")]),t._v(" "),s("h3",{attrs:{id:"网络进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网络进程"}},[t._v("#")]),t._v(" 网络进程")]),t._v(" "),s("p",[t._v("负责页面的网络资源的加载")]),t._v(" "),s("h3",{attrs:{id:"插件进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插件进程"}},[t._v("#")]),t._v(" 插件进程")]),t._v(" "),s("p",[t._v("主要负责插件的运行，保证插件的崩溃不会影响浏览器和页面。")]),t._v(" "),s("h3",{attrs:{id:"面向服务的架构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#面向服务的架构"}},[t._v("#")]),t._v(" 面向服务的架构")]),t._v(" "),s("p",[t._v("上面的架构有一些问题：资源的高占用、体系架构复杂而造成浏览器各模块之间的耦合度高、扩展性差。")]),t._v(" "),s("p",[t._v("为了解决这些问题，Chrome官方团队使用了“面向服务的架构”的思想设计了新的chrome架构。")]),t._v(" "),s("p",[t._v("就是原来的各模块被重构成独立的服务，每个服务都可以在独立的进程中运行，访问服务必须使用定义好的接口，通过IPC来通信。")]),t._v(" "),s("h2",{attrs:{id:"从输入url到页面展示给过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从输入url到页面展示给过程"}},[t._v("#")]),t._v(" 从输入URL到页面展示给过程")]),t._v(" "),s("p",[t._v("首先，浏览器进程接收到用户输入的URL后，浏览器进程将这个URL转发给网络进程。")]),t._v(" "),s("p",[t._v("网络进程收到URL后，会先检查本地缓存是否缓存了这个资源，如果有这个资源存在，就将这个资源返回给浏览器进程。如果不存在，那么就直接发送网络请求。")]),t._v(" "),s("h3",{attrs:{id:"dns解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dns解析"}},[t._v("#")]),t._v(" DNS解析")]),t._v(" "),s("p",[t._v("在发送网络请求之前，需要进程DNS解析，来获取目的服务器的IP地址。")]),t._v(" "),s("h3",{attrs:{id:"建立tcp连接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#建立tcp连接"}},[t._v("#")]),t._v(" 建立TCP连接")]),t._v(" "),s("p",[t._v("有了IP地址后，如果HTTPS请求，会先建立TLS连接，然后才进行TCP的三次握手，来建立连接。")]),t._v(" "),s("p",[t._v("连接建立之后，网络进程开始构建请求行、请求头这些信息，向服务器发送HTTP请求。")]),t._v(" "),s("h3",{attrs:{id:"请求与响应"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请求与响应"}},[t._v("#")]),t._v(" 请求与响应")]),t._v(" "),s("p",[t._v("服务器收到请求后，根据请求信息生成响应数据，并发给网络进程。网络进程接收到响应数据后，就开始解析。")]),t._v(" "),s("p",[t._v("在解析过程中，如果Content-Type的值被浏览器判断为下载类型，那么这个请求会被提交到浏览器的下载管理器。如果是HTML文件，那么浏览器进程将网络进程接收到的HTML数据提交给渲染进程。")]),t._v(" "),s("p",[t._v("数据传输完后，TCP进行四次挥手断开连接，如果Connection：keep-alive，那么TCP会一直保持着连接。")]),t._v(" "),s("h3",{attrs:{id:"渲染阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#渲染阶段"}},[t._v("#")]),t._v(" 渲染阶段")]),t._v(" "),s("p",[t._v("主要是构建DOM树、样式计算、布局阶段、分成、绘制、分块、光栅化和合成。")]),t._v(" "),s("p",[t._v("渲染进程收到HTML数据之后，调用HTML parser对HTML进行解析，构建DOM树。解析过程中，网页里面那些图片、css、js这些资源，主线程在构建dom的时候会逐一请求它们，为了加速，预加载器也会同时运行。当遇到script标签时，渲染进程会停止解析HTML，转头去加载、解析和执行js代码，如果script标签有async或者defer这些属性，浏览器会异步加载和执行这些js代码，在加载过程中不会阻塞解析，解析的时候会阻塞渲染。")]),t._v(" "),s("p",[t._v("当渲染引擎接收到CSS文本的时候，会进行格式化，转换成一个styleSheets对象，然后根据这个对象，对css的一些属性值进行标准化。有了已经标准化的styleSheets对象后，就根据计算规则（继承和层叠），去计算DOM树中每个节点的样式属性。")]),t._v(" "),s("p",[t._v("继承：所有子节点都会继承父节点的那些可继承的样式\n层叠。")]),t._v(" "),s("p",[t._v("有了DOM树和计算样式后，就进入布局阶段，在布局阶段的任务就是创建布局树和布局计算。")]),t._v(" "),s("p",[t._v("遍历DOM树种的所有可见节点，并把这些节点加到布局树中，构建玩布局树之后，就开始计算布局树节点的坐标位置。")]),t._v(" "),s("p",[t._v("因为页面中有很多复杂的效果，所以渲染引擎还需要对特定的节点生成专用的图层，并生成一颗对象的图层树。")]),t._v(" "),s("p",[t._v("那些特定的节点一般指定的是")]),t._v(" "),s("ol",[s("li",[t._v("拥有层叠上下文的元素会被提升为单独的一层")]),t._v(" "),s("li",[t._v("需要裁剪的地方也会被创建为图层")])]),t._v(" "),s("p",[t._v("在通常情况下，并非布局树中每个节点都包含一个图层，如果一个节点没有对应的层，那么这个节点就从属于父节点的图层。")]),t._v(" "),s("p",[t._v("完成图层树的构建之后，渲染引擎会把图层的绘制拆分成很多小的绘制指令，然后将这些绘制指令按照顺序组成一个待绘制列表。")]),t._v(" "),s("p",[t._v("当图层的绘制列表准备完后，主线程就会把这些绘制列表提交给合成线程。")]),t._v(" "),s("p",[t._v("合成线程会将图层划分为一个个小图块，然后按照视口附近的图块来优先生成位图（实际生成的位图的操作是由栅格化来执行，渲染进程有维护一个栅格化的线程，所有的图块栅格化都是在这个线程池内执行的。栅格化的过程会使用GPU来加速生成，使用GPU生成位图的过程叫做GPU栅格化，然后生成的位图保存在GPU内存中），之后渲染进程把生成图块的指令发送GPU，然后在GPU中执行生成图块的位图，并保存在GPU内存中。")]),t._v(" "),s("p",[t._v("等所有图块都被栅格化了之后，合成线程就会生成一个绘制图块的命令“DrawQuad”，并将这个命令提交给浏览器进程。浏览器进程中的viz组件，接收合成线程发送的命令，然后根据这个命令，将页面内容绘制出来，发送给显卡，由显卡负责显示到屏幕。")])])}),[],!1,null,null,null);a.default=_.exports}}]);
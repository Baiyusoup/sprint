(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{629:function(t,a,s){"use strict";s.r(a);var r=s(6),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"二进制分帧"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二进制分帧"}},[t._v("#")]),t._v(" 二进制分帧")]),t._v(" "),s("p",[t._v("采用二进制的格式来传输数据。将请求和响应数据分割成帧，并且它们采用二进制编码。分帧之后，服务器看到的不再是一个完整的http请求，而是流的形式，这个流是由二进制帧组成的，每个流都有自己的ID，不同流之间二进制帧的发送是乱序的，但同一个流内的二进制帧是有序的，因此不需要担心先后顺序问题。")]),t._v(" "),s("h2",{attrs:{id:"多路复用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多路复用"}},[t._v("#")]),t._v(" 多路复用")]),t._v(" "),s("p",[t._v("一个tcp连接里，客户端和服务端可以同时发送多个请求或响应，而且双方之间的数据传输格式是二进制帧组成的流，因此将不存在数据的先后问题，这个解决了http1.1的队头阻塞问题。")]),t._v(" "),s("h2",{attrs:{id:"首部压缩"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#首部压缩"}},[t._v("#")]),t._v(" 首部压缩")]),t._v(" "),s("p",[t._v("http2.0针对头部字段，采用了HPACK的压缩算法，")]),t._v(" "),s("p",[t._v("该算法首先是在服务器和客户端之间建立哈希表，将用到的字段放在这张表中，在传输的时候对于之前出现过的值，只需要把索引传给对方即可，对方拿到索引查表就行了。")]),t._v(" "),s("h2",{attrs:{id:"服务器推送"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务器推送"}},[t._v("#")]),t._v(" 服务器推送")]),t._v(" "),s("p",[t._v("允许服务器向客户端推送资源，通过服务器推送，可以把一些客户端需要的资源推送给它，这样客户端可以不需要发送请求来获取，这种方式适合加载静态资源。")]),t._v(" "),s("h2",{attrs:{id:"请求优先级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请求优先级"}},[t._v("#")]),t._v(" 请求优先级")]),t._v(" "),s("p",[t._v("设置数据帧的优先级，让服务器优先处理，优化用户体验。")])])}),[],!1,null,null,null);a.default=e.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{592:function(a,s,t){"use strict";t.r(s);var e=t(6),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"提高构建速度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提高构建速度"}},[a._v("#")]),a._v(" 提高构建速度")]),a._v(" "),t("h3",{attrs:{id:"文件检索速度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件检索速度"}},[a._v("#")]),a._v(" 文件检索速度")]),a._v(" "),t("p",[a._v("对resolve参数进行合理的配置，告诉webpack怎么去搜索文件\nresolve.extensions 后缀\nresolve.modules\nresolve.alias")]),a._v(" "),t("p",[a._v("还有loader的include和exclude缩小构建目标")]),a._v(" "),t("h3",{attrs:{id:"hmr"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hmr"}},[a._v("#")]),a._v(" HMR")]),a._v(" "),t("p",[a._v("webpack-dev-server")]),a._v(" "),t("h3",{attrs:{id:"oneof"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#oneof"}},[a._v("#")]),a._v(" oneOf")]),a._v(" "),t("h3",{attrs:{id:"缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缓存"}},[a._v("#")]),a._v(" 缓存")]),a._v(" "),t("ul",[t("li",[a._v("babel-loader")]),a._v(" "),t("li",[a._v("terser-webpack-plugin")]),a._v(" "),t("li",[a._v("cache-loader")])]),a._v(" "),t("h3",{attrs:{id:"多进程打包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多进程打包"}},[a._v("#")]),a._v(" 多进程打包")]),a._v(" "),t("p",[a._v("thread-loader")]),a._v(" "),t("h3",{attrs:{id:"externals"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#externals"}},[a._v("#")]),a._v(" externals")]),a._v(" "),t("p",[a._v("阻止某些库打包到bundle，减少打包的体积")]),a._v(" "),t("h2",{attrs:{id:"提高运行时性能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提高运行时性能"}},[a._v("#")]),a._v(" 提高运行时性能")]),a._v(" "),t("h3",{attrs:{id:"scope-histing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scope-histing"}},[a._v("#")]),a._v(" Scope Histing")]),a._v(" "),t("p",[a._v("作用是分析模块之间的依赖关系，尽可能地把打包出来的模块合并到一个函数中去。\nwebpack4")]),a._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[a._v("optimization"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  concatenateModules"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("h3",{attrs:{id:"代码压缩"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码压缩"}},[a._v("#")]),a._v(" 代码压缩")]),a._v(" "),t("p",[a._v("webpack4在production模式下，自动使用terser-webpack-plugin来处理压缩js代码。使用optimize-css-assets-webpack-plugin压缩css代码，使用purgeCSS删除无用的css代码。")]),a._v(" "),t("p",[a._v("PurgeCSS 删除无用的css代码，配合mini-css-extract-plugin")]),a._v(" "),t("h3",{attrs:{id:"文件大小压缩"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件大小压缩"}},[a._v("#")]),a._v(" 文件大小压缩")]),a._v(" "),t("p",[a._v("compression-webpack-plugin使用这个插件根据配置来压缩相应的文件。")]),a._v(" "),t("h3",{attrs:{id:"缓存方面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缓存方面"}},[a._v("#")]),a._v(" 缓存方面")]),a._v(" "),t("p",[a._v("利用hash、contenthash、chunkhash来命名打包后的文件。")]),a._v(" "),t("h3",{attrs:{id:"tree-shaking"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tree-shaking"}},[a._v("#")]),a._v(" tree shaking")]),a._v(" "),t("p",[a._v("依赖ESM的特性，在编译阶段能够确定依赖关系\n主要有两种方式：")]),a._v(" "),t("ol",[t("li",[a._v("usedExports，通过标记某写函数是否使用，之后通过Terser来进行优化")]),a._v(" "),t("li",[a._v("sideEffects，说明哪些文件有副作用，直接false表示整个项目的文件都没有副作用。")])]),a._v(" "),t("h3",{attrs:{id:"代码分割"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码分割"}},[a._v("#")]),a._v(" 代码分割")]),a._v(" "),t("p",[a._v("将代码分离到不同的bundle中，方便控制资源的加载优先级\n这里通过splitChunksPlugin来实现。")])])}),[],!1,null,null,null);s.default=r.exports}}]);
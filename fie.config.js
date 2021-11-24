"use strict"

module.exports = {
  toolkit: "fie-toolkit-vue",

  toolkitConfig: {
    overseas: true,
    group: "fe-international",

    /**
     * publishPages配置页面发布（必须）
     * outputPath {string} 对应dist目录 例如：index.html
     * publicPath {string} 对应根域名 例如：test/index.html
     * description {string} 页面描述
     */
    publishPages: [
      {
        outputPath: "index.html",
        publicPath: "web.html",
        description: ""
      },
      {
        outputPath: "index-tw.html",
        publicPath: "web-tw.html",
        description: ""
      }
      // {
      //   outputPath: "tv.html",
      //   publicPath: "tv.html",
      //   description: ""
      // },
      // {
      //   outputPath: "movie.html",
      //   publicPath: "movie.html",
      //   description: ""
      // }
    ]
  },

  configureWebpack: {
    resolve: {
      mainFields: ["main", "browser", "module"] // 配置优先解析main
    },
    externals: {
      vue: "Vue",
      vuex: "Vuex"
    },
    plugins: [
    ],
    optimization: {
      minimize: false
    }
  },

  css: {
    loaderOptions: {
      sass: {
        data: `@import "src/common/style/mixins.scss";`
      }
    },
    modules: false
  },

  // 多页开发使用 pages选项
  pages: {
    index: {
      entry: "src/main.js",
      template: "src/htmls/index.html",
      filename: "index.html"
    },
    "index-tw": {
      entry: "src/main.js",
      template: "src/htmls/index-tw.html",
      filename: "index-tw.html"
    }
    // tv: {
    //   entry: "src/apps/tv/main.js",
    //   template: "src/apps/tv/index.html",
    //   filename: "tv.html"
    // },
    // movie: {
    //   entry: "src/apps/movie/main.js",
    //   template: "src/apps/movie/index.html",
    //   filename: "movie.html"
    // }
  },

  devServer: {
    proxy: {
      "/": {
        ws: false,
        target: "https://aws-api.smartcinemausa.com/",
        changOrigin: true
      }
    }
  }
}

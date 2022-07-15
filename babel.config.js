module.exports = {
  presets: [
    ["@babel/preset-env", {
      useBuiltIns: "usage", // 按需引入 corejs 中的模块 
      corejs: 3, // 核心 js 版本
      targets: "ie>10" // 浏览器支持范围
    }]
  ]
}
// {
//   presets: [
//     ["@babel/preset-env", {
//       "targets": "> 0.25%, not dead"
//     }]
//   ],
//   plugins: [
//     // 不污染全局，在运行时加载
//     ["@babel/plugin-transform-runtime", {
//       "corejs": 3
//     }]
//   ]
// }
  
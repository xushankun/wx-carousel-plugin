var plugin = requirePlugin("myPlugin") // 导入插件index.js里的模块
Page({
  data: {
    bannerList: [
      '../../images/banner1.png',
      '../../images/banner2.png',
      '../../images/banner3.png'
    ],
    currentTab: 1
  },
  // 翻页时索引
  bindchange(e) {
    console.log(e.detail)
  },
  // 点击当前页显示索引
  tapItem(e) {
    console.log(e.detail)
  },
  onLoad: function() {
    console.log(plugin.name)
  }
})
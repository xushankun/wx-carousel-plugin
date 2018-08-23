// plugin/components/carousel/carousel.js
Component({
  properties: {
    // 轮播地址列表
    bannerList: {
      type: Array,
      value:null
    },
    // 轮播当前选中项
    currentTab: {
      type: Number,
      value: 0
    }
  },
  data: {

  },
  methods: {
    // 翻页时索引
    bindchange(e) {
      if (e.detail.source === "touch") {
        this.setData({
          currentTab: e.detail.current
        });
        this.triggerEvent("bindchange", e.detail.current);   // 组件对外方法
      }
    },
    // 点击当前页显示索引
    tapItem(e){
      this.triggerEvent("tapItem", e.currentTarget.dataset.index);   // 组件对外方法
    }
  }
})
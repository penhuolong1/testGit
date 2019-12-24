<template>
  <div class="city-wrapper">
    <head-top>
      <span slot='logo'>ele.me</span>
    </head-top>
    <div class="search-wrapper">
      <input type="search"
             placeholder="请输入学校、商务楼、地址"
             class="search-input"
             v-model="searchValue"
             @keyup.enter="getSearchCityList">
      <input type="button"
             value="提交"
             class="search-btn"
             @click="getSearchCityList">
    </div>
    <div class="history-title">搜索历史</div>
    <div class="history-wrapper">
      <div class="search-city-item"
           v-for="(item, index) in searchCityList"
           :key="index">
        <div class='title'>{{item.name}}</div>
        <div class='content'>{{item.address}}</div>
      </div>
    </div>
    <loading v-if="this.$store.state.isLoad"></loading>
  </div>
</template>

<script>
import headTop from '@/components/header/header'
import loading from '@/components/loadding/index'
import { searchCity } from '@/assets/js/api.js'
export default {
  components: {
    headTop,
    loading
  },
  props: {},
  data () {
    return {
      cityId: '',
      searchCityList: [],
      searchValue: ''
    }
  },
  watch: {},
  computed: {},
  methods: {
    getSearchCityList () {
      if (!this.searchValue) {
        this.$dialog.alert({
          message: '请输入搜索内容'
        })
        return
      }
      searchCity(this.cityId, this.searchValue).then(res => {
        console.log(res)
        if (res.status === 200) {
          this.searchCityList = res.data
        }
      })
    }
  },
  created () {
    this.cityId = this.$route.params.id
    console.log(this.$store.state.isLoad)
  },
  mounted () { }
}
</script>
<style lang="less" scoped>
@import "~@/assets/less/mixin";
.city-wrapper {
  background-color: #f5f5f5;
  .search-wrapper {
    background-color: #fff;
    padding: 6px 12px;
    border-bottom: 1px solid #e4e4e4;
    border-top: 1px solid #e4e4e4;
    margin-top: 6px;
    .search-input {
      width: 100%;
      height: 30px;
      padding-left: 6px;
      border: 1px solid #e4e4e4;
      padding-right: 6px;
      font-size: 14px;
      border-radius: 3px;
    }
    .search-btn {
      width: 100%;
      height: 30px;
      line-height: 30px;
      background-color: @themeColor;
      color: #fff;
      font-size: 14px;
      margin-top: 6px;
    }
  }
  .history-title {
    padding: 2px 12px;
    color: 12px;
  }
  .history-wrapper {
    background-color: #fff;
    border-top: 1px solid #e4e4e4;
    .search-city-item {
      border-bottom: 1px solid #e4e4e4;
      height: 60px;
      padding: 12px;
      .title {
        font-size: 16px;
        .ellipsis();
      }
      .content {
        font-size: 12px;
        color: #999;
        margin-top: 8px;
        .ellipsis();
      }
    }
  }
}
</style>

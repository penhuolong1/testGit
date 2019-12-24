<template>
  <div>
    <head-top>
      <span slot='logo'>ele.me</span>
    </head-top>
    <div class="wrapper">
      <div class="city-wrapper">
        <h4>热门城市</h4>
        <div class="city-content">
          <div class="city-tiem hot"
               v-for="(item, index) in hotCityData"
               :key="index">
            <router-link :to="{name: 'city', params: {id: item.id}}">{{item.name}}</router-link>
          </div>
        </div>
      </div>
      <div class="group-city">
        <div class="city-wrapper"
             v-for="(item, index) in sortGroupCity"
             :key="index">
          <h4>{{index}}<span v-if="index == 'A'">(按字母顺序排序)</span></h4>
          <div class="city-content">
            <div class="city-tiem"
                 v-for="(city, index1) in item"
                 :key="index1">
              <router-link :to="{name: 'city', params: {id: city.id}}">{{city.name}}</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headTop from '@/components/header/header'
import { hotcity, groupcity } from '@/assets/js/api.js'
export default {
  components: {
    headTop
  },
  props: {},
  data () {
    return {
      hotCityData: [],
      groupCityData: {}
    }
  },
  watch: {},
  computed: {
    sortGroupCity () {
      let sortobj = {}
      for (let i = 65; i <= 90; i++) {
        if (this.groupCityData[String.fromCharCode(i)]) {
          sortobj[String.fromCharCode(i)] = this.groupCityData[String.fromCharCode(i)]
        }
      }
      return sortobj
    }
  },
  methods: {
    getHotCity () {
      hotcity().then(res => {
        if (res.status === 200) {
          this.hotCityData = res.data
          console.log(this.hotCityData)
        }
      })
    },
    getGroupcity () {
      groupcity().then(res => {
        if (res.status === 200) {
          this.groupCityData = res.data
        }
      })
    }
  },
  created () {
    this.getHotCity()
    this.getGroupcity()
  },
  mounted () {
  }
}
</script>
<style lang="less" scoped>
@import "~@/assets/less/mixin";
.wrapper {
  background-color: #f5f5f5;
  .city-wrapper {
    background-color: #fff;
    margin-bottom: 12px;
    h4 {
      font-size: 14px;
      border-top: 1px solid #e4e4e4;
      border-bottom: 1px solid #e4e4e4;
      color: #666;
      line-height: 30px;
      height: 30px;
      padding-left: 12px;
      span {
        color: #999;
        font-size: 12px;
        margin-left: 6px;
      }
    }
    .city-content {
      display: grid;
      grid-template-columns: repeat(4, 25%);
      .city-tiem {
        text-align: center;
        height: 40px;
        line-height: 40px;
        border-right: 1px solid #e4e4e4;
        border-bottom: 1px solid #e4e4e4;
        font-size: 13px;
        padding: 0 6px;
        color: #666;
        &.hot {
          color: @themeColor;
        }
        &.hot a {
          color: @themeColor;
        }
        &:nth-child(4n) {
          border-right: none;
        }
        a {
          width: 100%;
          height: 100%;
          display: block;
          .ellipsis();
        }
      }
    }
  }
}
</style>

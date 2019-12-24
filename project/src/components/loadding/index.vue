<template>
  <div class="loading-wrapper">
    <van-loading size="24px"
                 class="load-icon"
                 vertical>加载中...</van-loading>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created () { },
  mounted () { }
}
</script>
<style lang="less" scoped>
@import "~@/assets/less/mixin";
.loading-wrapper {
  position: fixed;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  background-color: black;
  opacity: 0.7;
  .load-icon {
    .center();
  }
}
</style>

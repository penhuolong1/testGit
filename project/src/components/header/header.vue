<template>
  <div class="header">
    <slot name="logo"></slot>
    <slot name="title"></slot>
    <svg-icon icon-class="user" />
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
.header {
  height: 45px;
  width: 100%;
  background-color: @themeColor;
  color: white;
  line-height: 45px;
  font-size: 16px;
  padding: 0 12px 0 12px;
}
</style>

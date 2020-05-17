<template>
  <el-tabs class="tab" v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="今天" name="today"></el-tab-pane>
    <el-tab-pane label="昨天" name="yesterday"></el-tab-pane>
    <el-tab-pane label="本周" name="week"></el-tab-pane>
    <el-tab-pane label="本月" name="month"></el-tab-pane>
    <el-tab-pane label="上月" name="lastmonth"></el-tab-pane>
    <!-- <el-tab-pane label="自定义" name="zdy"></el-tab-pane>
    <el-tab-pane label="高级" name="senior"></el-tab-pane> -->
  </el-tabs>
</template>

<script>
export default {
  name: 'HallTab',
  data () {
    return {
      activeName: 'today'
    }
  },
  created () {

  },
  computed: {},
  methods: {
    handleClick (tab, event) {
      console.log(tab.label)
      this.$emit('fun', tab.index)
    }
  }
}
</script>

<style scoped>
.tab{
  margin-top: 50px;
}
</style>

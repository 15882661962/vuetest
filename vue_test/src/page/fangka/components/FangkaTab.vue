<template>
  <el-tabs class="tab" v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="赠送房卡" name="today"></el-tab-pane>
    <el-tab-pane label="房卡记录" name="yesterday"></el-tab-pane>
    <el-tab-pane label="赠送记录" name="week"></el-tab-pane>
    <el-tab-pane label="充值记录" name="month"></el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: 'RechargeTab',
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
      console.log(tab, event)
    }
  }
}
</script>

<style scoped>

</style>

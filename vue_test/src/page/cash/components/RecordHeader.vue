<template>
  <div class="title">
    <div style="width:3.5rem;">ID</div>
    <div style="flex:1">玩家</div>
    <div style="width:3.5rem;">金额</div>
    <div style="flex:1">状态</div>
    <div style="flex:1">日期</div>
  </div>
</template>

<script>
export default {
  name: 'RecordHeader'
}
</script>

<style scoped>
.title {
  margin-top: 3rem;
  padding-top: .1rem;
  display: flex;
  border-bottom: solid 1px #ddd;
}
.title>div{
  font-size: .8rem;
  text-align: center;
  padding: .2rem;
}
.title>div:nth-child(odd){
  background-color: #fff;
}
</style>

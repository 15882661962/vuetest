<template>
  <div>
    <div class="title" v-for="(item,i) in records" :key="i">
      <div style="width:3.5rem;">{{item.FromId}}</div>
      <div style="flex:1">{{item.fromName}}</div>
      <div style="width:3.5rem;">{{item.Count}}</div>
      <div style="flex:1">{{item.Status}}</div>
      <div style="flex:1">
        <el-button-group>
          <el-button type="primary">同意</el-button>
          <el-button type="primary">驳回</el-button>
        </el-button-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CashList',
  props: {
    recordList: Array
  },
  data () {
    return {
      records: []
    }
  },
  mounted () {
    var _this = this
    for (var i = 0; i < _this.recordList.length; i++) {
      var list = _this.recordList[i]
      var status = ''
      switch (list.Status) {
        case 1:
          status = '待处理'
          break
        case 2:
          status = '已拒绝'
          break
        case 3:
          status = '已提现'
          break
      }
      var obj = {
        FromId: list.FromId,
        fromName: list.fromName,
        Count: list.Content.split('【')[1].split('】')[0] / 100,
        Status: status,
        CreateTime: list.CreateTime.split('.')[0].substr(5, 11).replace('T', ' ')
      }
      this.records.push(obj)
      console.log(this.records)
    }
  },
  created () {

  },
  computed: {},
  methods: {
  }
}
</script>

<style scoped>
.title {
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

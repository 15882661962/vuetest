<template>
  <div class="quick-entry base-entry" id="_index_item">
      <p>类目</p>
      <el-row class="index-content">
          <el-col :span="8" v-for="(item,i) in classList" :key="i">
            <div class="grid-content" v-on:click="func(item.name)">
              <i :class="item.icon"></i>
              <p>{{item.listItem}}</p>
            </div>
          </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  name: 'IndexClass',
  data () {
    return {
      classList: [
        {name: '/agent', listItem: '玩家', icon: 'el-icon-s-custom'},
        {name: '/fangka', listItem: '房卡', icon: 'el-icon-s-shop'},
        {name: '/notice', listItem: '编辑公告', icon: 'el-icon-bell'},
        {name: '/group', listItem: '公会', icon: 'el-icon-menu'},
        {name: '/cash', listItem: '提现审批', icon: 'el-icon-document-add'},
        {name: '/cashRecord', listItem: '提现记录', icon: 'el-icon-document-checked'},
        {name: '/rechargeRecord', listItem: '充值记录', icon: 'el-icon-s-marketing'},
        {name: '/gather', listItem: '汇总', icon: 'el-icon-set-up'},
        // {name: '/updateMobile', listItem: '绑定账号', icon: 'el-icon-mobile-phone'},
        {name: '/updatePassword', listItem: '修改密码', icon: 'el-icon-unlock'}
      ]
    }
  },
  created () {

  },
  computed: {},
  methods: {
    func (name) {
      // this.$router.push(`/index/${name}`)
      this.$router.push({path: name})
    }
  }
}
</script>

<style scoped>
#_index_item {
  margin-top: 1rem;
}
#_index_item > p {
  position: relative;
  margin: 0.8rem 0;
  padding: 0.3rem 0;
  text-indent: 1rem;
}
#_index_item > p:before {
  content: "";
  width: 0.4rem;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #0094ff;
}
#_index_item .index-content {
  background-color: #fff;
}
#_index_item .grid-content {
  text-align: center;
  border: solid 1px #eee;
}
#_index_item .grid-content i {
  padding: 10px;
  color: #18b4ed;
  font-size: 1.5rem;
}
#_index_item .grid-content p {
  font-size: .8rem;
}
</style>

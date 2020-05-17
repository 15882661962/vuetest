<template>
  <el-row :gutter="10">
      <el-col :span="24">
        <el-menu :default-active="this.$route.path" router class="el-menu-vertical-demo bottom">
          <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name" to class="bottom-menu">
            <i :class="item.icon"></i>
              <span>{{item.navItem}}</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
</template>

<script>
export default {
  name: 'BottomNav',
  data () {
    return {
      navList: [
        {name: '/indexRouter/index', navItem: '首页', icon: 'el-icon-s-home'},
        {name: '/hall', navItem: '游戏统计', icon: 'el-icon-pie-chart'},
        {name: '/recharge', navItem: '充值统计', icon: 'el-icon-sell'}
      ]
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

.bottom {
  background: #eee;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  border-top: solid 1px #ccc;
}

.bottom .bottom-menu {
  text-align: center;
  width: 33%;
}
.bottom .bottom-menu > i,
.bottom .bottom-menu > span {
  display: block;
  width: 100%;
  margin-top: 8px;
}
.bottom .bottom-menu > span {
  line-height: 20px;
  font-size: .8rem;
}
</style>

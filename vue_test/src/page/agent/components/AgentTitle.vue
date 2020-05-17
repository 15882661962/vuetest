<template>
  <div class="view-title">
      <span class="back-to" v-on:click="back"><i class="el-icon-arrow-left"></i>返回</span>
      <p class="">{{role}}</p>
      <el-dropdown @command="handleCommand" class="dropdown" trigger="click">
        <span class="el-dropdown-link">
          切换身份<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu  slot="dropdown">
          <div v-for="(item,i) in typeObj" :key="i">
            <el-dropdown-item :command=item.typeid>{{item.text}}</el-dropdown-item>
          </div>
        </el-dropdown-menu>
      </el-dropdown>
  </div>
</template>

<script>
import storage from '@/utils/storage.js'
import config from '@/utils/config.js'
export default {
  name: 'AgentTitle',
  props: {

  },
  data () {
    return {
      typeObj: [],
      role: '玩家'
    }
  },
  mounted () {

  },
  created () {
    this.initType()
  },
  computed: {},
  methods: {
    back () {
      this.$router.go(-1)
    },
    handleCommand (command) {
      this.typeId = command
      this.role = config.userTypeName[command]
    },
    initType () {
      var loginTypeid = storage.get('userInfo').TypeId
      var obj = {}
      for (let key in config.userTypeName) {
        if (loginTypeid > 11 && key <= loginTypeid) {
          continue
        }
        if (loginTypeid === 11 && key < loginTypeid) {
          continue
        }
        if (loginTypeid > 11 && key === 15) {
          continue
        }
        if (loginTypeid > 11 && key === 16) {
          continue
        }
        obj = {
          typeid: key,
          text: config.userTypeName[key]
        }
        this.typeObj.push(obj)
      }
    }
  }
}
</script>

<style scoped>
.view-title{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: #0094ff;
}
.view-title .back-to {
    padding-left: 1rem;
    padding-right: 2rem;
    top: 0;
    left: 0;
    display: inline-block;
    height: 40px;
    color: #fff;
    font-size: 1rem;
    position: absolute;
}
.view-title p{
  text-align: center;
  color: #fff;
  margin: 0;
}
.text-center {
    text-align: center;
}
.view-title .other-btn {
    padding-left: 2rem;
    padding-right: 3rem;
    top: 0;
    right: 0;
    height: 40px;
}
.dropdown{
  position: absolute;
  right: .8rem;
  top: 0;
}
.el-dropdown-link {
    cursor: pointer;
    color: #fff;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>

<template>
  <div class="search">
    <el-input
      class="input"
      placeholder="搜索"
      v-model="input"
      @change="search"
      clearable
      >
      <i slot="prefix" class="el-input__icon el-icon-search"></i>
    </el-input>
  </div>
</template>

<script>
export default {
  name: 'SearchInput',
  props: {
    players: Array
  },
  data () {
    return {
      input: ''
    }
  },
  created () {

  },
  computed: {},
  methods: {
    search () {
      console.log(this.input)
    }
  }
}
</script>

<style scoped>
.search{
  padding: .8rem;
}
</style>

<template>
  <div class="count">
    <div>当前房卡数：
      <span class="f-12">{{gold}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FangkaCount',
  props: {
    gold: Number
  },
  data () {
    return {

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
.count{
  background-color: #0094ff;
  height: 8rem;
  color: #fff;
  text-align: center;
  position: relative;
}
.count>div{
  position: absolute;
  top: 2rem;
  width: 100%;
}
.count span{
  font-size: 2.2rem;
  font-weight: bolder;
}
</style>

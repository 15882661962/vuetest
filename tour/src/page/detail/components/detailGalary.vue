<template>
  <div class="galary">
    <ly-tab v-model="selectedId" class="tabColor"
            :items="items"
            :options="options"
            @click="handleClick">
    </ly-tab>
    <div class="cate">
      <span>全部</span>
      <span>其他</span>
    </div>
    <component :is="type" :imgList="imgList"></component>
  </div>
</template>
<script>
  import galaryContent from './galaryContent'
  export default {
    name: 'detailGalary',
    props: {
      galaryList: Array,
      imgList: Array
    },
    data() {
      return {
        selectedId: 0,
        items: [
          { label: '首页' },
          { label: '推荐' },
          { label: 'Android' },
          { label: '前端' },
          { label: '后端' },
          { label: 'iOS' },
          { label: '产品' },
          { label: '人工智能' },
          { label: '设计' }
        ],
        options: {
          activeColor: '#0bc071'
        },
        type: 'galaryContent'
      }
    },
    components: {
      galaryContent,
    },
    methods: {
      handleClick(item, index) {
        this.$store.state.index = index;
      }
    },
    mounted() {
      this.loopGalaryList;
    },
    computed: {
      loopGalaryList() {
        for (let i = 0; i < this.galaryList.length; i++) {
          let item = { item: this.galaryList[i] }
          this.items.push(item);
        }
      }
    }</script>

<style lang="stylus" scoped>
  .galary
  position:absolute
  color:#fff
  top:.88rem
  left:0
  right:0
  bottom:0
  z-index:100
  background:#fff

  .galary > a
  color:#000

  .tabColor
  background:#fff
  border-color:#fff

  .cate
  background:#edf0f5
  color:#000
  line-height:.6rem

  .cate > span
  margin-left:.22rem
  font-size:.3rem

  .wrapper
  background:#fff

  .imgWrapper
  width:47%
  background:red
  margin:.12rem
  float:left

  .imgWrapper > img
  width:100%
</style>

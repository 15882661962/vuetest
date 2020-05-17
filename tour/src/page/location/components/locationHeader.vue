<template>
  <div>
    <div class="search">
      <span class="iconfont">&#xe641;</span>
      <input type="text" class="search-input" placeholder="请输入城市名" v-module="keyword" :class="[changeSearch]" />
      <button class="button" :class="changeButton" @click="buttonClear">取消</button>
      <span class="cancel" :class="changeSymbol" @click="xClear">x</span>
    </div>
    <div class="search-content" v-show="this.list.length" ref="contentWrapper">
      <ul>
        <li class="search-first">
          {{this.show}}
        </li>
        <li class="search-item" v-for="item of this.list" :key="item.id" @click="handleItemClick(item.name)">
          {{item.name}}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import { disreslove} from '../../../utils/utils.js'
  export default {
    name: 'locationHeader',
    props: {
      cities: Object
    },
    data() {
      return {
        show:'请输入城市名',
        list: [{
          id: '012341',
          name:'北京'
        }, {
            id: '012342',
            name: '上海'
          }, {
            id: '012343',
            name: '重庆'
          }, {
            id: '012344',
            name: '南京'
          }],
        keyword: '',
        changeSearch: '',
        changeButton: '',
        changeSymbol: '',
        flag: '1',
        iLetter: '',
        iWord:'',
      }
    },
    watch: {
      keyword() {
        let content = this.keyword.trim();
        this.addClass();
        if (content === '') {
          if (this.flag === '1') {
            this.removeBack();
          } else if (this.flag === '2') {
            this.keyword = '';
            this.removeBack();
          } else {
            this.keyword = '';
          }
        } else if (/^[0-9]+$/.test(content)) {
          this.showError();
        } else if (/^[a-zA-Z]+$/.test(content)) {
          this.searchAlph(content)
        } else if (/^[\u4e00-\u9fa5]+$/.test(content)) {
          let result = [];
          for (let i in this.cities) {
            let haveAlph = i.toLowerCase().indexOf(disreslove(content.substr(0, 1)).substr(0,1)) > -1;
            if (haveAlph) {
              this.cities[i].forEach((value) => {
                if (value.name.indexOf(content) > -1) {
                  result.push(value);
                  this.list = result;
                } else if (content.indexOf(value.name) > -1) {
                  this.show = '对不起，找不到' + this.keyword
                } else {
                  this.loopWord(content);
                  if (this.iWord.indexOf(content.substr(content.length - 1, 1)) > -1) {
                    this.show = '对不起，找不到' + this.keyword
                    this.iWord = '';
                  }
                }
              })
            } else if (lowerContent.substr(0, 1) === 'u' ||
              lowerContent.substr(0, 1) === 'i' ||
              lowerContent.substr(0, 1) === 'v' ||
              lowerContent.substr(0, 1) === 'o') {
              this.show = '对不起，找不到' + this.keyword;
              this.list = [''];
            }
          }
        } else {
          this.showError();
        }
      }
    },
    methods: {
      buttonClear() {
        this.keyword = ' ';
        this.flag = '2';
      },
      xClear() {
        this.keyword = ' ';
        this.flag='33'
      },
      addClass() {
        this.changeSearch = 'changeSearch';
        this.changeButton = 'changeButton';
        this.changeSymbol = 'changeSymbol';
      },
      removeClass() {
        this.changeSearch = '';
        this.changeButton = '';
        this.changeSymbol = '';
      },
      removeBack() {
        this.removeClass();
        this.list = []
        this.show = '请输入城市名'
      },
      showError() {
        this.list = [''];
        this.show = '对不起，找不到' + this.keyword
      },
      loopAlphabet(lowerContent) {
        const citiesWrapper = this.cities;
        for (let i in citiesWrapper) {
          let haveAlph = i.toLowerCase().indexOf(lowerContent.substr(0, 1)) > -1;
          if (haveAlph) {
            let arr = [];
            citiesWrapper[i].forEach((value) => {
              var error = value.spell.substr(lowerContent.length - 1, 1);
              arr.push(error)
              let a = [...new Set(arr)]
              this.iLetter = a.toString()
            })
          }
        }
      },
      loopWord(content) {
        const citiesWrapper = this.cities;
        for (let i in citiesWrapper) {
          let haveAlph = i.toLowerCase().indexOf(disreslove(content.substr(0, 1)).substr(0, 1)) > -1;
          if (haveAlph) {
            let arr = [];
            citiesWrapper[i].forEach((value) => {
              var error = value.name.substr(content.length - 1, 1);
              arr.push(error)
              let a = [...new Set(arr)]
              this.iWord = a.toString()
            })
          }
        }
      },
      searchAlph(content) {
        const lowerContent = content.toLowerCase();
        let result = [];
        for (let i in this.cities) {
          let haveAlph = i.toLowerCase().indexOf(lowerContent.substr(0, 1)) > -1;
          if (haveAlph) {
            this.cities[i].forEach((value) => {
              if (value.spell.indexOf(lowerContent) > -1) {
                result.push(value);
                this.list = result;
              } else if (lowerContent.indexOf(value.spell) > -1) {
                this.show = '对不起，找不到' + this.keyword
              } else {
                this.loopAlphabet(lowerContent);
                if (this.iLetter.indexOf(lowerContent.substr(lowerContent.length - 1, 1)) > -1) {
                  this.show = '对不起，找不到' + this.keyword
                  this.iLetter = '';
                }
              }
            })
          } else if (lowerContent.substr(0, 1) === 'u' ||
            lowerContent.substr(0, 1) === 'i' ||
            lowerContent.substr(0, 1) === 'v' ||
            lowerContent.substr(0, 1) === 'o') {
            this.show = '对不起，找不到' + this.keyword;
            this.list = [''];
          }
        }
      },
      handleItemClick() {
        this.$router.push('/')
      }
    },
    mounted() {
      this.scroll = new BScroll($this.$refs.contentWrapper,
        {
          click: true,
          mouseWheel: {
            speed: 20,
            invert: false,
            easeTime: 300
          }
        })
    },
}</script>

<style lang="stylus" scoped>
  .search
  position:relative
  background:#e0e4ec
  padding:.2rem
  height:.72rem

  .iconfont
  position:absolute
  color:#666
  top:4rem
  left:.4rem

  .search-input
  color:#666
  height:.72rem
  line-height:.72rem
  width:100%
  border-radius:.06rem
  text-align:left
  box-sizing:border-box
  padding-left:.6rem

  .changeSearch
  width:88%
  margin-right:.1rem

  .button
  display:none

  .changeButton
  display:block
  color:#888
  font-weight:bold
  position:absolute
  top:.29rem
  right:.22rem
  z-index:101
  font-size:.35rem
  text-align:center

  .cancel
  display:none

  .changeSymbol
  display:block
  position:absolute
  top:.32rem
  right:1.3rem
  color:#fff
  z-index:101
  background:#ccc
  padding:.12rem
  border-radius:.2rem

  .search-content
  overflow:hidden
  position:absolute
  z-index:101
  top:1.1rem
  left:0

</style>

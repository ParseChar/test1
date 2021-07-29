import {debounce} from "./utils";
import {POP, NEW, SELL} from "./const";


export const itemLisennerMixin={
  data(){
    return {
      itemImgListener:null,
    }
  },
  mounted() {
    const refresh=debounce(this.$refs.scroll.refresh)
    this.itemImgListener = ()=>{
      refresh()
    }
    this.$bus.$on('itemImageLoad',this.itemImgListener)
  },
};
export const backTopMixin= {
  data: function () {
    return {
      showBackTop: false
    }
  },
  methods: {
    backTop: function () {
      this.$refs.scroll.scrollTo(0, 0, 300);
    }
  }
}
export const tabControlMixin = {
  data: function () {
    return {
      currentType: POP
    }
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = POP
          break
        case 1:
          this.currentType = NEW
          break
        case 2:
          this.currentType = SELL
          break
      }
      console.log(this.currentType);

    }
  }
}

<template>
    <div class="main">
        <div class=navBar>
            <Header></Header>
        </div>
        <div id="mainPart">
            <div class="region1">
                <Region1></Region1>
            </div>
            <div class="region2">
                <Region2></Region2>
            </div>
            <div class="region3">
                <Region3></Region3>
            </div>
            <div class="region4">
                <Region4></Region4>
            </div>
            <div class="region5">
                <Region5></Region5>
            </div>
            <div class="region6">
                <Region6></Region6>
            </div>
            <div class="region7">
                <Region7></Region7>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    import Header from '../components/page1/Header.vue'
    import Region1 from '../components/page1/Region1.vue'
    import Region2 from '../components/page1/Region2.vue'
    import Region3 from '../components/page1/Region3.vue'
    import Region4 from '../components/page1/Region4.vue'
    import Region5 from '../components/page1/Region5.vue'
    import Region6 from '../components/page1/Region6.vue'
    import Region7 from '../components/page1/Region7.vue'
    import Msg from "../components/Msg";
    export default {
        components:{
            Header,
            Region1,
            Region2,
            Region3,
            Region4,
            Region5,
            Region6,
            Region7
        },
        data(){
          return{
              showIndex:1
          }
        },
        mounted:function(){
          var _this = this
          Msg.$on('val',function (m) {
              var el=document.getElementsByClassName(`region${m}`)[0];
              console.log(el.offsetTop);
              if(_this.showIndex==m){
                  _this.showIndex=null;
              }else{
                  _this.showIndex=m;
              }
              this.$nextTick(function () {
                  window.scrollTo({"behavior":"smooth","top":el.offsetTop});
              })
          })
        }
    }
</script>

<style type="text/css">
    .navBar{
        position:fixed;
        top:0;
        z-index:999;
    }

</style>

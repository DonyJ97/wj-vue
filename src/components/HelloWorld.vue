<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!--保护我方刘波-->
    <div>
      <input type="button" value="drop that shit" @click="move">
      <input type="button" value="cut that shit" @click="stop">
      <div  class="inner" v-bind:style="{ color: activecolor, fontsize: fonsize}"> {{msg1}}</div>
    </div>
    <div>
      <ul>
        <li>
          <a v-bind:href="url">here to sign</a>
        </li>
        <br>
        <br>
        <li>
          <div><input type="button" value="按扭" v-bind:title="mytitle" v-on:click="show"></div>
        </li>
        <br>
        <br>
        <li>
          <input type="button" value="Calculation" @click="calculates">
        </li>
        <br>
        <br>
        <li>
          <input type="button" value="CarManager" @click="Manage">
        </li>
      </ul>
      <div v-bind:class="{active : isActive}"
           style="width: 20px;height: 20px;text-align: center;line-height: 200px;">
      </div>
      <p v-html="showhtml"></p>
      <p>{{ message.split('').reverse().join('') }}</p>
    </div>
  </div>
</template>


<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '欢迎来到药酱的直播间',
      msg1: '保护！！保护！！保护！！保护！！保护！！保护！！保护！！保护！！',
      intervalId: null,
      activecolor: 'green',
      fontsize: '20px',
      isActive: false,
      showhtml: '<span style="color:blue">this is should be blue</span>',
      message: '123456789',
      url: 'http://localhost:8080/login',
    }
  },
  methods: {
    show: function () {
      alert('hello')
    },
    move () {
      if(this.intervalId != null) return
      this.intervalId = setInterval( () => {
        var start = this.msg1.substring(0, 1)
        var end = this.msg1.substring(1)
        this.msg1 = end + start
        },400)
    },
    stop(){
      clearInterval(this.intervalId)
      this.intervalId = null
    },
    calculates(){
      this.$router.replace({path: '/calculate'})
    },
    Manage(){
      this.$router.replace({path: '/CarManager'})
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.active{background: #FF0000;}
.inner{
  height: 100px;
  background-color: blanchedalmond;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

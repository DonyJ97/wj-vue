<template>
  <div>
    <h1 :class="classobj1">{{ tt }}</h1>
    <div>
      <input type="text" v-model="n1">
      <select v-model="opt">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input type="text" v-model="n2">

      <input type="button" value="=" @click="getResult">

      <input type="text" v-model="result">
    </div>
    <input type="button" value="返回主页" @click="back">
  </div>
</template>

<script>
export default {
  name: 'calculate',
  data(){
    return{
      tt: '简易计算器',
      n1: 0,
      n2: 0,
      result: 0,
      opt: '+',
      classobj1: {thin: true, cl: true}
    }
  },
  methods:{
    getResult(){
      switch (this.opt) {
        case '+': this.result = parseInt(this.n1) + parseInt(this.n2)
          break;
        case '-': this.result = parseInt(this.n1) - parseInt(this.n2)
          break;
        case '*': this.result = parseInt(this.n1) * parseInt(this.n2)
          break;
        case '/': this.result = parseInt(this.n1) / parseInt(this.n2)
          break;
      }
    },
    back(){
      this.$router.replace({path:'/'})
    }
  }
}
</script>

<style scoped>
  .cl{
    height: 50px;
    background-color: #5c52ff;
  }
  .thin{
    font-weight: 600;
  }

</style>

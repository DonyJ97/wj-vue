<template>
  <div>
    <input type="text" v-model="num">
    <table border="1">
      <tr v-for="i in parseInt(num)">
        <td v-for="j in i">{{j}}*{{i}}={{i*j}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'CarManager',
  data(){
    return {
      msg: '123456',
      num: 9,
      list1: [
        {id : '1', user:'djq',content: '123456'},
        { id : '2', user:'lsy',content: '654211'},
        { id : '3', user:'fh',content: '15455'}
      ]
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>

<template>
<div>
  <nav-menu></nav-menu>
  <router-view/>
</div>
</template>

<script>
import NavMenu from './common/NavMenu'
import SideMenu from './library/SideMenu'
export default {
  name: 'Home',
  components: {SideMenu,  NavMenu}
}
</script>

<style scoped>

</style>

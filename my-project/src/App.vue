<template>
    <div class="back">
  <the-header></the-header>
  <router-view></router-view>
    <select-mode></select-mode>
    </div>
</template>

<script>
import TheHeader from './components/layouts/The-Header.vue';
import SelectMode from "./components/pomorodo/SelectMode.vue";

export default {
  name: 'App',
  components: {
      SelectMode,
      TheHeader,
  }
}
</script>

<style>
body{
    margin: 0px;
    padding: 0px;
    background: linear-gradient(#726BD6, #8c80f5);

}

li{
    list-style:none;
}
/* baseに記述 */
a{
    text-decoration: none;
    color:#fff;
}

p{
    margin: 0px ;
}


</style>

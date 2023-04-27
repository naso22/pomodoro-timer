<template>
  <the-header></the-header>
  <timer-view></timer-view>
</template>

<script>
import TimerView from './components/pomorodo/TimerView.vue';
import TheHeader from './components/layouts/The-Header.vue';

export default {
  name: 'App',
  components: {
      TheHeader,
      TimerView
  }
}
</script>

<style>
body{
    background: linear-gradient(#726BD6, #8c80f5);
}

body{
    margin: 0px;
    padding: 0px;

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

<template>
    <the-header></the-header>
   <timer-view></timer-view>
</template>
<script>
import TheHeader from './components/layouts/The-Header.vue';
import TimerView from "./components/pomorodo/TimerView.vue";
export default {
    name: 'App',
    components: {
        TimerView,
        TheHeader,
    },

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

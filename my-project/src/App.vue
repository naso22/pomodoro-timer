<template>
  <the-header></the-header>
  <router-view></router-view>
    <time-control  @child-event="startTimer()"></time-control>
    <select-mode></select-mode>
</template>
<script>
import TheHeader from './components/layouts/The-Header.vue';
import SelectMode from "./components/pomorodo/SelectMode.vue";
import TimeControl from "./components/pomorodo/TimeControl.vue";

export default {
  name: 'App',
  components: {
      TimeControl,
      SelectMode,
      TheHeader,
  },
    data(){
        return{
            timeElapsed:0,
            timerInterval: undefined,
            timeLimit:100,
        }
    },
    methods:{
        startTimer() {
            this.timerInterval = setInterval(() => {
                // Stop counting when there is no more time left
                if (++this.timeElapsed === this.timeLimit) {
                    clearInterval(this.timerInterval);
                }
            }, 1000);

        },
    },

    provide() {
        return{
        limit:this.timeLimit,
        elapsed:this.timeElapsed
    }
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

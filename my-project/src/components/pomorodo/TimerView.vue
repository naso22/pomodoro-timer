<template>
<the-time :elapsed="timeElapsed" :limit="timeLimit"></the-time>
  <select-mode ></select-mode>
</template>

<script>
import TheTime from './TheTime.vue';
import SelectMode  from './SelectMode.vue'
export default {
    components:{
        TheTime,
        SelectMode
    },

    data(){
        return{
            timeElapsed:0,
            timerInterval: undefined,
            timeLimit: 10,
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
    mounted() {
        this.startTimer();
    },

}
</script>
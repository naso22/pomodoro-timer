<template>
    <the-time :elapsed="timeElapsed" :limit="timeLimit" ></the-time>
    <time-control @child-event="startTimer" :isplaying="isPlaying"></time-control>
</template>

<script>
import TheTime from './TheTime.vue';
import TimeControl from "./TimeControl.vue";

export default {
    components: {
        TimeControl,
        TheTime,
    },
    data() {
        return {
            timeElapsed: 0,
            timerInterval: undefined,
            timeLimit: 3,
            breakElapsed: 0,
            breakInterval: undefined,
            breakLimit: 10,
            isPlaying: false,

        }
    },
    methods: {
        startTimer(isPlaying) {
            this.isPlaying = isPlaying;
            clearInterval(this.timerInterval);
            this.timerInterval = setInterval(() => {
                    if (isPlaying) {
                    // Stop counting when there is no more time left
                    if (++this.timeElapsed === this.timeLimit) {
                        setTimeout(() => {
                            clearInterval(this.timerInterval);
                            this.breakstart()
                            this.isPlaying = false;
                        }, 1000);
                    }
                }
            }, 1000);
        },

        breakstart() {
            this.breakInterval = setInterval(() => {
                    // Stop counting when there is no more time left
                    if (++this.breakElapsed === this.breakLimit) {
                        setTimeout(() => {
                            clearInterval(this.breakInterval);
                            this.breakstart()
                            this.isPlaying = false;
                        }, 1000);
                    }
            }, 1000);
        },

    },


}
</script>
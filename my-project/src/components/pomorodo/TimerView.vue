<template>
    <the-time :elapsed="timeElapsed" :limit="timeLimit"></the-time>
    <time-control @child-event="startTimer"></time-control>
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
            timeLimit: 1250,
            breakeLimit: 300,
        }
    },
    methods: {
        startTimer(isPlaying) {
            clearInterval(this.timerInterval);
            this.timerInterval = setInterval(() => {
                if (isPlaying) {
                    // Stop counting when there is no more time left
                    if (++this.timeElapsed === this.timeLimit) {
                        clearInterval(this.timerInterval);
                        breakstart()
                    }
                }
            }, 1000);
        },

        breakstart() {
                clearInterval(this.timerInterval);
                this.timerInterval = setInterval(() => {
                    if (isPlaying) {
                        // Stop counting when there is no more time left
                        if (++this.timeElapsed === this.timeLimit) {
                            clearInterval(this.timerInterval);
                            breakstart()
                        }
                    }
                }, 1000);
        }

    },


}
</script>
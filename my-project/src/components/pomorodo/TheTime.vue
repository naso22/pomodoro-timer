<template>
    <div class="time">
        <div class="circle">
            <p>{{formatTime}}</p>
        </div>
    </div>
    <time-control @start="startTimer()"></time-control>
</template>

<script>
import TimeControl from "./TimeControl.vue";
export default {
    components:{
        TimeControl
    },
    data() {
        return {
            endTime: new Date().getTime() + 60 * 60000, // 1分後を指定
            timeDiff: 0,
            timer: null
        };
    },
    computed: {
        formatTime() {
            let minutes = Math.floor(this.timeDiff / (60 * 1000));
            let seconds = Math.floor((this.timeDiff % (60 * 1000)) / 1000);
            return `${minutes < 10 ? "0" + minutes : minutes}:
            ${seconds < 10 ? "0" + seconds : seconds}`;
        }
    },
    methods: {
        startTimer() {
            if (this.timer !== null) {
                clearInterval(this.timer);
            }
            this.timer = setInterval(() => {
                this.timeDiff = this.endTime - new Date().getTime();
                if (this.timeDiff <= 0) {
                    clearInterval(this.timer);
                    this.timeDiff = 0;
                }
            }, 1000);
        },

    }
};
</script>

<style scoped>
.circle {
    width: 150px;
    height: 150px;
    padding: 5rem;
    border-radius: 50%;
    background-color: transparent;
    border: 0.1rem solid #ffffff;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

.circle p {
    color: white;
    font-weight: inherit;
    font-size: 2.5rem;
    letter-spacing: 0.2rem;
    text-align: center;
    line-height: 140px; /* 円の高さ - paddingの合計値 */
}
</style>
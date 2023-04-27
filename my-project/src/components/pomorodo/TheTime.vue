<template>
    <div class="time">
        <div class="circle">
            <p>{{time}}</p>
        </div>
    </div>
    <time-control @start="modalSelect"></time-control>
</template>

<script>
import TimeControl from "./TimeControl.vue";
export default {
components:{
    TimeControl
},
    data() {
        return {
            time: "00:00",
            timer: null
        };
    },
    methods: {
        startTimer() {
            if (this.timer !== null) {
                clearInterval(this.timer);
            }
            let seconds = 0;
            this.timer = setInterval(() => {
                seconds++;
                let minutes = Math.floor(seconds / 60);
                let sec = seconds % 60;
                this.time = `${minutes < 10 ? "0" + minutes : minutes}:${
                    sec < 10 ? "0" + sec : sec
                }`;
            }, 1000);
        }
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
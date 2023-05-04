<template>
    <div class="root">
        <svg class="svg"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg">
            <g class="circle">
                <path class="time-left-path" d="M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0" :style="{ strokeDasharray }"></path>
            </g>
        </svg>
        <div class="time-left-container">
            <span class="time-left-label">{{ timeLeftString }}</span>
        </div>
    </div>
</template>

<script>
export default {
    components:{
    },
    data() {
        return {
            //endTime: new Date().getTime() + 600 * 60000, // 1分後を指定
            timeDiff: 0,
            timer: null,
        };
    },
    methods: {
        padToTwo(num) {
            // e.g. 4 -> '04'
            return String(num).padStart(2, '0');
        },

        //Change(timeElapsed, timeLimit) {
            //this.limit = timeElapsed
            //this.elapsed = timeLimit

        //}
    },
    computed: {
        // e.g. timeLeft of 100 -> '01:40'
        timeLeftString() {
            const timeLeft = this.timeLeft;
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            return `${this.padToTwo(minutes)}:${this.padToTwo(seconds)}`;
        },
        timeLeft() {
            return this.limit - this.elapsed;
        },

        strokeDasharray() {
            const radius = 45;
            const totalLength = 2 * Math.PI * radius;
            const timeFraction = this.timeLeft / this.limit;
            const elapsedDash = Math.floor(timeFraction * totalLength);
            return `${elapsedDash} ${totalLength}`;
        },
    },
    // Register props to be set from App.vue
    props: ['elapsed','limit']

};
</script>

<style scoped>

.root {
    margin: 0 auto;
    height: 55vh;
    width: 55vh;
    position: relative;
}

/* Removes SVG styling that would hide the time label */
.circle {
    fill: none;
    stroke: none;
}

/* The SVG path that displays the timer's progress */
.time-elapsed-path {
    stroke-width: 7px;
    stroke: rgba(28, 108, 225, 0);
}

.time-left-container {
    /* Size should be the same as that of parent container */
    height: inherit;
    width: inherit;

    /* Place container on top of circle ring */
    position: absolute;
    top: 0;

    /* Center content (label) vertically and horizontally  */
    display: flex;
    align-items: center;
    justify-content: center;
}

.time-left-label {
    font-size:5rem ;
    font-family: 'Segoe UI';
    color: white;
    letter-spacing: 0.3rem;
}

.time-left-path {
    /* Same thickness as the original ring */
    stroke-width: 0.7px;
    /* Rounds the path endings  */
    stroke-linecap: round;
    /* Makes sure the animation starts at the top of the circle */
    transform: rotate(90deg);
    transform-origin: center;
    /* One second aligns with the speed of the countdown timer */
    transition: 1s linear all;
    /* Colors the ring */
    stroke: white;
}


</style>
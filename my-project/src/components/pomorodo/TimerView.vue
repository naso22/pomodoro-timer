<template>
    <timer-status :status="Status"></timer-status>
    <the-time :elapsed="timeElapsed"
              :limit="timeLimit"></the-time>
    <div>{{ roundCounter }}/ {{ quarterRounds }} rounds</div>
    <time-control @child-event="startStopTimer"
                  @skip-event="skipTimer()"
                  :isplaying="isPlaying"
                  @setup-data="setTimerLimits"></time-control>
</template>

<script>
import TheTime from './TheTime.vue';
import TimeControl from "./TimeControl.vue";
import TimerStatus from "./TimerStatus.vue";

export default {
    components: {
        TimerStatus,
        TimeControl,
        TheTime,
    },
    data() {
        return {
            //（集中タイム）経過時間・タイマーの間隔・初期秒数設定・秒数設定
            timeElapsed: 0,
            timerInterval: undefined,
            timeLimit: null,
            FixedLimit: null,

            //（休憩時間）経過時間・タイマーの間隔・秒数設定
            breakLimit: null,
            longbreak: 1000,
            //ストップ・スタートの切り替え
            isPlaying: false,

            roundCount: 2,
            quarterRounds: 3,

            /*集中・休憩判定*/
            Status: 'FocusTime',
        }
    },
    watch: {
        roundCount(newCount) {
            if (newCount % 2 === 0) {
                this.timeLimit = this.FixedLimit
                this.Status = 'FocusTime';
                this.$emit('change-back', this.Status)
                this.startStopTimer()
            } else if (newCount % 2 === 1) {
                this.timeLimit = this.breakLimit
                this.Status = 'Break Time';
                this.$emit('change-back', this.Status)
                this.startStopTimer()
            }

            if (newCount === this.quarterRounds * 2 + 1) {
                this.timeLimit = this.longbreak
                this.Status = 'Long break';
                this.$emit('change-back', this.Status)
                this.startStopTimer()
            }

            if (newCount === this.quarterRounds * 2 + 2) {
                this.roundCount = 2;
                this.$emit('change-back', this.Status)
                console.log(this.count)
            }
        },
    },
    computed: {
        roundCounter() {
            return Math.floor(this.roundCount / 2);
        }
    },
    methods: {

        setTimerLimits(data) {
            this.timeLimit = Number(data.timeLimit) * 60;
            this.FixedLimit = Number(data.FixedLimit) * 60;
            this.breakLimit = Number(data.breakLimit) * 60
            this.longbreak = Number(data.longbreak) * 60;
            this.quarterRounds = Number(data.quarterRounds);
            this.timeElapsed = 0;
        },

        startStopTimer(isPlaying) {
            clearInterval(this.timerInterval);
            this.isPlaying = isPlaying;
            this.startTimer(true)
        },

        startTimer() {
            this.timerInterval = setInterval(() => {
                if (this.isPlaying) {
                    console.log(this.timeElapsed, this.timeLimit);
                    if (++this.timeElapsed === this.timeLimit) {
                        setTimeout(() => {
                            clearInterval(this.timerInterval);
                            this.timeElapsed = 0
                            this.roundCount = +1
                            this.startStopTimer()
                            this.isPlaying = false;
                        }, 1000);
                    }
                }
            }, 1000);
        },

        skipTimer() {
            this.timeElapsed = 0;
            this.roundCount = this.roundCount + 1
            this.startStopTimer()
        }
    },


}
</script>

<style scoped>
div {
    text-align: center;
    color: white;
    font-size: 1.3rem;
    margin: 5px;
}
</style>
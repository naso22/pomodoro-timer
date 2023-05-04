<template>
    <timer-status :status="Status"></timer-status>
    <the-time :elapsed="timeElapsed"
              :limit="timeLimit"></the-time>
    <time-control @child-event="setTimer"
                  @skip-event="skipTimer()"
                  :isplaying="isPlaying"
                  @setup-data="setUpTimer"></time-control>
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
            timeLimit:null,
            FixedLimit:null,

            //（休憩時間）経過時間・タイマーの間隔・秒数設定
            breakLimit: null,
            longbreak:null,
            //ストップ・スタートの切り替え
            isPlaying: false,

            count: 0,

            /*集中・休憩判定*/
            Status: false,
        }
    },
    methods: {
        setUpTimer(data){
            this.timeLimit =Number(data.timeLimit)*60;
            this.FixedLimit = Number(data.FixedLimit)*60;
            this.breakLimit = Number(data.breakLimit)*60
            this.longbreak = Number(data.longbreak)*60

        },
        setTimer(isPlaying) {
            clearInterval(this.timerInterval);
            this.isPlaying = isPlaying;
                if (this.count % 2 === 0) {
                this.timeLimit = this.FixedLimit
                this.Status = false;
                this.startTimer()
                console.log('start')

            } else {
                this.timeLimit =this.breakLimit
                this.Status = true;
                this.startTimer()
                console.log('break')
            }
        },
        //スタート・ストップボタンを押した時
        startTimer() {
            //1秒ごと実行
            this.timerInterval = setInterval(() => {
                if (this.isPlaying) {
                    console.log(this.timeElapsed,this.timeLimit);
                    // 残り時間がなくなったらカウントを止める
                    if (++this.timeElapsed === this.timeLimit) {
                        setTimeout(() => {
                            //カウント終わり
                            clearInterval(this.timerInterval);
                            this.timeElapsed = 0
                            this.count = this.count + 1
                            //休憩時間の実行
                            this.setTimer()
                            //スタートボタンに切り替え
                            this.isPlaying = false;
                        }, 1000);
                    }
                }
            }, 1000);
        },
        skipTimer() {
            this.count = this.count + 1;
            this.timeElapsed = 0;
            this.setTimer()
        }
    },


}
</script>
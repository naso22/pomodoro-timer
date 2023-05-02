<template>
    <timer-status :status="Status"></timer-status>
    <the-time :elapsed="timeElapsed" :limit="timeLimit"></the-time>
    <time-control @child-event="startTimer" :isplaying="isPlaying"></time-control>
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
            timeLimit: 10,
            FixedLimit: 10,

            //（休憩時間）経過時間・タイマーの間隔・秒数設定
            breakLimit: 5,

            //ストップ・スタートの切り替え
            isPlaying: false,

            count: 0,

            /*集中・休憩判定*/
            Status:false

        }
    },
    methods: {
        //スタート・ストップボタンを押した時
        startTimer(isPlaying) {
            this.isPlaying = isPlaying;
            clearInterval(this.timerInterval);
            //1秒ごと実行
            this.timerInterval = setInterval(() => {
                if (isPlaying) {
                    // 残り時間がなくなったらカウントを止める
                    if (++this.timeElapsed === this.timeLimit) {
                        setTimeout(() => {
                            //カウント終わり
                            clearInterval(this.timerInterval);
                            this.timeElapsed = 0
                            this.timerInterval = undefined
                            this.count = this.count + 1
                            //休憩時間の実行
                            this.startBreakTimer()
                            //スタートボタンに切り替え
                            this.isPlaying = false;
                        }, 1000);
                    }
                }
            }, 1000);
        },
        startBreakTimer() {
            if (this.count % 2 === 0) {
                this.timeLimit = this.FixedLimit
                console.log('フォーカスタイム始まり')

            } else {
                this.timeLimit = this.breakLimit
                console.log('フォーカスタイム終了')
            }

            this.Status=!this.Status;
        },
    },


}
</script>
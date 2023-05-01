<template>
    <the-time :elapsed="timeElapsed" :limit="timeLimit"></the-time>
    <time-control @child-event="breakstart" :isplaying="isPlaying"></time-control>
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
            //（集中タイム）経過時間・タイマーの間隔・秒数設定
            timeElapsed: 0,
            timerInterval: undefined,
            timeLimit:10,
            FixedLimit:10,

            //（休憩時間）経過時間・タイマーの間隔・秒数設定
            breakElapsed: 0,
            breakInterval: undefined,
            breakLimit: 5,

            //ストップ・スタートの切り替え
            isPlaying: false,

            count : 0

        }
    },
    methods: {
        breakstart() {
            if (this.count % 2 === 0) {
                this.timeElapsed = 0
                this.timerInterval= undefined
                this.timeLimit = this.FixedLimit
                console.log('フォーカスタイム始まり')
                this.startTimer(true)

            } else {
                this.timeElapsed = 0
                this.timerInterval = undefined
                this.timeLimit = this.breakLimit
                console.log('フォーカスタイム終了')
                this.startTimer(true)
            }
        },

        //スタート・ストップボタンを押した時
        startTimer(isPlaying) {
            this.count=this.count+1
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
                            //休憩時間の実行
                            
                            //スタートボタンに切り替え
                            this.isPlaying = false;
                        }, 1000);
                    }
                }
            }, 1000);
        },
    },


}
</script>
<template>
    <the-time :elapsed="timeElapsed" :limit="timeLimit"></the-time>
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
            //（集中タイム）経過時間・タイマーの間隔・秒数設定
            timeElapsed: 0,
            timerInterval: undefined,
            timeLimit: 3,

            //（休憩時間）経過時間・タイマーの間隔・秒数設定
            breakElapsed: 0,
            breakInterval: undefined,
            breakLimit: 10,

            //ストップ・スタートの切り替え
            isPlaying: false,

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
                            //休憩時間の実行
                            this.breakstart()
                            //スタートボタンに切り替え
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
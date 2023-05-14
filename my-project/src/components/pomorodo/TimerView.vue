<template>
    <timer-status :status="Status"></timer-status>
    <the-time :elapsed="timeElapsed"
              :limit="timeLimit"></the-time>
    <div>{{ rounds }}/ {{quarterRounds}} rounds</div>
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
            longbreak:1000,
            //ストップ・スタートの切り替え
            isPlaying: false,

            count: 2,
            quarterRounds:3,

            /*集中・休憩判定*/
            Status: 'FocusTime',
        }
    },
    watch: {
        count(newCount) {
            if (newCount % 2 === 0) {
                this.timeLimit = this.FixedLimit
                this.Status = 'FocusTime';
                this.$emit('change-back',this.Status)
            } else if (newCount % 2 === 1) {
                this.timeLimit = this.breakLimit
                this.Status = 'Break Time';
                this.$emit('change-back',this.Status)
            }

            if (newCount === this.quarterRounds*2+1){
                this.timeLimit = this.longbreak
                this.Status = 'Long break';
                this.$emit('change-back',this.Status)
            }

            if (newCount === this.quarterRounds*2+2){
                this.count=2;
                this.$emit('change-back',this.Status)
                console.log(this.count)
            }
        },
    },
    computed: {
        rounds() {
            return Math.floor(this.count / 2);
        }
    },
    methods: {
        /*モーダルからの時間データ*/
        setUpTimer(data){
            this.timeLimit =Number(data.timeLimit)*60;
            this.FixedLimit = Number(data.FixedLimit)*60;
            this.breakLimit = Number(data.breakLimit)*60
            this.longbreak = Number(data.longbreak)*60;
            this.quarterRounds=Number(data.quarterRounds);
            this.timeElapsed =0;
        },

       /* 集中タイム・休憩タイムの切り替え・ストップ処理*/
        setTimer(isPlaying) {
            clearInterval(this.timerInterval);
            this.isPlaying = isPlaying;
                if (this.count % 2 === 0) {
                this.startTimer()
                this.$emit('change-back',this.Status)
                console.log('start')

            } else {
                this.startTimer()
                this.$emit('change-back',this.Status)
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
                            //休憩時間の実行
                            this.count= +1
                            this.setTimer()
                            //スタートボタンに切り替え
                            this.isPlaying = false;
                        }, 1000);
                    }
                }
            }, 1000);
        },
        /*強制タイム切り替え*/
        skipTimer() {
            this.timeElapsed = 0;
            this.count=this.count +1
            this.setTimer()
            console.log(this.count)
        }
    },


}
</script>

<style scoped>
div{
    text-align: center;
    color: white;
    font-size: 1.3rem;
    margin: 5px;
}
</style>
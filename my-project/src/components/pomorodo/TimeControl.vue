<template>
    <div class="time">
        <!--時間設定ボタン-->
        <div class="controll">
            <button>
                <svg-icon
                        class="settingicon"
                        type="mdi"
                        :path="mdiTune">
                </svg-icon>
            </button>
        </div>
        <button class="controll">
            <!--スタート・ストップボタン-->
            <div v-if="isplaying" @click="eventbutton()">
                <!--"isplaying"が trueの時ストップボタンを表示-->
                <svg-icon
                        class="settingicon__center"
                        type="mdi"
                        :path="mdiStop">
                </svg-icon>
            </div>
            <!--"isplaying"が falseの時スタートボタンを表示-->
            <div v-else @click="eventbutton()">
                <svg-icon
                        class="settingicon__center"
                        type="mdi"
                        :path="mdiPlayOutline">
                </svg-icon>
            </div>
        </button>
        <!--スキップボタン-->
        <button class="controll" @click="skipbutton()">
            <svg-icon
                    class="settingicon"
                    type="mdi"
                    :path="mdiSkipNext">
            </svg-icon>
        </button>
    </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import {mdiPlayOutline, mdiTune, mdiSkipNext, mdiStop} from '@mdi/js';

export default {
    components: {
        SvgIcon
    },
    props: ['isplaying'],
    data() {
        return {
            path: [
                mdiPlayOutline,
                mdiTune,
                mdiSkipNext,
                mdiStop
            ],
            mdiTune: mdiTune,
            mdiPlayOutline: mdiPlayOutline,
            mdiSkipNext: mdiSkipNext,
            mdiStop: mdiStop,
            isPlaying: false
        }
    },
    methods: {
        /*スタート・ストップボタン切り替え*/
        eventbutton() {
            this.isPlaying = !this.isplaying;
            this.$emit('child-event', this.isPlaying);
        },

        skipbutton(){
            this.$emit('skip-event');
        }
    },

};

</script>

<style scoped>
.time {
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.controll {
    margin: 90px;
}


div {
    color: white;
    font-weight: inherit;
    font-size: 2rem;
    text-align: center;
}

div :hover {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.58);

}

.settingicon {
    width: 2rem;
    height: 2rem;
}

.settingicon__center {
    width: 3rem;
    height: 3rem;;
}

</style>



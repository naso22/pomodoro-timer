<template>
    <div class="time">
        <!--時間設定ボタン-->
        <div>
            <button @click="toggleModal()" class="circle">
                <svg-icon
                        class="settingicon"
                        type="mdi"
                        :path="mdiTune">
                </svg-icon>
            </button>
        </div>
        <!--スタート・ストップボタン-->
        <button v-if="isplaying" @click="eventbutton()">
            <!--"isplaying"が trueの時ストップボタンを表示-->
            <svg-icon
                    class="settingicon__center"
                    type="mdi"
                    :path="mdiStop">
            </svg-icon>
        </button>
        <!--"isplaying"が falseの時スタートボタンを表示-->
        <button v-else @click="eventbutton()" class="circle">
            <svg-icon
                    class="settingicon__center"
                    type="mdi"
                    :path="mdiPlayOutline">
            </svg-icon>
        </button>
        <!--スキップボタン-->
        <button class="circle" @click="skipbutton()" @setup-data="sendData()">
            <svg-icon
                    class="settingicon"
                    type="mdi"
                    :path="mdiSkipNext">
            </svg-icon>
        </button>
    </div>
  <!--    モーダル-->
    <action-modal
            @close="toggleModal"
            v-show="isShowingAdjustments"
            @setup-data="sendData">
        <h3>setting menu</h3>
    </action-modal>
</template>

<script>
import ActionModal from "./ActionModal.vue";
import SvgIcon from '@jamescoyle/vue-icon';
import {mdiPlayOutline, mdiTune, mdiSkipNext, mdiStop} from '@mdi/js';

export default {
    components: {
        SvgIcon,
        ActionModal
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
            isPlaying: false,
            isShowingAdjustments: false
        }
    },
    methods: {
        /*スタート・ストップボタン切り替え*/
        eventbutton() {
            this.isPlaying = !this.isplaying;
            this.$emit('child-event', this.isPlaying);
        },

        skipbutton() {
            this.$emit('skip-event');
        },

        toggleModal() {
            this.isShowingAdjustments = !this.isShowingAdjustments
        },

        sendData(data) {
            this.$emit('setup-data', data)
        }

    },

};

</script>

<style scoped>
.time {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25vh;
}


div {
    color: white;
    font-weight: inherit;
    font-size: 2rem;
    text-align: center;
}

button {
    margin: 50px;
}


.settingicon {
    width: 2rem;
    height: 2rem;
}

.settingicon__center:hover {
    color: rgba(255, 255, 255, 0.53);
}

.settingicon:hover {
    color: rgba(255, 255, 255, 0.53);
}


.settingicon__center {
    width: 4rem;
    height: 4rem;;
}


</style>



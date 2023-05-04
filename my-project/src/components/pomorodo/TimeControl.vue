<template>
    <div class="time">
        <!--時間設定ボタン-->
        <div class="controll">
            <button @click="toggleModal()">
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
        <button class="controll" @click="skipbutton()" @setup-data="sendData()">
            <svg-icon
                    class="settingicon"
                    type="mdi"
                    :path="mdiSkipNext">
            </svg-icon>
        </button>
    </div>
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
            isShowingAdjustments:false
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

        sendData(data){
            this.$emit('setup-data',data)
        }

    },

};

</script>

<style scoped>
.time {
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.controll {
    margin: 50px;
}


div {
    color: white;
    font-weight: inherit;
    font-size: 2rem;
    text-align: center;
}

button :hover {
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



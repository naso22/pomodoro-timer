<template>
        <div class="time">
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
                <div @click="eventbutton()">
                    <svg-icon
                   class="settingicon"
                     type="mdi"
                     :path="mdiPlayOutline">
                      mdi-play-outline
                    </svg-icon>
                </div>
            </button>
            <button class="controll">
                <svg-icon
                        class="settingicon"
                        type="mdi"
                        :path="mdiSkipNext">
                    mdi-play-outline
                </svg-icon>
        </button>
        </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiPlayOutline,mdiTune,mdiSkipNext } from '@mdi/js';

export default {
    components: {
        SvgIcon
    },
    data() {
        return {
            path:[
            mdiPlayOutline,
            mdiTune,
            mdiSkipNext
            ],
            mdiTune: mdiTune,
            mdiPlayOutline:mdiPlayOutline,
            mdiSkipNext: mdiSkipNext
        }
    },
    methods: {
        eventbutton() {
            this.$emit('child-event');
        },
    }

};

</script>

<style scoped>
.time {
    height:  200px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.controll {
   width: 20vh;
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

.settingicon{
    width: 2.5rem;
    height: 2.5rem;
}
</style>



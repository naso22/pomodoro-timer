<template>
        <div class="time">
            <div class="controll">
                <button>
                    <svg-icon
                            class=""
                            type="mdi"
                            :path="path">
                    </svg-icon>
                </button>
            </div>
            <button class="controll">
                <div @click="eventbutton()">▶</div>
            </button>
            <button class="controll">
            <div>
               next
            </div>
        </button>
        </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiTune } from '@mdi/js';


export default {
    components: {
        SvgIcon
    },
    data() {
        return {
            path: mdiTune,
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
    display: flex;
    align-items: center;
    justify-content: space-between;
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
</style>


<script setup>
</script>
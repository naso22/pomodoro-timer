<template>
    <div :class="timerClass">
        <the-header></the-header>
        <timer-view @change-back="changeBack"></timer-view>
    </div>
</template>

<script>
import TheHeader from './components/layouts/The-Header.vue';
import TimerView from "./components/pomorodo/TimerView.vue";

export default {
    name: 'App',
    components: {
        TimerView,
        TheHeader,
    },
    data() {
        return {
            timerClass: 'timer-background-false',
        };
    },
    methods: {
        changeBack(value) {
            if (value === 'Break Time') {
                this.timerClass = 'timer-background';
            } else if (value === 'FocusTime'){
                this.timerClass = 'timer-background-false';
            }else{
                this.timerClass = 'longtimer-backgraund';
            }
        },
    },
};
</script>

<style scoped>
/*集中背景色*/
.timer-background-false {
    background: linear-gradient(#9d97f1, #8c80f5);
}

/*休憩背景色*/
.timer-background {
    background: linear-gradient(#a9a6d2, #978def);
}

.longtimer-backgraund{
    background: linear-gradient(#b4b3b3, #87e7b4);
}
</style>
<template>
    <div :class="timerClass">
        <the-header></the-header>
        <timer-view @change-back="changePageColor"></timer-view>
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
            timerClass: 'forcus-background',
        };
    },
    methods: {
        changePageColor(value) {
            if (value === 'Break Time') {
                this.timerClass = 'timer-background';
            } else if (value === 'FocusTime'){
                this.timerClass = 'forcus-background';
            }else{
                this.timerClass = 'longtime-backgraund';
            }
        },
    },
};
</script>

<style scoped>

.forcus-background {
    background: linear-gradient(#9d97f1, #8c80f5);
}


.timer-background {
    background: linear-gradient(#a9a6d2, #978def);
}

.longtime-backgraund{
    background: linear-gradient(#b4b3b3, #87e7b4);
}
</style>
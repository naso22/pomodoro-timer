<template>
    <div class="timer-background-false" :class="{ 'timer-background': isBackgroundChanged }">
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
            isBackgroundChanged: false
        }
    },
    methods: {
        changeBack(Status) {
            console.log(Status)
            this.isBackgroundChanged = Status;
        }
    }
}
</script>

<style>
body {
    margin: 0;
    padding: 0;
}

html {
    margin: 0;
    padding: 0;
}


.timer-background-false {
    background: linear-gradient(#9d97f1, #8c80f5);
}

.timer-background {
    background: linear-gradient(#a9a6d2, #978def);
}
</style>

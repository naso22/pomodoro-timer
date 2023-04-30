<template>
        <div class="time">
            <div class="controll">
                <button @click="eventbutton()">
                    setting
                </button>
            </div>
            <button class="controll">
                <div @click="eventbutton()">▶︎</div>
            </button>
            <button class="controll">
            <div @click="eventbutton()">
               next
            </div>
        </button>
        </div>
</template>

<script>
export default {
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
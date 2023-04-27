<template>
        <div class="time">
            <div class="controll">
                <div @click="startTimer()">▶︎</div>
            </div>
        </div>
</template>

<script>
export default {
    data(){
        return{
            timeElapsed:0,
            timerInterval: undefined,
            timeLimit: 10,
        }
    },
    methods:{
        startTimer() {
            this.timerInterval = setInterval(() => {
                // Stop counting when there is no more time left
                if (++this.timeElapsed === this.timeLimit) {
                    clearInterval(this.timerInterval);
                }
            }, 1000);


        },
    },

};

</script>

<style scoped>
.time {
    height:  250px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.controll {
    display: flex;
    align-items: center;
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
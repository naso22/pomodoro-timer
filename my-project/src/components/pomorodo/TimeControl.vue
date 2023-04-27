<template>
        <div class="time">
            <div class="controll">
                <div @click="emit('start')">▶︎</div>
            </div>
        </div>
</template>

<script>
export default {
    emits:['start']
}

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
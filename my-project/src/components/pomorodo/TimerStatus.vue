<template>
  <h2>{{status}}</h2>

</template>

<script>
export default {
props:['status']
}
</script>

<style scoped>
h2{
    text-align: center;
    color: white;
    margin: 1rem;
    font-size:2rem;
    letter-spacing: 2px;
}
</style>
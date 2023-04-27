<template>
<the-time></the-time>
  <select-mode ></select-mode>
</template>

<script>
import TheTime from './TheTime.vue';
import SelectMode  from './SelectMode.vue'
export default {
    components:{
        TheTime,
        SelectMode
    },
}
</script>
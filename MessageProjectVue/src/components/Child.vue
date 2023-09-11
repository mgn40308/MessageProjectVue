<template>
    <div>
        <div>name {{ mittervalue }}</div>

    </div>
</template>
<script setup>
    import bus from '../Bus'
    import { ref } from 'vue'
    var mittervalue = ref();
    bus.on('foo', e => {
        mittervalue.value = e;
        console.log('e', e) 
    })
</script>
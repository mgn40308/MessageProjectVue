<template>
    <div>
        <button @click="handleClick">click me</button>
        <Child />
    </div>
</template>

<script setup>
    import bus from '../Bus'
    import Child from '../components/Child.vue'
    const handleClick = () => {
        bus.emit('foo', '12345')
    }
</script>
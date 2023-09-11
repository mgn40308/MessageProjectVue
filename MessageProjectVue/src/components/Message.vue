<template>
   <component :is="activeComponent"></component>
</template>
<script>
    export default {
        data() {
            return {
                activeSubComponent: 'list'
            }
        },

    }
</script>
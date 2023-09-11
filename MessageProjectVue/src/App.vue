<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
    import router from './Route'

    export default {
        name: 'App',
        router, 

        created() {
            const currentRoutePath = this.$router.currentRoute.path;
            if (currentRoutePath === '/Message/List') {
                this.$router.push('/Message/List');
            }
        }
    }
</script>
<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
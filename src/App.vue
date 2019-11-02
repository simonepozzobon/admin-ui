<template>
<classic-layout>
    <template slot="logo">
        Pannello di amministrazione
    </template>
    <template slot="menu">
        menu
    </template>
    <template slot="sidebar">
        side
    </template>
    <template slot="content">
        content
    </template>
</classic-layout>
</template>

<script>
import ClassicLayout from './ClassicLayout.vue'

export default {
    name: 'App',
    components: {
        ClassicLayout,
    },
}
</script>

<style lang="scss" scoped>
</style>

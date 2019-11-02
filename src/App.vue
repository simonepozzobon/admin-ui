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
        <a-text-editor></a-text-editor>
    </template>
</classic-layout>
</template>

<script>
import ClassicLayout from './ClassicLayout.vue'
import ATextEditor from './ATextEditor.vue'

export default {
    name: 'App',
    components: {
        ClassicLayout,
        ATextEditor,
    },
}
</script>

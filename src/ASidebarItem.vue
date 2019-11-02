<template>
<div class="admin-ui-sidebar-item">
    <a
        href="#"
        class="admin-ui-sidebar-item__link"
        @click.prevent="$emit('click')"
    >
        {{ title }}
    </a>
</div>
</template>

<script>
export default {
    name: 'SidebarItem',
    props: {
        title: {
            type: String,
            default: 'Titolo',
        },
    },
}
</script>

<style lang="scss" scoped>
.admin-ui-sidebar-item {
    padding-top: $spacer / 3;
    padding-bottom: $spacer / 3;
}
</style>

<template>
<div
    class="admin-template"
    :class="randomColorClass"
>
    <div class="admin-template__top-bar">
        <slot name="top-bar"></slot>
    </div>
    <div class="admin-template__container">
        <div class="admin-template__sidebar">
            <slot name="sidebar"></slot>
        </div>
        <div class="admin-template__content">
            <slot name="content"></slot>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'ClassicLayout',
}
</script>

<style lang="scss" scoped>
@import '../sass/shared';
</style>
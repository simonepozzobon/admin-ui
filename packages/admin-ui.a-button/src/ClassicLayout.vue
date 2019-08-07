<template>
<div
    class="admin-classic-layout"
    :class="randomColorClass"
>
    <div class="admin-classic-layout__top-bar">
        <div class="admin-template__logo">
            <slot name="logo"></slot>
        </div>
        <div class="admin-template__menu">
            <slot name="menu"></slot>
        </div>
    </div>
    <div class="admin-classic-layout__container">
        <div class="admin-classic-layout__sidebar">
            <slot name="sidebar"></slot>
        </div>
        <div class="admin-classic-layout__content">
            <slot name="content"></slot>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'ClassicLayout',
    data: function () {
        return {
            randomColorClass: null
        }
    },
    methods: {
        randomColor: function () {
            let colors = ['blue', 'red', 'green', 'orange', 'purple']
            let idx = Math.floor(Math.random() * colors.length) + 0
            this.randomColorClass = 'admin-classic-layout--' + colors[idx]
        },
    },
    created: function () {
        this.randomColor()
    },
}
</script>

<style lang="scss">
@import './sass/shared';

.admin-classic-layout {
    &__container {
        display: flex;
        height: 100%;
        min-height: 100vh;
    }

    &__top-bar {
        position: fixed;
        height: $spacer * 4;
        width: 100%;
        background-color: $gray-100;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: ($spacer / 2) $spacer;
        // @include custom-box-shadow(lighten($black, 25));
        z-index: $zindex-fixed;
    }

    &__sidebar {
        // min-height: 100vh;
        // height: 100%;
        width: 200px;
        padding: ($spacer * 5) $spacer $spacer;
        z-index: 2;
        @include custom-box-shadow(lighten($black, 25));
        @include gradient-directional($gray-100, lighten($gray-200, 10), 145deg);
    }

    &__content {
        padding: ($spacer * 6) ($spacer * 2) ($spacer * 2);
        width: 100%;
    }

    &--blue &__content {
        @include gradient-directional(lighten($blue, 35), lighten($blue, 40), 145deg);
    }

    &--red &__content {
        @include gradient-directional(lighten($red, 20), lighten($red, 25), 145deg);
    }

    &--green &__content {
        @include gradient-directional(lighten($green, 25), lighten($green, 35), 145deg);
    }

    &--orange &__content {
        @include gradient-directional(lighten($orange, 25), lighten($orange, 35), 145deg);
    }

    &--purple &__content {
        @include gradient-directional(lighten($purple, 55), lighten($purple, 60), 145deg);
    }
}
</style>
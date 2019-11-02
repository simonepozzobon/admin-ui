<template>
<div
    class="admin-container"
    :class="[
        paddingClass,
        themeClass,
        hasGradientClass,
    ]"
>
    <div class="admin-container__content">
        <slot></slot>
    </div>
</div>
</template>

<script>
export default {
    name: 'AContainer',
    props: {
        padding: {
            type: String,
            default: null,
        },
        theme: {
            type: String,
            default: 'light',
        },
        hasGradient: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        paddingClass: function () {
            if (this.padding) {
                return 'admin-container--padding-' + this.padding
            }
            return null
        },
        themeClass: function () {
            if (this.theme != 'light') {
                return 'admin-container--dark'
            }
            return null
        },
        hasGradientClass: function () {
            if (this.hasGradient) {
                return 'admin-container--gradient'
            }
            return null
        }
    },
}
</script>

<style lang="scss" scoped>

.admin-container {
    &__content {
        background-color: $light;
        padding: $spacer * 2;
        @include border-radius($border-radius);
        @include custom-box-shadow(lighten($black, 25));
        margin-bottom: $spacer * 1.618;
        z-index: 2;
    }

    &--padding-sm &__content {
        padding: $spacer;
    }

    &--dark &__content {
        background-color: $dark;
    }

    &--gradient &__content {
        @include gradient-directional(lighten($light, 10), lighten($light, 0), 125deg);
    }

    &--dark#{&}--gradient &__content {
        @include gradient-directional(lighten($dark, 10), lighten($dark, 0), 125deg);
    }
}
</style>

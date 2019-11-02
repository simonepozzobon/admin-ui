<template>
<div
    class="a-panel-title form-group row"
    :class="[
        colorClass,
        uppercaseClass,
        paddingClass,
        marginClass,
        topMarginClass,
    ]"
>
    <div class="col-12 a-panel-title__col">
        <h5
            class="a-panel-title__title"
            :style="styleInline"
        >
            {{ title }}
        </h5>
        <hr v-if="hasDiv" />
    </div>
</div>
</template>

<script>
export default {
    name: 'APanelTitle',
    props: {
        title: {
            type: String,
            default: 'titolo',
        },
        hasDiv: {
            type: Boolean,
            default: true,
        },
        hasPadding: {
            type: Boolean,
            default: true,
        },
        hasMargin: {
            type: Boolean,
            default: true,
        },
        hasMarginTop: {
            type: Boolean,
            default: true,
        },
        uppercase: {
            type: Boolean,
            default: true,
        },
        color: {
            type: String,
            default: null
        },
        fontWeight: {
            type: String,
            default: null,
        }
    },
    computed: {
        colorClass: function () {
            if (this.color) {
                return 'text-' + this.color
            }
            return null
        },
        uppercaseClass: function () {
            if (!this.uppercase) {
                return 'a-panel-title--text-normal'
            }
            return null
        },
        paddingClass: function () {
            if (!this.hasPadding) {
                return 'a-panel-title--no-padding'
            }
            return null
        },
        marginClass: function () {
            if (!this.hasMargin) {
                return 'a-panel-title--no-margin'
            }
            return null
        },
        topMarginClass: function () {
            if (this.hasMarginTop) {
                return 'mt-5'
            }
            return null
        },
        styleInline: function () {
            let string = ''
            if (this.fontWeight) {
                string = 'font-weight: ' + this.fontWeight + ';'
            }
            return string
        }
    },
}
</script>

<style lang="scss" scoped>

.a-panel-title {
    text-transform: uppercase;
    letter-spacing: 2px;

    &--text-normal {
        text-transform: none;
    }

    &--no-padding {
        padding: 0;
    }

    &--no-padding & {
        &__title {
            padding: 0;
        }

        &__col {
            padding: 0;
        }
    }

    &--no-margin {
        margin: 0;
    }

    &--no-margin & {
        &__title {
            margin: 0;
        }

        &__col {
            margin: 0;
        }
    }
}
</style>

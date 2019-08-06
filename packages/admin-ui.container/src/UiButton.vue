<template>
<div
    class="ui-button"
    v-if="hasContainer"
    :class="[
            displayClass,
            alignSelfClass,
            marginClass,
            customSizeClass,
        ]"
>
    <button
        class="btn ui-button__content"
        :class="[
                colorClass,
                blockClass,
                sizeClass,
            ]"
        :disabled="disable"
        @click.prevent="clicked"
    >
        <span ref="text">
            {{ title }}
            <slot></slot>
        </span>
        <span
            class="spinner-border spinner-border-sm"
            ref="spinner"
            role="status"
            aria-hidden="true"
            v-if="hasSpinner"
        ></span>
    </button>
</div>
<button
    v-else
    class="btn ui-button"
    :class="[
            colorClass,
            blockClass,
            displayClass,
            noContainerClass,
            alignSelfClass,
            marginClass,
            sizeClass,
            customSizeClass,
        ]"
    :disabled="disable"
    @click.prevent="clicked"
>
    <span ref="text">
        {{ title }}
        <slot></slot>
    </span>
    <span
        class="spinner-border spinner-border-sm"
        ref="spinner"
        role="status"
        aria-hidden="true"
        v-if="hasSpinner"
    ></span>
</button>
</template>

<script>
export default {
    name: 'UiButton',
    props: {
        color: {
            type: String,
            default: null,
        },
        block: {
            type: Boolean,
            default: false,
        },
        disable: {
            type: Boolean,
            default: false,
        },
        display: {
            type: String,
            default: null,
        },
        hasContainer: {
            type: Boolean,
            default: true,
        },
        alignSelf: {
            type: String,
            default: null,
        },
        hasMargin: {
            type: Boolean,
            default: true,
        },
        title: {
            type: String,
            default: null,
        },
        fontColor: {
            type: String,
            default: null,
        },
        hasSpinner: {
            type: Boolean,
            default: false,
        },
        theme: {
            type: String,
            default: null,
        },
        size: {
            type: String,
            default: null
        },
        eventParams: [String, Object, Array, Number],
        updateSpinnerSize: {
            type: Boolean,
            default: false,
        },

    },
    watch: {
        hasSpinner: function (value) {
            if (value && this.updateSpinnerSize) {
                let el = this.$refs.text
                let height = el.getBoundingClientRect().height
                this.$nextTick(() => {
                    this.$refs.spinner.style.height = height + 'px'
                    this.$refs.spinner.style.width = height + 'px'
                })
            }
        },
    },
    computed: {
        colorClass: function () {
            if (this.color && !this.theme) {
                return 'btn-' + this.color
            }
            else if (this.color && this.theme === 'outline') {
                return 'btn-outline' + this.color
            }
        },
        blockClass: function () {
            if (this.block) {
                return 'btn-block'
            }
        },
        displayClass: function () {
            if (this.display) {
                return 'ui-button--' + this.display
            }
        },
        noContainerClass: function () {
            if (!this.hasContainer) {
                return 'ui-button--no-container'
            }
        },
        alignSelfClass: function () {
            if (this.alignSelf == 'start') {
                return 'ui-button--align-self-start'
            }
        },
        marginClass: function () {
            if (!this.hasMargin) {
                return 'ui-button--no-margin'
            }
        },
        fontColorClass: function () {
            if (this.fontColor) {
                return 'text-' + this.fontColor
            }
        },
        sizeClass: function () {
            if (this.size) {
                return 'btn-' + this.size
            }
        },
        customSizeClass: function () {
            if (this.size) {
                return 'ui-button--' + this.size
            }
        }
    },
    methods: {
        clicked: function () {
            if (!this.disable) {
                this.$emit('click', this.eventParams)
            }
        }
    },

}
</script>

<style lang="scss" scoped>
@import './sass/shared';

.ui-button {
    margin-bottom: $spacer;

    &__content {
        text-transform: uppercase;
        font-size: $font-size-base * 0.75;
        font-weight: 600;
        letter-spacing: 3px;
    }

    &--no-container {
        text-transform: uppercase;
        font-size: $font-size-base * 0.75;
        font-weight: 600;
        letter-spacing: 3px;
    }

    &--sm {
        text-transform: uppercase;
        font-size: $font-size-base * 0.55;
        font-weight: 600;
        letter-spacing: 3px;
    }

    &--inline-block {
        display: inline-block;
    }

    &--align-self-start {
        align-self: flex-start;
    }

    &--no-margin {
        margin-bottom: 0;
    }
}
</style>

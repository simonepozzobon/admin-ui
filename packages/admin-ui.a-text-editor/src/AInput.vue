<template>
<div>
    <input
        v-if="isSimple"
        :type="type"
        :name="name"
        :placeholder="placeholder"
        v-model="value"
        class="a-input"
        :class="hasShadowClass"
    />

    <div
        v-else
        class="form-group row"
    >
        <label
            :for="name"
            class="col-md-2"
        >
            {{ label }}
        </label>
        <div class="col-md-10">
            <input
                :type="type"
                :name="name"
                :placeholder="placeholder"
                v-model="value"
                class="form-control a-input"
                :class="hasShadowClass"
            />
            <small v-if="info">{{ info }}</small>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'AInput',
    props: {
        label: {
            type: String,
            default: 'label',
        },
        name: {
            type: String,
            default: 'name',
        },
        placeholder: {
            type: String,
            default: null,
        },
        type: {
            type: String,
            default: 'text',
        },
        isSimple: {
            type: Boolean,
            default: true,
        },
        info: {
            type: String,
            default: null,
        },
        hasShadow: {
            type: Boolean,
            default: true,
        },
        initial: [String, Number],
    },
    data: function () {
        return {
            value: null,
        }
    },
    watch: {
        value: function (value) {
            this.$emit('update', value)
        },
        initial: function () {
            this.setInitial()
        },
    },
    computed: {
        hasShadowClass: function () {
            if (!this.hasShadow) {
                return 'a-input--no-shadows'
            }
            return null
        },
    },
    methods: {
        setInitial: function () {
            this.value = this.initial
        },
    },
    created: function () {
        this.setInitial()
    },
}
</script>

<style lang="scss">
@import './sass/shared';

.a-input {
    @include border-radius($border-radius);
    background-color: $faded;
    width: 100%;
    padding: $input-padding-y $spacer * 2 $input-padding-y $input-padding-x;
    box-shadow: $input-box-shadow;
    line-height: $input-line-height;
    background-image: none;
    background-clip: padding-box;
    border: $input-btn-border-width solid $input-border-color;
    transition: $transition-base;

    &::placeholder {
        color: $input-color-placeholder;
        // Override Firefox's unusual default opacity; see https://github.com/twbs/bootstrap/pull/11526.
        opacity: 0.4;
        transition: $transition-base;
    }

    &:focus {
        color: $input-color-focus;
        background-color: $input-bg-focus;
        border-color: $input-border-focus;
        outline: none;
        transition: $transition-base;
    }

    &--no-shadows {
        box-shadow: none;
    }
}
</style>

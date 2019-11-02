<template>
<div class="a-datepicker">
    <div class="form-group row">
        <label
            v-if="hasLabel"
            :for="name"
            class="col-md-3"
        >
            {{ label }}
        </label>
        <div :class="hasLabelClass">
            <datepicker
                v-model="value"
                :name="name"
                :placeholder="placeholder"
                class="a-datepicker__calendar"
                wrapper-class="a-datepicker__wrapper"
                input-class="a-datepicker__input"
                :bootstrap-styling="true"
            />
        </div>
    </div>
</div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
export default {
    name: 'AdminDatePicker',
    components: {
        Datepicker,
    },
    props: {
        label: {
            type: String,
            default: 'titolo',
        },
        name: {
            type: String,
            default: 'name',
        },
        initial: [String, Date, Number],
        placeholder: {
            type: String,
            default: 'Seleziona una data',
        },
        hasLabel: {
            type: Boolean,
            default: false,
        },
    },
    data: function () {
        return {
            value: null,
        }
    },
    watch: {
        value: function (value) {
            // console.log(value);
            this.$emit('update', value)
        },
        initial: function () {
            this.setInitial()
        },
    },
    computed: {
        hasLabelClass: function () {
            if (this.hasLabel) {
                return 'col-md-10'
            }
            return 'col-12'
        },
    },
    methods: {
        setInitial: function () {
            this.value = this.initial
        }
    },
    mounted: function () {
        this.$nextTick(() => {
            this.setInitial()
        })
    },
}
</script>

<style lang="scss" scoped>
.a-datepicker {
    &__wrapper {
        background: none !important;

        .input-group {
            background-image: none !important;
            background-clip: padding-box;
        }
    }

    &__input {
        @include border-radius($border-radius);
        background-color: $faded !important;
        width: 100% !important;
        box-shadow: $input-box-shadow !important;
        line-height: $input-line-height !important;
        background-image: none !important;
        background-clip: padding-box !important;
        padding: $input-padding-y $spacer * 2 $input-padding-y $input-padding-x !important;
        border: $input-btn-border-width solid $input-border-color;
        transition: $transition-base;

        &::placeholder {
            color: $input-color-placeholder !important;
            // Override Firefox's unusual default opacity; see https://github.com/twbs/bootstrap/pull/11526.
            opacity: 0.4 !important;
            transition: $transition-base;
        }

        &:focus {
            color: $input-color-focus;
            background-color: $input-bg-focus !important;
            border-color: $input-border-focus !important;
            outline: none !important;
            transition: $transition-base;
        }
    }
}
</style>

<template>
<div class="a-file-input">
    <div class="form-group row">
        <label
            class="col-md-2"
            v-if="hasLabel"
        >
            {{ label }}
        </label>
        <div :class="hasLabelClass">
            <div class="input-group mb-3">
                <div class="custom-file a-file-input__input">
                    <input
                        ref="file"
                        type="file"
                        class="custom-file-input"
                        :id="name"
                        :accept="accept"
                        @change="previewFile"
                    />

                    <label
                        class="custom-file-label a-file-input__label"
                        :class="colorClass"
                        :for="name"
                        aria-describedby="inputGroupFileAddon02"
                    >
                        <span>{{ filename }}</span>
                    </label>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'FileInput',
    components: {},
    props: {
        label: {
            type: String,
            default: 'label',
        },
        name: {
            type: String,
            default: 'fileinput',
        },
        placeholder: {
            type: String,
            default: 'Seleziona un file',
        },
        accept: {
            type: String,
            default: null,
        },
        ratio: {
            type: Number,
            default: 16 / 9
        },
        hasCrop: {
            type: Boolean,
            default: false,
        },
        hasLabel: {
            type: Boolean,
            default: false,
        },
    },
    data: function () {
        return {
            showCrop: false,
            file: null,
            src: null,
            filename: null,
            hasFile: null,
        }
    },
    watch: {
        src: function () {
            this.toggleCrop()
        },
    },
    computed: {
        hasLabelClass: function () {
            if (this.hasLabel) {
                return 'col-md-10'
            }
            return 'col-12'
        },
        colorClass: function () {
            if (this.hasFile) {
                return 'text-black'
            }
            return null
        },
    },
    methods: {
        toggleCrop: function () {
            if (this.src) {
                this.showCrop = true
            }
            else {
                this.showCrop = false
            }
        },
        previewFile: function () {
            this.file = this.$refs.file.files[0]
            if (this.file) {
                this.hasFile = true
                this.filename = this.file.name

                let reader = new FileReader()
                // console.log('preview');
                reader.addEventListener('load', () => {
                    if (this.hasCrop) {
                        this.src = reader.result
                        // console.log(this.src);
                    }
                    else {
                        let src = reader.result
                        let file = this.file
                        this.$emit('update', file, src)
                    }

                })
                reader.readAsDataURL(this.file)
            }
            else {
                this.hasFile = false
                this.filename = this.placeholder
            }
        },
        crop: function () {
            // https://developer.mozilla.org/it/docs/Web/API/HTMLCanvasElement/toBlob

            let canvas = this.$refs.cropper.clip()
            canvas.toBlob(blob => {
                // blob.lastModifiedDate = new Date()
                let file = new File([blob], this.file.name)

                this.getSrc(file).then(src => {
                    this.$emit('update', file, src)
                })
            })
        },
        getSrc: function (file) {
            return new Promise(resolve => {
                let reader = new FileReader()
                // console.log('preview');
                reader.addEventListener('load', () => {
                    resolve(reader.result)
                })
                reader.readAsDataURL(file)
            })
        },
        reset: function () {
            this.$refs.file.value = ''
            this.file = null
            this.src = null
            if (this.hasCrop) {
                this.toggleCrop()
            }
        },
    },
    created: function () {
        this.filename = this.placeholder
    },
}
</script>

<style lang="scss" scoped>
@import './sass/shared';
.a-file-input {

    &__input {
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
    }

    &__label {
        color: $input-color-placeholder;
        // Override Firefox's unusual default opacity; see https://github.com/twbs/bootstrap/pull/11526.
        opacity: 0.4;
        transition: $transition-base;
    }

    .custom-file-input:lang(en) ~ .custom-file-label::after {
        text-transform: uppercase;
        letter-spacing: 2px;
        font-weight: 300;
        font-size: $font-size-sm;
        color: $dark;
        padding: 0.5rem $custom-file-padding-x;
        content: 'Sfoglia';
    }

    .text-black {
        color: $black !important;
    }
}
</style>

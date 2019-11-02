<template>
<div class="admin-editor">
    <div class="form-group row">
        <label
            v-if="hasLabel"
            for=""
            class="col-md-2"
        >
            {{ label }}
        </label>
        <div
            :class="hasLabelClass"
            @click.prevent="focusEditor"
        >
            <div class="admin-editor__container">
                <editor-menu-bar
                    :editor="editor"
                    v-slot="{ commands, isActive }"
                >
                    <div class="menubar">
                        <button
                            class="menubar__button"
                            :class="{ 'is-active': isActive.bold() }"
                            @click="commands.bold"
                        >
                            B
                        </button>

                        <button
                            class="menubar__button"
                            :class="{ 'is-active': isActive.italic() }"
                            @click="commands.italic"
                        >
                            I
                        </button>

                        <button
                            class="menubar__button"
                            :class="{ 'is-active': isActive.strike() }"
                            @click="commands.strike"
                        >
                            S
                        </button>

                        <button
                            class="menubar__button"
                            :class="{ 'is-active': isActive.underline() }"
                            @click="commands.underline"
                        >
                            U
                        </button>

                        <button
                            class="menubar__button"
                            :class="{ 'is-active': isActive.bullet_list() }"
                            @click="commands.bullet_list"
                        >
                            List
                        </button>

                        <button
                            class="menubar__button"
                            :class="{ 'is-active': isActive.heading({ level: 1 }) }"
                            @click="commands.heading({ level: 1 })"
                        >
                            H1
                        </button>

                        <button
                            class="menubar__button"
                            :class="{ 'is-active': isActive.heading({ level: 2 }) }"
                            @click="commands.heading({ level: 2 })"
                        >
                            H2
                        </button>

                        <button
                            class="menubar__button"
                            :class="{ 'is-active': isActive.heading({ level: 3 }) }"
                            @click="commands.heading({ level: 3 })"
                        >
                            H3
                        </button>

                    </div>
                </editor-menu-bar>
                <editor-menu-bubble
                    class="menububble"
                    :editor="editor"
                    @hide="hideLinkMenu"
                    v-slot="{ commands, isActive, getMarkAttrs, menu }"
                >
                    <div
                        class="menububble"
                        :class="{ 'is-active': menu.isActive }"
                        :style="`left: ${menu.left}px; bottom: ${menu.bottom}px;`"
                    >

                        <form
                            class="menububble__form"
                            v-if="linkMenuIsActive"
                            @submit.prevent="setLinkUrl(commands.link, linkUrl)"
                        >
                            <input
                                class="menububble__input"
                                type="text"
                                v-model="linkUrl"
                                placeholder="https://"
                                ref="linkInput"
                                @keydown.esc="hideLinkMenu"
                            />
                            <button
                                class="menububble__button"
                                @click="setLinkUrl(commands.link, null)"
                                type="button"
                            >
                                Elimina
                            </button>
                        </form>

                        <template v-else>
                            <button
                                class="menububble__button"
                                @click="showLinkMenu(getMarkAttrs('link'))"
                                :class="{ 'is-active': isActive.link() }"
                            >
                                <span>{{ isActive.link() ? 'Modifica Link' : 'Aggiungi Link'}}</span>
                            </button>
                        </template>

                    </div>
                </editor-menu-bubble>
                <editor-content
                    class="admin-editor__content"
                    :editor="editor"
                >
                </editor-content>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    Editor,
    EditorContent,
    EditorMenuBar,
    EditorMenuBubble,
}
from 'tiptap'


import {
    Blockquote,
    CodeBlock,
    HardBreak,
    Heading,
    HorizontalRule,
    OrderedList,
    BulletList,
    Image,
    ListItem,
    TodoItem,
    TodoList,
    Bold,
    Code,
    Italic,
    Link,
    Strike,
    Underline,
    History,
}
from 'tiptap-extensions'

import Iframe from './plugins/Iframe'

export default {
    name: 'TextEditor',
    props: {
        label: {
            type: String,
            default: 'Titolo',
        },
        hasLabel: {
            type: Boolean,
            default: false,
        },
    },
    components: {
        EditorContent,
        EditorMenuBar,
        EditorMenuBubble,
    },
    data: function () {
        return {
            editor: null,
            html: null,
            json: null,
            linkUrl: null,
            linkMenuIsActive: false,
        }
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
        init: function () {
            this.editor = new Editor({
                extensions: [
                    // new PasteHandler(),
                    // new EnterHandler(),
                    new Blockquote(),
                    new BulletList(),
                    new CodeBlock(),
                    new HardBreak(),
                    new Heading({
                        levels: [1, 2, 3]
                    }),
                    new Iframe(),
                    new Image(),
                    new HorizontalRule(),
                    new ListItem(),
                    new OrderedList(),
                    new TodoItem(),
                    new TodoList(),
                    new Link(),
                    new Bold(),
                    new Code(),
                    new Italic(),
                    new Strike(),
                    new Underline(),
                    new History(),
                ],
                content: this.initial ? this.initial : '',
            })

            // console.log(this.initial);

            this.editor.on('update', (e) => {
                this.html = e.getHTML()
                this.json = e.getJSON()
                this.$emit('update', this.json, this.html)
                // console.log('updated');
            })
        },
        showLinkMenu: function (attrs) {
            this.linkUrl = attrs.href
            this.linkMenuIsActive = true
            this.$nextTick(() => {
                this.$refs.linkInput.focus()
            })
        },
        hideLinkMenu: function () {
            this.linkUrl = null
            this.linkMenuIsActive = false
        },
        setLinkUrl: function (command, url) {
            command({
                href: url
            })
            this.hideLinkMenu()
            this.editor.focus()
        },
        focusEditor: function () {
            if (this.editor) {
                this.editor.focus()
            }
        },
    },
    mounted: function () {
        this.$nextTick(this.init)
    },
    beforeDestroy: function () {
        this.editor.destroy()
    }
}
</script>

<style lang="scss">

@import './sass/vendor/tiptap/main';

.admin-editor {
    &__container {
        max-width: 100%;
        margin: 0;
        background-color: $faded;
        @include border-radius(10px);
        padding: $spacer;
        min-height: 40vh;
        box-shadow: $input-box-shadow;
        background-image: none;
        background-clip: padding-box;
        border: $input-btn-border-width solid $input-border-color;
        transition: $transition-base;

        &__content {
            min-height: 40vh;
        }

        img {
            max-width: 100%;
        }
    }
}

.ProseMirror-focused {
    outline: none;
}
</style>

# admin-ui.a-text-editor

> ATextEditor ui

## Installation

### Directly in the browser

Drop the component in with a `<script>` tag alongside Vue:

```html
<div id="app">
<!-- ... use component here ... -->
</div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/admin-ui.a-text-editor"></script>
<script>
new Vue({ el: '#app' })
</script>
```

### In a module system

Install the component with NPM:

```bash
npm install admin-ui.a-text-editor
```

Then import the component:

```js
import ATextEditor from '@esserun/admin-ui.a-text-editor'
```

And either globally register it for use in all components:

```js
Vue.component(ATextEditor, 'a-text-editor')
```

or locally register it for use in an individual component:

```js
export default {
components: { ATextEditor }
}
```

## Usage

```html
<a-text-editor></a-text-editor>
```

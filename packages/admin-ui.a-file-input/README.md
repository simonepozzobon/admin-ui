# admin-ui.a-file-input

> AFileInput ui

## Installation

### Directly in the browser

Drop the component in with a `<script>` tag alongside Vue:

```html
<div id="app">
<!-- ... use component here ... -->
</div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/admin-ui.a-file-input"></script>
<script>
new Vue({ el: '#app' })
</script>
```

### In a module system

Install the component with NPM:

```bash
npm install admin-ui.a-file-input
```

Then import the component:

```js
import AFileInput from '@esserun/admin-ui.a-file-input'
```

And either globally register it for use in all components:

```js
Vue.component(AFileInput, 'a-file-input')
```

or locally register it for use in an individual component:

```js
export default {
components: { AFileInput }
}
```

## Usage

```html
<a-file-input></a-file-input>
```

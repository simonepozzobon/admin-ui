# admin-ui.a-input

> AInput ui

## Installation

### Directly in the browser

Drop the component in with a `<script>` tag alongside Vue:

```html
<div id="app">
<!-- ... use component here ... -->
</div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/admin-ui.a-input"></script>
<script>
new Vue({ el: '#app' })
</script>
```

### In a module system

Install the component with NPM:

```bash
npm install admin-ui.a-input
```

Then import the component:

```js
import AInput from '@esserun/admin-ui.a-input'
```

And either globally register it for use in all components:

```js
Vue.component(AInput, 'a-input')
```

or locally register it for use in an individual component:

```js
export default {
components: { AInput }
}
```

## Usage

```html
<a-input></a-input>
```

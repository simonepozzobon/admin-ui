# admin-ui.ui-button

> UiButton ui

## Installation

### Directly in the browser

Drop the component in with a `<script>` tag alongside Vue:

```html
<div id="app">
<!-- ... use component here ... -->
</div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/admin-ui.ui-button"></script>
<script>
new Vue({ el: '#app' })
</script>
```

### In a module system

Install the component with NPM:

```bash
npm install admin-ui.ui-button
```

Then import the component:

```js
import UiButton from '@esserun/admin-ui.ui-button'
```

And either globally register it for use in all components:

```js
Vue.component(UiButton, 'ui-button')
```

or locally register it for use in an individual component:

```js
export default {
components: { UiButton }
}
```

## Usage

```html
<ui-button></ui-button>
```

# admin-ui.classic-layout

> ClassicLayout ui

## Installation

### Directly in the browser

Drop the component in with a `<script>` tag alongside Vue:

```html
<div id="app">
<!-- ... use component here ... -->
</div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/admin-ui.classic-layout"></script>
<script>
new Vue({ el: '#app' })
</script>
```

### In a module system

Install the component with NPM:

```bash
npm install admin-ui.classic-layout
```

Then import the component:

```js
import ClassicLayout from '@esserun/admin-ui.classic-layout'
```

And either globally register it for use in all components:

```js
Vue.component(ClassicLayout, 'classic-layout')
```

or locally register it for use in an individual component:

```js
export default {
components: { ClassicLayout }
}
```

## Usage

```html
<classic-layout></classic-layout>
```

# admin-ui.a-title

> ATitle ui

## Installation

### Directly in the browser

Drop the component in with a `<script>` tag alongside Vue:

```html
<div id="app">
<!-- ... use component here ... -->
</div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/admin-ui.a-title"></script>
<script>
new Vue({ el: '#app' })
</script>
```

### In a module system

Install the component with NPM:

```bash
npm install admin-ui.a-title
```

Then import the component:

```js
import ATitle from '@esserun/admin-ui.a-title'
```

And either globally register it for use in all components:

```js
Vue.component(ATitle, 'a-title')
```

or locally register it for use in an individual component:

```js
export default {
components: { ATitle }
}
```

## Usage

```html
<a-title></a-title>
```

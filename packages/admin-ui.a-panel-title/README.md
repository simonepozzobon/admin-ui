# admin-ui.a-panel-title

> APanelTitle ui

## Installation

### Directly in the browser

Drop the component in with a `<script>` tag alongside Vue:

```html
<div id="app">
<!-- ... use component here ... -->
</div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/admin-ui.a-panel-title"></script>
<script>
new Vue({ el: '#app' })
</script>
```

### In a module system

Install the component with NPM:

```bash
npm install admin-ui.a-panel-title
```

Then import the component:

```js
import APanelTitle from '@esserun/admin-ui.a-panel-title'
```

And either globally register it for use in all components:

```js
Vue.component(APanelTitle, 'a-panel-title')
```

or locally register it for use in an individual component:

```js
export default {
components: { APanelTitle }
}
```

## Usage

```html
<a-panel-title></a-panel-title>
```

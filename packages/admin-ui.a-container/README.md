# admin-ui.a-container

> AContainer ui

## Installation

### Directly in the browser

Drop the component in with a `<script>` tag alongside Vue:

```html
<div id="app">
<!-- ... use component here ... -->
</div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/admin-ui.a-container"></script>
<script>
new Vue({ el: '#app' })
</script>
```

### In a module system

Install the component with NPM:

```bash
npm install admin-ui.a-container
```

Then import the component:

```js
import AContainer from '@esserun/admin-ui.a-container'
```

And either globally register it for use in all components:

```js
Vue.component(AContainer, 'a-container')
```

or locally register it for use in an individual component:

```js
export default {
components: { AContainer }
}
```

## Usage

```html
<a-container></a-container>
```

# admin-ui.container

> Container ui

## Installation

### Directly in the browser

Drop the component in with a `<script>` tag alongside Vue:

```html
<div id="app">
<!-- ... use component here ... -->
</div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/admin-ui.container"></script>
<script>
new Vue({ el: '#app' })
</script>
```

### In a module system

Install the component with NPM:

```bash
npm install admin-ui.container
```

Then import the component:

```js
import Container from '@esserun/admin-ui.container'
```

And either globally register it for use in all components:

```js
Vue.component(Container, 'container')
```

or locally register it for use in an individual component:

```js
export default {
components: { Container }
}
```

## Usage

```html
<container></container>
```

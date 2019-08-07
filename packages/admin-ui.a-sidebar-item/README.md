# admin-ui.a-sidebar-item

> ASidebarItem ui

## Installation

### Directly in the browser

Drop the component in with a `<script>` tag alongside Vue:

```html
<div id="app">
<!-- ... use component here ... -->
</div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/admin-ui.a-sidebar-item"></script>
<script>
new Vue({ el: '#app' })
</script>
```

### In a module system

Install the component with NPM:

```bash
npm install admin-ui.a-sidebar-item
```

Then import the component:

```js
import ASidebarItem from '@esserun/admin-ui.a-sidebar-item'
```

And either globally register it for use in all components:

```js
Vue.component(ASidebarItem, 'a-sidebar-item')
```

or locally register it for use in an individual component:

```js
export default {
components: { ASidebarItem }
}
```

## Usage

```html
<a-sidebar-item></a-sidebar-item>
```

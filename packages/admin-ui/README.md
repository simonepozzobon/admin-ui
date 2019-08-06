
# admin-ui

> Admin Ui modules for vue

## Installation

### Directly in the browser

Drop the library in with a `<script>` tag alongside Vue:

```html
<div id="app">
<!-- ... use components here ... -->
</div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/admin-ui"></script>
<script>
new Vue({ el: '#app' })
</script>
```

Or, if you only want to use a small subset of components, drop them in individually:

```html
<div id="app">
<!-- ... use component here ... -->
</div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/admin-ui/Button"></script>
<script>
new Vue({ el: '#app' })
</script>
```

### In a module system

Install the library with NPM:

```bash
npm install @esserun/admin-ui
```

Then either import the library and either globally register all components with:

```js
import AdminUi from 'admin-ui'

Vue.use(AdminUi)
```

or import and locally register a single component with:

```js
import { Button } from 'admin-ui'

export default {
components: { AdminUi }
}
```

#### Individually packaged components

If you only want to use a small subset of components, import only individually packaged components to reduce the size of your application:

```js
import Button from '@esserun/admin-ui/Button'
import Container from '@esserun/admin-ui/Container'
```

# admin-ui.a-datepicker

> ADatepicker ui

## Installation

### Directly in the browser

Drop the component in with a `<script>` tag alongside Vue:

```html
<div id="app">
<!-- ... use component here ... -->
</div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/admin-ui.a-datepicker"></script>
<script>
new Vue({ el: '#app' })
</script>
```

### In a module system

Install the component with NPM:

```bash
npm install admin-ui.a-datepicker
```

Then import the component:

```js
import ADatepicker from '@esserun/admin-ui.a-datepicker'
```

And either globally register it for use in all components:

```js
Vue.component(ADatepicker, 'a-datepicker')
```

or locally register it for use in an individual component:

```js
export default {
components: { ADatepicker }
}
```

## Usage

```html
<a-datepicker></a-datepicker>
```

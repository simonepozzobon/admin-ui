# AdminUi

## How to install

```
import AdminUi from '@esserun/admin-ui'
import '@esserun/admin-ui/dist/adminUi.css'

Object.keys(AdminUi).forEach(componentName => {
    Vue.component(componentName, AdminUi[componentName])
})
```

import * as components from './components'

const Library = {
    // eslint-disable-next-line
    install(Vue, options = {}) {
        for (const componentName in components) {
            const component = components[componentName]
            Vue.component(component.name, component)
        }
    }
}

export default Library

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Library)
}

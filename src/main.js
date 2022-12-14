import VueLazyload from 'vue-lazyload'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './style.css'

library.add(fab)

createApp(App)
    .use(router)
    .use(VueLazyload, {
        preLoad: 1.3,
        //error: errorimage,
        //loading: loadimage,
        attempt: 1
    })
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')

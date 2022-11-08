import { createApp } from 'vue'
import router from "../routes/Index.js";
import App from './App.vue'
import '../assets/css/style.css'
import naive from 'naive-ui'
import pinia from "../app/util/baseUtil/PiniaPersistBaseUtil.js";

createApp(App)
    .use(router)
    .use(naive)
    .use(pinia)
    .mount('#app')

import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as Icons from "@ant-design/icons-vue";
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import '@/assets/stylus/media.styl';
import '@/assets/stylus/main.styl';
import '@/assets/stylus/global.styl'
// todo Optimize build.
// - Introduce on demand

const icons: any = Icons;
const app = createApp(App);
app.use(store)
    .use(router)
    .use(ElementPlus)
    .mount('#app')
for (const i in icons) {
    app.component(i, icons[i]);
}


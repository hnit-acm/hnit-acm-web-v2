import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import * as Icons from "@ant-design/icons-vue";
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
// todo Optimize build.
// - Introduce on demand

const icons: any = Icons;
const app = createApp(App);
app.use(store)
    .use(router)
    .use(Antd)
    .use(ElementPlus)
    .mount('#app')
for (const i in icons) {
    app.component(i, icons[i]);
}


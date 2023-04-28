import { createApp } from 'vue'
import { createRouter ,createWebHistory} from 'vue-router';
import App from './App.vue';
import SettingTimer from './components/pomorodo/SettingTimer.vue'
import TimerView from "./components/pomorodo/TimerView.vue";
const router =createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/home',component:TimerView},
        { path: '/', redirect: '/home' },
        {path:'/setting',component:SettingTimer}
    ]
});


const app=createApp(App);
app.use(router);
app.mount('#app');

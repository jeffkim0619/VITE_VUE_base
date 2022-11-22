console.log(`
%c     ██╗███████╗███████╗███████╗██╗  ██╗██╗███╗   ███╗
%c     ██║██╔════╝██╔════╝██╔════╝██║ ██╔╝██║████╗ ████║
%c     ██║█████╗  █████╗  █████╗  █████╔╝ ██║██╔████╔██║
%c██   ██║██╔══╝  ██╔══╝  ██╔══╝  ██╔═██╗ ██║██║╚██╔╝██║
%c╚█████╔╝███████╗██║     ██║     ██║  ██╗██║██║ ╚═╝ ██║
%c ╚════╝ ╚══════╝╚═╝     ╚═╝     ╚═╝  ╚═╝╚═╝╚═╝     ╚═╝
`, "color:#22577A", "color:#38A3A5", "color:#57CC99", "color:#80ED99", "color:#99FFED", "color:#FFFFFF")

import constant from '@/common/constant.js';

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import store from './store';

//카카오맵
import VueDaumPostcode from 'vue-daum-postcode';

const app = createApp(App);


router.beforeEach((to, from, next) => {

    console.log(to.name)

    window.scrollTo(0, 0);
    next();
});

app.use(store);
app.use(router);
app.use(VueDaumPostcode);

app.mount("#app");
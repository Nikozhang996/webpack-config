import Vue from 'vue';
import App from './app.vue';

import './assets/styles/global.styl';

// 在body下创建一个根节点
const root = document.createElement('div');
document.body.appendChild(root);

// 将根节点root注入到app.vue组件中
new Vue({
    render: (h) => h(App)
}).$mount(root);
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import configureAxios from '@/plugins/axios';
import i18n from '@/plugins/i18n';
import { createPinia } from 'pinia';

loadFonts();
configureAxios();

createApp(App).use(i18n).use(router).use(vuetify).use(createPinia()).mount('#app');

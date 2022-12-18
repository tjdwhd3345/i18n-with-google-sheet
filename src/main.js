import { createApp } from 'vue';
import App from './App.vue';
// import i18next from 'i18next';
import i18NextVue from 'i18next-vue';
import './assets/main.css';
import { initializeI18next, i18n } from './i18n/i18next';

const lang = navigator.language.split('-')[0];
console.log({ lang });
initializeI18next(lang);
// initializeI18next('en');

const app = createApp(App);
app.use(i18NextVue, { i18next: i18n });
app.mount('#app');

import { createApp } from 'vue';
import App from './main.vue';
import './styles.less';
import { router } from '@routes/routes.module';

createApp(App).use(router).mount('#app');

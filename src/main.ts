import { createApp } from 'vue';

import wow from '@/utils/wow';

import App from './App.vue';

import 'animate.css';
import 'normalize.css';
import '@/styles/style.scss';

wow.init();

const APP = createApp(App);

APP.mount('body');

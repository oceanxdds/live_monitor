import Vue from 'vue';
//import BootstrapVue from 'bootstrap-vue';

import FormInputPlugin from 'bootstrap-vue/es/components/form-input';
import FormCheckboxPlugin from 'bootstrap-vue/es/components/form-checkbox';
import InputGroupPlugin from 'bootstrap-vue/es/components/input-group';
import ButtonPlugin from 'bootstrap-vue/es/components/button';
import ButtonGroupPlugin from 'bootstrap-vue/es/components/button-group';
import EmbedPlugin from 'bootstrap-vue/es/components/embed';
import DropdownPlugin from 'bootstrap-vue/es/components/dropdown';

import App from './app.vue';
//Vue.use(BootstrapVue);
Vue.use(FormInputPlugin);
Vue.use(FormCheckboxPlugin);
Vue.use(InputGroupPlugin);
Vue.use(ButtonPlugin);
Vue.use(ButtonGroupPlugin);
Vue.use(EmbedPlugin);
Vue.use(DropdownPlugin);

new Vue({
   el:'app',
   render:r=>r(App)
});

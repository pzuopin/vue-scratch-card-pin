//src/index.js

import VueScratchCardPin from './packages/vue-scratch-card-pin/index.js';

const install = function(Vue , opts = {}){
    Vue.component(VueScratchCardPin.name , VueScratchCardPin);
}

//支持使用标签<script>的方式引入
if(typeof window !== 'undefined' && window.Vue){
    install(window.Vue);
}

export default {
    install ,
    VueScratchCardPin
}

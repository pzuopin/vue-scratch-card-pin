import vueScratchCardPin from './vue-scratch-card-pin'

vueScratchCardPin.install = Vue => Vue.component(vueScratchCardPin.name , vueScratchCardPin);

if(typeof window !== 'undefined' && window.Vue){
  window.Vue.use(vueScratchCardPin);
}

export default vueScratchCardPin;

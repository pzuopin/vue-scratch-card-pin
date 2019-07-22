
<template>
  <div id="app">
    <vueScratchCardPin
        element-id='scratchWrap'
        :ratio=0.5
        :move-radius=50
        :start-callback=startCallback
        :clear-callback=clearCallback
    />
  </div>
</template>

<script>

// import vueScratchCardPin from './packages/vue-scratch-card-pin'
export default {
  name: 'app',
  data () {
    return {

    }
  },
  // components: {
  //   vueScratchCardPin
  // },
  methods : {
    startCallback(){
      console.log('抽奖成功！')
    },
    clearCallback(){
      console.log('清除完毕！')
    }
  }
}
</script>

<style lang="scss">
</style>

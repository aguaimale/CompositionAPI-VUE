<template>
  <div class="about">
    <h1>{{title}}</h1>
    <button @click="changeTitle"> Cambiar titulo</button>
  </div>
</template>
<script>

import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUnmounted,
  onErrorCaptured,
  onRenderTracked,
  onRenderTriggered,
  onActivated,
  onDeactivated,
} from 'vue'

export default {
  setup() {

    const title = ref ('About')

    console.log('setup se llamó')

    onBeforeMount(() => {
      console.log('onBeforeMount')
    })
    onMounted(() => {
      console.log('onMounted')
    })
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate')
    })
    onUnmounted(() => {
      console.log('onUnmounted')
    })
    onErrorCaptured(() => {
      console.log('onErrorCaptured')
    })
    onRenderTracked(() => {
      console.log('onRenderTracked')
    })
    onRenderTriggered(() => {
      console.log('onRenderTriggered')
    })
    onActivated(() => {
      console.log('onActivated')
    })
    onDeactivated(() => {
      console.log('onDeactivated')
    })

    return {
      title,
      changeTitle: () => title.value = 'New About page!'
    }
  },
}

</script>

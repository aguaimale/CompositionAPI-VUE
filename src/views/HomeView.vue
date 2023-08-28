<template>
  <div class="home">
    <h1>Reactive Vs Ref</h1>
    <h3>{{ ironman }}</h3>
    <h3>{{ hulk }}</h3>
    <button @click="changeIronman">Cambiar Ironman</button>
    <button @click="changeHulk">Cambiar Hulk</button>
    <h5>ironman: {{ ironmanIsAlive }}</h5>
    <h5>hulk: {{ hulkIsAlive }}</h5>
    <button @click="changeStatus"> Change state</button>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'


export default {
  name: 'HomeView',

  setup() {

    const ironman = ref({ name: 'Tony', age: 50 })
    const hulk = reactive({ name: 'Bruce', age: 45 })
    
    const ironmanIsAlive = reactive(false)
    const hulkIsAlive = ref(true)
    
    const changeStatus = () => {
      hulkIsAlive.value = !hulkIsAlive.value
     

    }

    return {
      ironman,
      hulk,
      ironmanIsAlive,
      hulkIsAlive,


      changeStatus,
      changeIronman: () => {
        ironman.value.name = 'tony stark'
        ironman.value.age = 55
      },
      changeHulk: () => {
        hulk.name = 'Angry Bruce'
        hulk.age = 55
      },
    }
  }

}
</script>

<template>
   <h1> Counter View</h1>

   <h2>{{ counter }}</h2>
   <div  class="buttonsDiv">

      <button @click="aumentar">+1</button>
      <button @click="decrementar">-1</button>
   </div>
</template>

<script>
import useCounter from '../composables/useCounter'
export default {
   name: 'Counter',
   setup() {
      const { counter, aumentar, decrementar } = useCounter()
      




      return {
         counter,
         aumentar,
         decrementar
      }


   },

}
</script>

<style>
button{
   margin:3px;
}

</style>
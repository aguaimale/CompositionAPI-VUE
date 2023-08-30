<template>
  <div class="home">
    <h1>Reactive Vs Ref</h1>
    <div class="info">
      <h4>En el contexto de la API de Composición de Vue, tanto "Reactive" como "Ref" son conceptos utilizados para
        gestionar e interactuar con datos reactivos. Veamos cada uno de ellos:</h4>
      <p><strong>Ref:</strong> <br>
        Un ref es un tipo de objeto específico de Vue que te permite crear una referencia reactiva a un valor. Normalmente
        se utiliza para tipos de datos primitivos como números, cadenas y booleanos. Cuando creas un ref, obtienes un
        objeto con una propiedad .value. Esta propiedad .value contiene el valor real, y cualquier cambio en él provocará
        actualizaciones en los componentes que lo estén utilizando.
        El punto clave es que necesitas acceder al valor usando .value.</p>
      <p><strong>Reactive:</strong> <br>
        La función reactive se utiliza para crear un objeto completo que es reactivo. A diferencia de ref, no necesitas
        acceder a una propiedad .value para obtener el valor reactivo. En su lugar, puedes acceder a las propiedades del
        objeto directamente y Vue se encargará de realizar un seguimiento de las dependencias y actualizar los componentes
        cuando sea necesario.
      </p>
    </div>

    <h3>{{ ironman }}</h3>
    <h3>{{ hulk }}</h3>
    <div class="buttonsDiv">
      <button @click="changeIronman">Cambiar Ironman</button>
      <button @click="changeHulk">Cambiar Hulk</button>
    </div>
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
<style scoped>
.home {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  justify-content: center;
  align-items: center;
}

button {
  margin: 3px;
}

.info {
  text-align: left;
}
</style>

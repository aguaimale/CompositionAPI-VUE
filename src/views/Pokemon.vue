<template >
    <h1 v-if="!pokemon && !errorMensaje"> Buscando... </h1>
    <h1 v-else-if="errorMensaje"> {{ errorMensaje }}</h1>
    <template v-else="">
        <h3> El Pokemon es: {{ pokemon.name }}</h3>
        <img :src="pokemon.sprites.front_default" alt="pokemon.name">
        <br>
       
         <router-link :to="{ name: 'pokemon-search' }">  Regresar</router-link>
    </template>
</template>
<script>
import { watch } from "vue";
import { useRoute, onBeforeRouteLeave } from "vue-router";
import usePokemon from "@/composables/usePokemon";

export default {

    setup() {

        const route = useRoute()
        const { pokemon, isLoading, errorMensaje, searchPokemon } = usePokemon(route.params.id)

        watch(
            () => route.params.id,
            () => searchPokemon( route.params.id)
        )

        onBeforeRouteLeave(() => {
            const answer = window.confirm ('¿ Esta seguro que desea salir ?')
            if( !answer ) return false // false bloquea la salida
        })

        return {
            pokemon,
            isLoading,
            errorMensaje,


            searchPokemon,
        }




    }


}
</script>

import { ref } from 'vue'
import axios from 'axios'

const usePokemon = (pokemonId = '1') => {

    const pokemon = ref()
    const isLoading = ref(false)
    const errorMensaje = ref()

    const searchPokemon = async (id) => {
        
        if(!id) return
        isLoading.value = true
        pokemon.value = null

        try {

            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            pokemon.value = data
            errorMensaje.value = null
        } catch (error) {
            errorMensaje.value = ' no se pudo cargar ese pokemon'
        }

        isLoading.value = false
    }
    searchPokemon(pokemonId)

    return {
        pokemon,
        isLoading,
        errorMensaje,
        
        searchPokemon,
    }
}

export default usePokemon
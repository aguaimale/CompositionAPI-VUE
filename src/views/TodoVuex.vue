<template >
    <h1>Lista de tareas de Thanos</h1>
    <h4> Tareas: {{ $store.state.todos.length }} </h4>
</template>
<script>
import {computed} from 'vue'
import { useStore } from 'vuex';

export default {

    setup() {

        const store = useStore
        





    }
}
</script>
<style>
    
</style>
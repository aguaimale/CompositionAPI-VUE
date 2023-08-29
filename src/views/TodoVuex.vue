<template >
    <h1>Lista de tareas de Thanos 🦹‍♂️ </h1>
    <h4> Tareas pendientes: {{ $store.state.todos.filter(t => !t.completed).length }} </h4>
    <hr>
    <button :class="{ 'active': currentTab === 'all' }" @click="currentTab = 'all'">
        Todos
    </button>
    <button :class="{ 'active': currentTab === 'pending' }" @click="currentTab = 'pending'">
        Pendientes
    </button>
    <button :class="{ 'active': currentTab === 'completed' }" @click="currentTab = 'completed'">
        Completado
    </button>
    <hr>
    <div>
        <ul>
            <li v-for=" todo in getTodosByTab " :key="todo.id" :class="{ 'completed': todo.completed }"
                @dblclick="toggleTodo(todo.id)">
                {{ todo.text }}
            </li>
        </ul>
    </div>
    <button @click="isOpen=true">Crear Nueva tarea</button>

    <!-- Modal para crear nueva tarea -->
    <modal v-if="isOpen"
    @on:close="isOpen = false">
        <template v-slot:header>
           <h1>Nueva tarea</h1>
           <hr>
        </template>
        
        <template v-slot:body>
            <br>
            <form 
            @submit.prevent=" createTodo(newTodoText) ; isOpen=false "
            >
                <input 
                type="text"
                placeholder="Nueva tarea"
                v-model="newTodoText"
                >
                <br><br><br><br>
                <button class="bModal"> Crear</button>
            </form>
        </template>

    </modal>

</template>

<script>
import useTodo from '@/composables/useTodo'
import Modal from '@/components/Modal.vue'
import {ref} from 'vue'
export default {
    components: { Modal },
    setup() {
        const { currentTab, pending, all, completed, getTodosByTab,createTodo, toggleTodo } = useTodo()

        

        return {
            currentTab,
            pending,
            all,
            completed,
            getTodosByTab,
            toggleTodo,
            createTodo,
            isOpen: ref (false),
            newTodoText: ref('')
        }
    }
}
</script>

<style scoped>
button {
    background-color: greenyellow;
    margin: 5px;
}

li {

    cursor: pointer;
    margin-bottom: 20px;

}

div {
    display: flex;
    justify-content: center;
    text-align: center;
}

ul {
    width: 300px;
    text-align: left;
}

.active {
    background-color: #2c3e50;
    color: white;
}

.completed {
    text-decoration: line-through
}
.bModal{
    width: 70%;
}
</style>
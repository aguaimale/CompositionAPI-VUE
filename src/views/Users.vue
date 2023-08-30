<template>
    <h2 v-if="isLoading"> Esperepor favor...</h2>
    <h2 v-else> Usuarios</h2>
    <h5 v-if="errorMensaje">{{ errorMensaje }}</h5>

    <div class="userlist" v-if="users.length > 0">
        <user-list :users="users" v-slot="{ user }">
            <div class="label">
                <h3> Full name:{{ user.first_name }} {{ user.last_name }}</h3>
                <span>Email:{{ user.email }}</span>
            </div>
        </user-list>
    </div>
    <div class="buttonsDiv">
        <button @click="decrementPage">Atras</button>
        <button @click="incrementPage">Siguiente</button>
    </div>
    <span>Pagina:{{ currentPage }}</span>
</template>
<script>
import useUsers from "../composables/useUsers";
import UserList from "@/components/UserList.vue";
export default {
    components: { UserList },
    setup() {

        const { users, isLoading, currentPage, errorMensaje, incrementPage, decrementPage } = useUsers()




        return {
            users,
            isLoading,
            currentPage,
            errorMensaje,
            incrementPage,
            decrementPage,
        }


    },



}


</script>

<style scoped>
h2 {

    text-align: center;
    width: 100%;
}

div {

    display: flex;
    justify-content: center;
    text-align: center;
}


.userlist {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}

.label {
    border: 0.5px solid rgb(197, 197, 197);
    border-radius: 12px;
    margin-bottom: 6px;
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    box-shadow: 10px 10px 5px -7px rgba(0,0,0,0.11);
    transition: transform 0.1s ease-in-out;
}
.label:hover {
    transform: scale(1.05);
    border: 0.5px solid rgb(11, 157, 77);
}

</style>
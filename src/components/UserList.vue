<template >
        <ul>
        <slot v-for="user in users" :key="user.id" :user="user">
        </slot>
        </ul>
</template>

<script>
export default {

    props: {
        users:{
            type: Array,
            Required: true 
        }
    }
    
}
</script>

<style >
ul{
    list-style: none;
}
    
</style>
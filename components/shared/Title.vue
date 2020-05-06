<template>
    <h1 class="text-2xl font-bold text-center lg:text-left">
        <span class="border-b-2 border-blue-800 text-gray-100">{{ text }}</span>
    </h1>
</template>

<script>
    export default {
        props: {
            text: String
        }   
    }
</script>
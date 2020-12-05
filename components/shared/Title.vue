<template>
    <h1 class="text-2xl font-bold text-left">
        <span class="border-b-2 relative border-blue-800 text-gray-100">{{ text }}</span>
    </h1>
</template>

<script>
    export default {
        props: {
            text: String
        }   
    }
</script>

<style scoped>
    .border-b-2:after {
        position: absolute;
        left: 35%;
        right: 0;
        bottom: -2px;
        border-top: 2px solid #444444;
        content: '';
    }
</style>
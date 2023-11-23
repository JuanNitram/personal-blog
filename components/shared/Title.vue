<template>
    <h1 class="text-2xl font-bold text-left">
        <span class="relative border-blue-100 text-gray-400">{{ text }}</span>
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
        border-top: 2px solid #949494;
        content: '';
    }
</style>
<template>
    <div>
        <h2 class="text-md font-bold text-gray-100">{{ text }}</h2>
        <div class="w-full border-2 border-gray-800 rounded-lg" :style="{padding: '.1rem'}">
            <div class="border-2 border-blue-800" :style="{width: width}"></div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            text: String,
            width: String,
        }   
    }
</script>
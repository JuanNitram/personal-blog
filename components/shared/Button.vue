<template>
    <button class="w-full lg:w-auto bg-gray-900 hover:bg-blue-800 text-white mr-2 my-2 lg:my-0 py-2 px-2 lg:px-4 rounded-full border-blue-800 border-2 text-sm">
        {{ text }}
    </button>
</template>

<script>
    export default {
        props: {
            text: String
        }   
    }
</script>
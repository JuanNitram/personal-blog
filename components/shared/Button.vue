<template>
    <button class="w-full lg:w-auto bg-gray-600 hover:bg-gray-500 text-gray-100 mr-2 my-2 lg:my-0 py-2 px-2 lg:px-8 rounded-lg border-gray-400 border text-sm">
        {{ !loading ? text : 'Loading ....'}}
    </button>
</template>

<script>
    export default {
        props: {
            text: String,
            loading: Boolean
        }   
    }
</script>
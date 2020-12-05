<template>
    <button class="w-full lg:w-auto bg-gray-900 hover:bg-blue-800 text-gray-100 mr-2 my-2 lg:my-0 py-2 px-2 lg:px-8 rounded-lg border-blue-800 border-2 text-sm">
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
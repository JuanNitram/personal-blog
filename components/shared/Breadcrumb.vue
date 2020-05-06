<template>
    <div class="w-full bg-gray-850 border-t-2 border-b-2 border-gray-700 px-2 lg:px-32 py-12">
        <h1 class="text-4xl text-left text-gray-100 font-bold">{{ text }}</h1>
    </div>
</template>

<script>
    export default {
        props: {
            text: String
        }
    }
</script>
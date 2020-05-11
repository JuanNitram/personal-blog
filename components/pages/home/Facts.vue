<template>
    <div class="mx-auto px-2 lg:px-32 pb-12 text-gray-400">
        <div class="w-full px-5 py-4">
            <Title :text="$t('funFacts')"/>
        </div>
        <div class="flex flex-col lg:flex-row px-0 lg:px-5">
            <div class="w-full lg:w-1/4 px-10 py-5 lg:px-5 lg:py-5">
                <div class="bg-gray-800 border-2 border-gray-800 rounded-md p-4 flex flex-col justify-between items-center">
                    <i class="fas fa-laptop fa-3x text-blue-800"></i>
                    <h2 class="text-xl text-gray-100 text-center py-2">Working hours</h2>
                    <h1 class="text-4xl text-gray-100 text-center font-bold">4,500</h1>
                </div>
            </div>
            <div class="w-full lg:w-1/4 px-10 py-5 lg:px-5 lg:py-5">
                <div class="bg-gray-800 border-2 border-gray-800 rounded-md p-4 flex flex-col justify-between items-center">
                    <i class="far fa-user fa-3x text-blue-800"></i>
                    <h2 class="text-xl text-gray-100 text-center py-2">Happy clients</h2>
                    <h1 class="text-4xl text-gray-100 text-center font-bold">17</h1>
                </div>
            </div>
            <div class="w-full lg:w-1/4 px-10 py-5 lg:px-5 lg:py-5">
                <div class="bg-gray-800 border-2 border-gray-800 rounded-md p-4 flex flex-col justify-between items-center">
                    <i class="far fa-lightbulb fa-3x text-blue-800"></i>
                    <h2 class="text-xl text-gray-100 text-center py-2">Working hours</h2>
                    <h1 class="text-4xl text-gray-100 text-center font-bold">4,500</h1>
                </div>
            </div>
            <div class="w-full lg:w-1/4 px-10 py-5 lg:px-5 lg:py-5">
                <div class="bg-gray-800 border-2 border-gray-800 rounded-md p-4 flex flex-col justify-between items-center">
                    <i class="fas fa-coffee fa-3x text-blue-800"></i>
                    <h2 class="text-xl text-gray-100 text-center py-2">Coffe consumed</h2>
                    <h1 class="text-4xl text-gray-100 text-center font-bold">1,789</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Title from '../../shared/Title';

    export default {
        components: {
            Title
        }    
    }
</script>
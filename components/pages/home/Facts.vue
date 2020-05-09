<template>
    <div class="mx-auto px-2 lg:px-32 pb-12 text-gray-400">
        <div class="w-full px-5 py-4">
            <Title :text="$t('funFacts')"/>
        </div>
        <div class="flex flex-col lg:flex-row">
            <div class="w-full lg:w-1/4 px-10 py-5 lg:px-5 lg:py-5">
                <div class="bg-gray-800 border-2 border-gray-800 rounded-md p-4 flex flex-col justify-between items-center">
                    <i class="far fa-lightbulb fa-5x text-blue-800"></i>
                    <p class="text-center pt-8 pb-4">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                </div>
            </div>
            <div class="w-full lg:w-1/4 px-10 py-5 lg:px-5 lg:py-5">
                <div class="bg-gray-800 border-2 border-gray-800 rounded-md p-4 flex flex-col justify-between items-center">
                    <i class="far fa-lightbulb fa-5x text-blue-800"></i>
                    <p class="text-center pt-8 pb-4">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                </div>
            </div>
            <div class="w-full lg:w-1/4 px-10 py-5 lg:px-5 lg:py-5">
                <div class="bg-gray-800 border-2 border-gray-800 rounded-md p-4 flex flex-col justify-between items-center">
                    <i class="far fa-lightbulb fa-5x text-blue-800"></i>
                    <p class="text-center pt-8 pb-4">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                </div>
            </div>
            <div class="w-full lg:w-1/4 px-10 py-5 lg:px-5 lg:py-5">
                <div class="bg-gray-800 border-2 border-gray-800 rounded-md p-4 flex flex-col justify-between items-center">
                    <i class="far fa-lightbulb fa-5x text-blue-800"></i>
                    <p class="text-center pt-8 pb-4">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
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
<template>
    <div class="w-full">
        <div class="pb-0 lg:pb-6">
            <Title text="Certificates"/>
        </div>

        <div class="block lg:flex">
            <div class="w-full lg:w-1/2 flex border border-gray-800 rounded-lg mr-0 lg:mr-8 mt-8 lg:mt-0">
                <div class="flex items-center justify-center p-10 bg-gray-800" style="min-width: 9rem;">
                    <i class="fas fa-undo fa-2x text-gray-900"></i>
                </div>
                <div class="block my-auto px-5">
                    <h1 class="font-bold text-xl text-gray-100">Agile project management fundamentals</h1>
                    <h2 class="text-sm text-gray-400">Membership ID: xxxx</h2>
                    <h3 class="text-xs text-gray-400">19 April 2018</h3>
                </div>
            </div>
            <div class="w-full lg:w-1/2 flex border border-gray-800 rounded-lg ml-0 lg:ml-8 mt-8 lg:mt-0">
                <div class="flex items-center justify-center p-10 bg-gray-800" style="min-width: 9rem;">
                    <i class="fab fa-docker fa-2x text-gray-900"></i>
                </div>
                <div class="block my-auto px-5">
                    <h1 class="font-bold text-xl text-gray-100">Docker and Kubernetes</h1>
                    <h2 class="text-sm text-gray-400">Membership ID: xxxx</h2>
                    <h3 class="text-xs text-gray-400">19 April 2018</h3>
                </div>
            </div>
        </div>

        <div class="block lg:flex mt-8">
            <div class="w-full lg:w-1/2 flex border border-gray-800 rounded-lg mr-8">
                <div class="flex items-center justify-center p-10 bg-gray-800" style="min-width: 9rem;">
                    <i class="fas fa-undo fa-2x text-gray-900"></i>
                </div>
                <div class="block my-auto px-5">
                    <h1 class="font-bold text-xl text-gray-100">Learn Scrum</h1>
                    <h2 class="text-sm text-gray-400">Membership ID: xxxx</h2>
                    <h3 class="text-xs text-gray-400">19 April 2018</h3>
                </div>
            </div>
            <div class="w-full lg:w-1/2 flex ml-8">
                
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
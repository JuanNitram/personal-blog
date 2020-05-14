<template>
<div id="testimonials" class="mx-auto px-2 md:px-12 lg:px-16 xl:px-32 text-gray-400 pt-20">
        <div class="w-full px-5 pb-10">
            <Title :text="$t('testimonials')"/>
        </div>
        <div class="block md:flex lg:flex px-10 pt-0 md:pt-4">
            <div class="w-full md:w-1/2 lg:w-1/2 bg-gray-800 border-2 border-gray-700 rounded-md p-6 flex justify-between mr-0 md:mr-6 mt-10 xl:mt-0">
                <div class="px-0 lg:px-8 text-left relative pt-10 lg:pt-0">
                    <img src="~/assets/img/me-3.jpeg" class="rounded-full border-gray-700 w-20 h-20 shadow-lg absolute" style="top: -50px; left: -60px"/>
                    <p class="italic text-gray-100">
                        "Development of scalable, testable and maintainable web applications, using the latest technologies of the moment."
                    </p>
                    <p class="pt-5 text-gray-100">
                        <span class="font-bold text-sm">Juan Vargas</span>
                        <span class="text-xs block text-gray-300">Developer</span>
                    </p>
                </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/2 bg-gray-800 border-2 border-gray-700 rounded-md p-6 flex justify-between ml-0 md:ml-6 mt-10 xl:mt-0">
                <div class="px-0 lg:px-8 text-left relative pt-10 lg:pt-0">
                    <img src="~/assets/img/me-3.jpeg" class="rounded-full border-gray-700 w-20 h-20 shadow-lg absolute" style="top: -50px; left: -60px"/>
                    <p class="italic text-gray-100">
                        "Development of native mobile applications that provide high quality using technologies such as NativeScript and React Native."
                    </p>
                    <p class="pt-5 text-gray-100">
                        <span class="font-bold text-sm">Juan Vargas</span>
                        <span class="text-xs block text-gray-300">Developer</span>
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
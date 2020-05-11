<template>
    <div id="services" class="mx-auto px-2 lg:px-32 text-gray-400">
        <div class="w-full px-5 pb-4">
            <Title :text="$t('services')"/>
        </div>
        <div class="block lg:flex px-0 lg:px-5">
            <div class="w-full lg:w-1/2 p-5 flex justify-between">
                <div class="w-48 lg:w-32">
                    <i class="fas fa-desktop mr-2 lg:px-0 lg:pb-0 text-blue-800 text-blue-800" style="font-size: 1.6em"></i>
                </div>
                <div class="px-0 lg:px-8 text-left">
                    <h1 class="text-md text-gray-100 font-bold pb-2">Web Design & Development</h1>
                    <p>
                        As a software developer I'm trained to implement quality web applications, using the latest technologies of the moment.
                    </p>
                </div>
            </div>
            <div class="w-full lg:w-1/2 p-5 flex justify-between">
                <div class="w-48 lg:w-32">
                    <i class="fas fa-mobile-alt fa-2x mr-2 lg:px-0 lg:pb-0 text-blue-800 text-blue-800"></i>
                </div>
                <div class="px-0 lg:px-8 text-left">
                    <h1 class="text-md text-gray-100 font-bold pb-2">Mobile Development</h1>
                    <p>
                        Formed for the development of native mobile applications that provide high quality using the most used technologies of the moment
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
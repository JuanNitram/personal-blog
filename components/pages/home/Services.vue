<template>
    <div id="services" class="mx-auto px-2 md:px-12 lg:px-16 xl:px-32 text-gray-400">
        <div class="w-full px-5 pb-4" data-aos="fade-up">
            <Title :text="$t('services')"/>
        </div>
        <div class="block md:flex lg:flex px-0 lg:px-5" data-aos="fade-up">
            <div class="w-full md:w-1/2 lg:w-1/2 p-5 flex justify-between">
                <div class="w-48 lg:w-32 flex justify-center items-center">
                    <i class="fas fa-desktop mr-2 lg:px-0 lg:pb-0 text-blue-800 text-blue-800" style="font-size: 1.6em"></i>
                </div>
                <div class="px-0 lg:px-8 text-left">
                    <h1 class="text-md text-gray-100 font-bold pb-2">{{ $t('firstService') }}</h1>
                    <p>
                        {{ $t('firstServiceDescription') }}
                    </p>
                </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/2 p-5 flex justify-between">
                <div class="w-48 lg:w-32 flex justify-center items-center">
                    <i class="fas fa-mobile-alt fa-2x mr-2 lg:px-0 lg:pb-0 text-blue-800 text-blue-800"></i>
                </div>
                <div class="px-0 lg:px-8 text-left">
                    <h1 class="text-md text-gray-100 font-bold pb-2">{{ $t('secondService') }}</h1>
                    <p>
                        {{ $t('secondServiceDescription') }}
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
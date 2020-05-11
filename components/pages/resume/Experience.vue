<template>
    <div data-aos="fade">
        <div class="pb-6">
            <Title :text="$t('experience')"/>
        </div>
        <div class="mx-4 lg:mx-0">
            <div class="w-full px-8 pb-8 border-l border-b border-gray-400">
                <div class="w-full flex relative text-sm pb-2" style="right: 50px">
                    <span class="text-gray-100 bg-gray-900 border-2 border-blue-800 rounded-full px-2 mr-2">{{ $t('current') }}</span>
                    <span class="text-gray-400">{{ $t('thirdExperienceCompany') }}</span>
                </div>
                <h2 class="font-bold text-md text-gray-100 text-left">Software Developer</h2>
                <p class="text-sm text-gray-400 text-left">{{ $t('thirdExperienceDescription') }}</p>
            </div>
        </div>
        <div class="mx-4 lg:mx-0">
            <div class="w-full p-8 border-l border-b border-gray-400">
                <div class="w-full flex relative text-sm pb-2" style="right: 50px">
                    <span class="text-gray-100 bg-gray-900 border-2 border-blue-800 rounded-full px-2 mr-2">2019</span>
                    <span class="text-gray-400">{{ $t('secondExperienceCompany')}}</span>
                </div>
                <h2 class="font-bold text-md text-gray-100 text-left">Backend Developer</h2>
                <p class="text-sm text-gray-400 text-left">{{ $t('secondExperienceDescription') }}</p>
            </div>
        </div>
        <div class="mx-4 lg:mx-0">
            <div class="w-full p-8 border-l border-gray-400">
                <div class="w-full flex relative text-sm pb-2" style="right: 50px">
                    <span class="text-gray-100 bg-gray-900 border-2 border-blue-800 rounded-full px-2 mr-2">2018</span>
                    <span class="text-gray-400">{{ $t('firstExperienceCompany')}}</span>
                </div>
                <h2 class="font-bold text-md text-gray-100 text-left">Software Developer</h2>
                <p class="text-sm text-gray-400 text-left">{{ $t('firstExperienceDescription') }}</p>
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
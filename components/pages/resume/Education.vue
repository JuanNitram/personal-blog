<template>
    <div data-aos="fade-up">
        <div class="pb-6">
            <Title :text="$t('education')"/>
        </div>
        <div class="mx-4 lg:mx-0">
            <div class="w-full px-8 pb-8 border-l border-b border-gray-400">
                <div class="w-full flex relative text-sm pb-2" style="right: 50px">
                    <span class="text-gray-400 bg-white border-2 border-gray-100 rounded-full px-2 mr-2">2020</span>
                    <span class="text-gray-400">{{ $t('secondEducationSchool') }}</span>
                </div>
                <h2 class="font-bold text-md text-gray-400 text-left">{{ $t('secondEducationTitle') }}</h2>
                <p class="text-sm text-gray-400 text-left">{{ $t('secondEducationDescription') }}</p>
            </div>
        </div>
        <div class="mx-4 lg:mx-0">
            <div class="w-full p-8 border-l border-gray-400">
                <div class="w-full flex relative text-sm pb-2" style="right: 50px">
                    <span class="text-gray-400 bg-white border-2 border-gray-100 rounded-full px-2 mr-2">2012</span>
                    <span class="text-gray-400">{{ $t('firstEducationSchool') }}</span>
                </div>
                <h2 class="font-bold text-md text-gray-400 text-left">{{ $t('firstEducationTitle') }}</h2>
                <p class="text-sm text-gray-400 text-left">{{ $t('firstEducationDescription') }}</p>
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
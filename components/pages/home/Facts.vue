<template>
    <div class="mx-auto px-2 md:px-12 lg:px-16 xl:px-32 pb-20 pt-20 text-gray-400">
        <div class="w-full px-5 py-4" data-aos="fade-up">
            <Title :text="$t('funFacts')"/>
        </div>
        <div class="hidden lg:flex flex-col lg:flex-row px-0 lg:px-5" data-aos="fade-up">
            <div class="w-full lg:w-1/4 px-10 py-5 lg:px-2 xl:px-5 lg:py-5">
                <div class="bg-gray-800 border-2 border-gray-700 rounded-md p-4 flex flex-col justify-between items-center">
                    <i class="fas fa-laptop fa-3x text-blue-800"></i>
                    <h2 class="text-xl text-gray-100 text-center py-2">{{ $t('firstFact') }}</h2>
                    <h1 class="text-4xl text-gray-100 text-center font-bold">20,550</h1>
                </div>
            </div>
            <div class="w-full lg:w-1/4 px-10 py-5 lg:px-2 xl:px-5 lg:py-5">
                <div class="bg-gray-800 border-2 border-gray-700 rounded-md p-4 flex flex-col justify-between items-center">
                    <i class="far fa-user fa-3x text-blue-800"></i>
                    <h2 class="text-xl text-gray-100 text-center py-2">{{ $t('secondFact') }}</h2>
                    <h1 class="text-4xl text-gray-100 text-center font-bold">22</h1>
                </div>
            </div>
            <div class="w-full lg:w-1/4 px-10 py-5 lg:px-2 xl:px-5 lg:py-5">
                <div class="bg-gray-800 border-2 border-gray-700 rounded-md p-4 flex flex-col justify-between items-center">
                    <i class="fas fa-film fa-3x text-blue-800"></i>
                    <h2 class="text-xl text-gray-100 text-center py-2">{{ $t('thirdFact') }}</h2>
                    <h1 class="text-4xl text-gray-100 text-center font-bold">33</h1>
                </div>
            </div>
            <div class="w-full lg:w-1/4 px-10 py-5 lg:px-2 xl:px-5 lg:py-5">
                <div class="bg-gray-800 border-2 border-gray-700 rounded-md p-4 flex flex-col justify-between items-center">
                    <i class="fas fa-coffee fa-3x text-blue-800"></i>
                    <h2 class="text-xl text-gray-100 text-center py-2">{{ $t('fourFact') }}</h2>
                    <h1 class="text-4xl text-gray-100 text-center font-bold">2,901</h1>
                </div>
            </div>
        </div>

        <div class="block lg:hidden px-0 lg:px-5 overflow-hidden" data-aos="fade-up">
            <no-ssr>
                <Flickity :options="options">
                    <div class="carousel-cell">
                         <div class="w-full md:w-3/5 lg:w-1/4 px-10 py-5 lg:px-5 lg:py-5">
                            <div class="bg-gray-800 border-2 border-gray-700 rounded-md p-4 flex flex-col justify-between items-center">
                                <i class="far fa-lightbulb fa-3x text-blue-800"></i>
                                <h2 class="text-xl text-gray-100 text-center py-2">Working hours</h2>
                                <h1 class="text-4xl text-gray-100 text-center font-bold">20,550</h1>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-cell">
                        <div class="w-full md:w-3/5 lg:w-1/4 px-10 py-5 lg:px-5 lg:py-5">
                            <div class="bg-gray-800 border-2 border-gray-700 rounded-md p-4 flex flex-col justify-between items-center">
                                <i class="far fa-user fa-3x text-blue-800"></i>
                                <h2 class="text-xl text-gray-100 text-center py-2">Happy clients</h2>
                                <h1 class="text-4xl text-gray-100 text-center font-bold">22</h1>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-cell">
                        <div class="w-full md:w-3/5 lg:w-1/4 px-10 py-5 lg:px-5 lg:py-5">
                            <div class="bg-gray-800 border-2 border-gray-700 rounded-md p-4 flex flex-col justify-between items-center">
                                <i class="far fa-lightbulb fa-3x text-blue-800"></i>
                                <h2 class="text-xl text-gray-100 text-center py-2">Watched series</h2>
                                <h1 class="text-4xl text-gray-100 text-center font-bold">33</h1>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-cell">
                        <div class="w-full md:w-3/5 lg:w-1/4 px-10 py-5 lg:px-5 lg:py-5">
                            <div class="bg-gray-800 border-2 border-gray-700 rounded-md p-4 flex flex-col justify-between items-center">
                                <i class="fas fa-coffee fa-3x text-blue-800"></i>
                                <h2 class="text-xl text-gray-100 text-center py-2">Coffe consumed</h2>
                                <h1 class="text-4xl text-gray-100 text-center font-bold">2,901</h1>
                            </div>
                        </div>
                    </div>
                </Flickity>
            </no-ssr>
        </div>
    </div>
</template>

<script>
    import Title from '../../shared/Title';

    export default {
        components: {
            Title
        },

        data() {
            return {
                options: {
                    autoPlay: 3000,
                    pageDots: false,
                    prevNextButtons: false,
                    wrapAround: true,
                }
            }
        }
    }
</script>

<style scoped>
    .carousel-cell {
        display: flex;
        width: 100%;
        justify-content: center;
    }

    .flickity-enabled {
        outline: none;
    }
</style>

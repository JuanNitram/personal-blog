<template>
    <div id="stack" class="mx-auto px-2 md:px-12 lg:px-32 pb-16 pt-12 text-gray-400">
        <div class="w-full px-5 pb-10">
            <Title :text="$t('stack')"/>
        </div>
        <div class="hidden lg:flex px-0 lg:px-5">
            <div class="w-full block lg:flex justify-center">
                <div class="flex justify-center mx-0 lg:mx-12 mb-5 lg:mb-0">
                    <i class="fab fa-laravel fa-5x"></i>
                </div>
                <div class="flex justify-center mx-0 lg:mx-12 mb-5 lg:mb-0">
                    <i class="fab fa-node fa-5x"></i>
                </div>
                <div class="flex justify-center mx-0 lg:mx-12 mb-5 lg:mb-0">
                    <i class="fab fa-js fa-5x"></i>
                </div>
                <div class="flex justify-center mx-0 lg:mx-12 mb-5 lg:mb-0">
                    <i class="fab fa-react fa-5x"></i>
                </div>
                <div class="flex justify-center mx-0 lg:mx-12 mb-5 lg:mb-0">
                    <i class="fab fa-vuejs fa-5x"></i>
                </div>
            </div>
        </div>
        <div class="block lg:hidden px-0 lg:px-5 overflow-hidden">
            <no-ssr>
                <Flickity :options="options">
                    <div class="carousel-cell"><i class="fab fa-laravel fa-5x"></i></div>
                    <div class="carousel-cell"><i class="fab fa-node fa-5x"></i></div>
                    <div class="carousel-cell"><i class="fab fa-js fa-5x"></i></div>
                    <div class="carousel-cell"><i class="fab fa-react fa-5x"></i></div>
                    <div class="carousel-cell"><i class="fab fa-vuejs fa-5x"></i></div>
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
                    autoPlay: 2000,
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
</style>
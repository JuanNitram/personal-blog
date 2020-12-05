<template>
    <div id="blog" class="pt-12">
        <div class="w-full bg-gray-850 border-t-2 border-b-2 border-gray-700 px-2 lg:px-32 py-12">
            <h1 class="text-4xl text-left text-gray-100 font-bold">Blog</h1>
        </div>
        <div class="block lg:flex px-2 lg:px-40 pt-20 pb-10">
            <div class="w-full lg:w-1/2 px-8 pb-10 lg:pb-0">
                <div class="rounded overflow-hidden shadow-lg">
                    <div class="w-full h-64 rounded-lg" :style="{ background: `url(${background})`, backgroundSize: 'cover' }"></div>
                </div>
                <div class="py-2">
                    <span class="text-sm text-gray-600">04 Dec 2020</span>
                    <div class="font-bold text-xl text-gray-100">The Coldest Sunset</div>
                </div>
            </div>
            <div class="w-full lg:w-1/2 px-8">
                <div class="rounded overflow-hidden shadow-lg">
                    <div class="w-full h-64 rounded-lg" :style="{ background: `url(${background})`, backgroundSize: 'cover' }"></div>
                </div>
                <div class="py-2">
                    <span class="text-sm text-gray-600">04 Dec 2020</span>
                    <div class="font-bold text-xl text-gray-100">The Coldest Sunset</div>
                </div>
            </div>
        </div>
        <div class="flex px-2 lg:px-40 pb-10 lg:pb-20">
            <div class="px-8">
                <Button text="See all posts"/>
            </div>
        </div>
    </div>
</template>

<script>
    import background from '../../assets/img/me.png';
    import Button from '../../components/shared/Button';
    export default {
        components: {
            Button
        },

        data() {
            return {
                background
            }
        }
    }
</script>
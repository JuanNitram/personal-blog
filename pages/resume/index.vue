<template>
    <div id="resume" class="pt-12">
        <Breadcrumb text="Resume" />
        <div class="block lg:flex px-6 lg:px-40 py-20">
            <div class="w-full lg:w-1/2 mr-0 lg:mr-4 mb-10 lg:mb-0">
                <div class="pb-6">
                    <Title text="Education"/>
                </div>
                <div class="w-full px-8 pb-8 border-l border-b border-gray-400">
                    <div class="w-full flex relative text-sm pb-2" style="right: 50px">
                        <span class="text-gray-100 bg-gray-900 border-2 border-blue-800 rounded-full px-2 mr-2">2009</span>
                        <span class="text-gray-400">Lorem ipsum</span>
                    </div>
                    <h2 class="font-bold text-md text-gray-100 text-left">Lorem ipsum</h2>
                    <p class="text-sm text-gray-400 text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aperiam repudiandae praesentium totam deserunt similique omnis.</p>
                </div>
                <div class="w-full p-8 border-l border-b border-gray-400">
                    <div class="w-full flex relative text-sm pb-2" style="right: 50px">
                        <span class="text-gray-100 bg-gray-900 border-2 border-blue-800 rounded-full px-2 mr-2">2009</span>
                        <span class="text-gray-400">Lorem ipsum</span>
                    </div>
                    <h2 class="font-bold text-md text-gray-100 text-left">Lorem ipsum</h2>
                    <p class="text-sm text-gray-400 text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aperiam repudiandae praesentium totam deserunt similique omnis.</p>
                </div>
                <div class="w-full p-8 border-l border-gray-400">
                    <div class="w-full flex relative text-sm pb-2" style="right: 50px">
                        <span class="text-gray-100 bg-gray-900 border-2 border-blue-800 rounded-full px-2 mr-2">2009</span>
                        <span class="text-gray-400">Lorem ipsum</span>
                    </div>
                    <h2 class="font-bold text-md text-gray-100 text-left">Lorem ipsum</h2>
                    <p class="text-sm text-gray-400 text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aperiam repudiandae praesentium totam deserunt similique omnis.</p>
                </div>
            </div>
            <div class="w-full lg:w-1/2 ml-0 lg:ml-4">
                <div class="pb-6">
                    <Title text="Experience"/>
                </div>
                <div class="w-full px-8 pb-8 border-l border-b border-gray-400">
                    <div class="w-full flex relative text-sm pb-2" style="right: 50px">
                        <span class="text-gray-100 bg-gray-900 border-2 border-blue-800 rounded-full px-2 mr-2">2009</span>
                        <span class="text-gray-400">Lorem ipsum</span>
                    </div>
                    <h2 class="font-bold text-md text-gray-100 text-left">Lorem ipsum</h2>
                    <p class="text-sm text-gray-400 text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aperiam repudiandae praesentium totam deserunt similique omnis.</p>
                </div>
                <div class="w-full p-8 border-l border-b border-gray-400">
                    <div class="w-full flex relative text-sm pb-2" style="right: 50px">
                        <span class="text-gray-100 bg-gray-900 border-2 border-blue-800 rounded-full px-2 mr-2">2009</span>
                        <span class="text-gray-400">Lorem ipsum</span>
                    </div>
                    <h2 class="font-bold text-md text-gray-100 text-left">Lorem ipsum</h2>
                    <p class="text-sm text-gray-400 text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aperiam repudiandae praesentium totam deserunt similique omnis.</p>
                </div>
                <div class="w-full p-8 border-l border-gray-400">
                    <div class="w-full flex relative text-sm pb-2" style="right: 50px">
                        <span class="text-gray-100 bg-gray-900 border-2 border-blue-800 rounded-full px-2 mr-2">2009</span>
                        <span class="text-gray-400">Lorem ipsum</span>
                    </div>
                    <h2 class="font-bold text-md text-gray-100 text-left">Lorem ipsum</h2>
                    <p class="text-sm text-gray-400 text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aperiam repudiandae praesentium totam deserunt similique omnis.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Breadcrumb from '../../components/shared/Breadcrumb';
    import Title from '../../components/shared/Title';

    export default {
        transition: 'page',

        components: {
            Breadcrumb,
            Title
        }
    }
</script>
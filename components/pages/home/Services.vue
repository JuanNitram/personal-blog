<template>
    <div id="services" class="mx-auto px-2 lg:px-32 text-gray-400">
        <div class="w-full px-5 pb-4">
            <Title :text="$t('services')"/>
        </div>
        <div class="block lg:flex">
            <div class="w-full lg:w-1/2 p-5 flex justify-between">
                <i class="fas fa-code fa-3x px-5 lg:px-0 lg:pb-0 text-blue-800 text-blue-800"></i>
                <div class="px-0 lg:px-8 text-left">
                    <h1 class="text-md text-gray-100 font-bold pb-2">Web Development</h1>
                    <p>
                        Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.
                    </p>
                </div>
            </div>
            <div class="w-full lg:w-1/2 p-5 flex justify-between">
                <i class="fas fa-mobile-alt fa-3x px-5 lg:px-0 lg:pb-0 text-blue-800 text-blue-800"></i>
                <div class="px-0 lg:px-8 text-left">
                    <h1 class="text-md text-gray-100 font-bold pb-2">Mobile Development</h1>
                    <p>
                        Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.
                    </p>
                </div>
            </div>
        </div>
        <div class="block lg:flex">
            <div class="w-full lg:w-1/2 p-5 flex justify-between">
                <i class="far fa-file-code fa-3x px-5 lg:px-0 lg:pb-0 text-blue-800 text-blue-800"></i>
                <div class="px-0 lg:px-8 text-left">
                    <h1 class="text-md text-gray-100 font-bold pb-2">Product Development</h1>
                    <p>
                        Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.
                    </p>
                </div>
            </div>
            <div class="w-full lg:w-1/2 p-5 flex justify-between">
                <i class="far fa-file-code fa-3x px-5 lg:px-0 lg:pb-0 text-blue-800 text-blue-800"></i>
                <div class="px-0 lg:px-8 text-left">
                    <h1 class="text-md text-gray-100 font-bold pb-2">Software Outsourcing</h1>
                    <p>
                        Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.
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
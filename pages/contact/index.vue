<template>
    <div id="contact" class="pt-12 h-screen">
        <Breadcrumb text="Contact" secondary-text="Get in Touch"/>
        
        <div class="block lg:flex px-4 lg:px-24 xl:px-40 py-20">
            <div class="w-full lg:w-1/3 pr-0 lg:pr-6" data-aos="fade-up">
                <div class="flex">
                    <div class="flex flex-col justify-center p-2 lg:p-0">
                        <i class="fas fa-mobile-alt fa-2x text-blue-800"></i>
                    </div>
                    <div class="p-2 flex px-4 lg:px-8 px-4 lg:px-8 items-center">
                        <h1 class="font-bold text-gray-100 text-xl">+598 99 082 658</h1>
                        <!-- <p class="text-gray-500 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p> -->
                    </div>
                </div>
                <div class="flex pt-10">
                    <div class="flex flex-col justify-center p-2 lg:p-0">
                        <i class="fas fa-map-marker-alt fa-2x text-blue-800"></i>
                    </div>
                    <div class="p-2 flex px-4 lg:px-8 items-center">
                        <h1 class="font-bold text-gray-100 text-xl">Montevideo, Uruguay</h1>
                        <!-- <p class="text-gray-500 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p> -->
                    </div>
                </div>
                <div class="flex pt-10">
                    <div class="flex flex-col justify-center p-2 lg:p-0">
                        <i class="far fa-envelope fa-2x text-blue-800"></i>
                    </div>
                    <div class="p-2 flex px-4 lg:px-8 items-center">
                        <h1 class="font-bold text-gray-100 text-xl">juanmvg2006@gmail.com</h1>
                        <!-- <p class="text-gray-500 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p> -->
                    </div>
                </div>
            </div>
            <div class="w-full lg:w-2/3 pl-0 lg:pl-6 pt-10 lg:pt-0" data-aos="fade-up">
                <Title text="How can I help you?"/>
                <Form/>
            </div>
        </div>
    </div>
</template>

<script>
    import Breadcrumb from '../../components/shared/Breadcrumb';
    import Title from '../../components/shared/Title';
    import Form from '../../components/pages/contact/Form';

    export default {
        components: {
            Breadcrumb,
            Title,
            Form
        },

        head() {
            return {
                title: 'Juan Vargas | Contact'
            }
        }
    }
</script>
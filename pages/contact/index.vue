<template>
    <div id="contact" class="pt-12">
        <Breadcrumb text="Contact" secondary-text="Get in Touch"/>

        <div class="flex px-4 lg:px-24 xl:px-40 py-10 pt-16 lg:pt-20 lg:py-20">
            <div class="w-full">
                <div style="width: 100%"><iframe class="rounded-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d818.0371367853747!2d-56.1838604707791!3d-34.902721498900725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f80352fe8f1fd%3A0xab77267017cba639!2sMercedes%20%26%20Calle%20Tacuaremb%C3%B3%2C%2011200%20Montevideo%2C%20Departamento%20de%20Montevideo!5e0!3m2!1sen!2suy!4v1589383833750!5m2!1sen!2suy" width="100%" height="200" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe></div><br />
            </div>
        </div>
        
        <div class="block lg:flex px-4 lg:px-24 xl:px-40 pb-20">
            <div class="w-full lg:w-1/3 pr-0 lg:pr-6">
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
                        <h1 class="font-bold text-gray-100 text-xl">me@juanvargas.me</h1>
                        <!-- <p class="text-gray-500 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p> -->
                    </div>
                </div>
            </div>
            <div class="w-full lg:w-2/3 pl-0 lg:pl-6 pt-10 lg:pt-0">
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
        }
    }
</script>
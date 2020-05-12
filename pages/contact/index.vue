<template>
    <div id="contact" class="pt-12">
        <Breadcrumb text="Contact" secondary-text="Get in Touch"/>

        <div class="flex px-4 lg:px-40 py-10 pt-16 lg:pt-20 lg:py-20">
            <div class="w-full">
                <div style="width: 100%"><iframe width="100%" height="200" class="rounded-lg" src="https://maps.google.com/maps?width=100%&height=300&hl=es&q=Les%20Rambles%2C%201%20Barcelona%2C%20Spain+(Mi%20nombre%20de%20egocios)&ie=UTF8&t=&z=14&iwloc=B&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"><a href="https://www.mapsdirections.info/marcar-radio-circulo-mapa/">Dibuja un circulo Google Maps</a></iframe></div><br />
            </div>
        </div>
        
        <div class="block lg:flex px-4 lg:px-40 pb-20">
            <div class="w-full lg:w-1/3 pr-0 lg:pr-6">
                <div class="flex">
                    <div class="flex flex-col justify-center p-5 lg:p-0">
                        <i class="fas fa-mobile-alt fa-2x text-blue-800"></i>
                    </div>
                    <div class="p-2 flex px-4 lg:px-8 px-4 lg:px-8 items-center">
                        <h1 class="font-bold text-gray-100 text-xl">+598 99 082 658</h1>
                        <!-- <p class="text-gray-500 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p> -->
                    </div>
                </div>
                <div class="flex pt-10">
                    <div class="flex flex-col justify-center p-5 lg:p-0">
                        <i class="fas fa-map-marker-alt fa-2x text-blue-800"></i>
                    </div>
                    <div class="p-2 flex px-4 lg:px-8 items-center">
                        <h1 class="font-bold text-gray-100 text-xl">Montevideo, Uruguay</h1>
                        <!-- <p class="text-gray-500 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p> -->
                    </div>
                </div>
                <div class="flex pt-10">
                    <div class="flex flex-col justify-center p-5 lg:p-0">
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
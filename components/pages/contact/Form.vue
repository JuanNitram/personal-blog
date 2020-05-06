<template>
    <div id="contact-form" class="w-full pt-5">
        <form>
            <div class="flex">
                <div class="w-1/2 pr-2">
                    <input id="name" name="name" class="w-full p-4 h-10 bg-gray-850 text-gray-100 border-2 border-gray-700 rounded-lg" placeholder="Full name"/>
                    <input id="email" name="email" class="w-full p-4 mt-5 h-10 bg-gray-850 text-gray-100 border-2 border-gray-700 rounded-lg" placeholder="Email"/>
                    <input id="phone" name="phone" class="w-full p-4 mt-5 h-10 bg-gray-850 text-gray-100 border-2 border-gray-700 rounded-lg" placeholder="Phone"/>
                </div>
                <div class="w-1/2 pl-2 flex justify-center items-center">
                    <textarea id="message" name="message" class="w-full h-full bg-gray-850 text-gray-100 border-2 border-gray-700 rounded-lg"></textarea>
                </div>
            </div>
            <div class="flex pt-5">
                <div class="g-recaptcha rounded-lg" data-sitekey="6LclE_MUAAAAAFi3KKCAOGXhGFCRbkaIyvaOjU6z" data-theme="dark"></div>
            </div>
            <div class="flex pt-5">
                <Button text="Send message"/>
            </div>
        </form>
    </div>
</template>

<script>
    import Button from '../../shared/Button';

    export default {
        components: {
            Button
        }
    }
</script>
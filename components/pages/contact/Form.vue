<template>
    <div id="contact-form" class="w-full px-2 pt-5">
        <form @submit.prevent="handleSubmit">
            <div class="block lg:flex">
                <div class="w-full lg:w-1/2 pr-0 lg:pr-2">
                    <input v-validate="'required'" id="name" name="name" class="w-full p-4 h-10 bg-gray-850 text-gray-100 border-2 border-gray-700 rounded-lg" placeholder="Full name"/>
                    <span v-show="errors.has('name')" class="ml-1 text-xs text-red-600">{{ errors.first('name') }}</span>
                    <input v-validate="'required|email'" id="email" name="email" class="w-full p-4 mt-4 h-10 bg-gray-850 text-gray-100 border-2 border-gray-700 rounded-lg" placeholder="Email"/>
                    <span v-show="errors.has('email')" class="ml-1 text-xs text-red-600">{{ errors.first('email') }}</span>
                    <input v-validate="'required'" id="phone" name="phone" class="w-full p-4 mt-4 h-10 bg-gray-850 text-gray-100 border-2 border-gray-700 rounded-lg" placeholder="Phone"/>
                    <span v-show="errors.has('phone')" class="ml-1 text-xs text-red-600">{{ errors.first('phone') }}</span>
                </div>
                <div class="w-full lg:w-1/2 pl-0 lg:pl-2 flex justify-center items-center">
                    <textarea v-validate="'required'" id="message" name="message" class="w-full p-4 mt-4 lg:mt-0 h-full bg-gray-850 text-gray-100 border-2 border-gray-700 rounded-lg" placeholder="Message"></textarea>
                </div>
                    <span v-show="errors.has('message')" class="ml-1 text-xs text-red-600">{{ errors.first('message') }}</span>

            </div>
            <div class="block lg:flex pt-5">
                <div class="g-recaptcha rounded-lg" data-sitekey="6LclE_MUAAAAAFi3KKCAOGXhGFCRbkaIyvaOjU6z" data-theme="dark"></div>
            </div>
            <div class="block lg:flex pt-4">
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
        },

        data() {
            return {
                form: {
                    name: '',
                    email: '',
                    phone: '',
                    message: '',
                }
            }
        },

        methods: {
            handleSubmit() {
                this.$validator.validateAll().then((isValid) => {
                    if(isValid === true){
                        console.log(this);
                        this.$axios.post('/contact/send', this.form)
                    }
                })
            },
        }
    }
</script>
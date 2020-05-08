<template>
    <nav id="navbar" class="flex items-center justify-between flex-wrap bg-transparent p-6">
        <div class="flex items-center flex-shrink-0 text-gray-400 mr-6">
            <nuxt-link to="/">
                <img src="~assets/img/logo.svg" class="h-10"/>
            </nuxt-link>
            <!-- <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg> -->
            <!-- <span class="font-semibold text-xl tracking-tight">Juan Vargas</span> -->
        </div>
        <div class="block lg:hidden">
            <button class="flex items-center px-3 py-2 border rounded text-gray-400 border-gray-400 hover:text-white hover:border-white" @click="handleButtonClick">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
        </div>

        <div class="hidden lg:flex lg:items-center lg:w-auto">
            <div class="text-sm lg:flex-grow">
                <nuxt-link to="/" class="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white mr-4">
                    About Me
                </nuxt-link>
                <nuxt-link to="/resume" class="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white mr-4">
                    Resume
                </nuxt-link>
                <nuxt-link to="/blog" class="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white mr-4">
                    Blog
                </nuxt-link>
                <nuxt-link to="/contact" class="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white">
                    Contact
                </nuxt-link>
            </div>
        </div>

        <div v-show="showDropdown" class="modal fixed w-full h-full top-0 left-0 flex items-center justify-center z-50">
            <div class="modal-overlay absolute w-full h-full bg-gray-900 opacity-95"></div>

            <div class="modal-container fixed w-full h-full z-50 overflow-y-auto ">
                
                <div class="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-black text-sm z-50" @click="showDropdown = false">
                    <svg class="fill-current text-gray-100" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 18 18">
                        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                    </svg>
                </div>

                <!-- Add margin if you want to see grey behind the modal-->
                <div class="modal-content h-full container mx-auto h-auto text-left p-4">
                
                    <!--Title-->
                    <div class="flex h-full justify-between items-center">
                        <div class="block mx-auto">
                            <p class="w-full block text-4xl font-bold text-center text-gray-100">
                                <a data-to="/" @click="handleRedirect">
                                    About Me
                                    
                                </a>
                            </p>
                            <p class="w-full block text-4xl font-bold text-center text-gray-100">
                                <a data-to="/resume" @click="handleRedirect">
                                    Resume
                                </a>
                            </p>
                            <p class="w-full block text-4xl font-bold text-center text-gray-100">
                                <a data-to="/blog" @click="handleRedirect">
                                    Blog
                                </a>
                            </p>
                            <p class="w-full block text-4xl font-bold text-center text-gray-100">
                                <a data-to="/contact" @click="handleRedirect">
                                    Contact
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                showDropdown: false
            }
        },

        methods: {
            handleButtonClick() {
                this.showDropdown = !this.showDropdown;
            },

            handleRedirect(event) {
                event.preventDefault();
                console.log(event.target.dataset['to']);
                this.$router.push(event.target.dataset['to']);
                this.showDropdown = false;
                // console.log(event.target.href);
            }
        }
    }
</script>

<style>
    #navbar {
        min-height: 10vh;
    }
</style>
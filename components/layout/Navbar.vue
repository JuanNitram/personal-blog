<template>
    <nav id="navbar" class="flex items-center justify-between flex-wrap bg-transparent p-6 px-6 lg:px-16">
        <div class="flex items-center flex-shrink-0 text-gray-400 mr-6">
            <nuxt-link to="/">
                <img src="~assets/img/logo-2.svg" class="h-12"/>
            </nuxt-link>
        </div>
        <div class="block lg:hidden" style="z-index: 100">
            <!-- <button class="flex items-center px-3 py-2 rounded text-gray-400 border-gray-400 hover:text-white hover:border-white" @click="handleButtonClick">
                <svg class="fill-current h-8 w-8 text-blue-800" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button> -->
            <button class="hamburger hamburger--elastic hidden" style="outline: none" :class="{ 'is-active' : showDropdown}" type="button" aria-label="Menu" aria-controls="navigation" @click="handleButtonClick">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>
        </div>

        <div class="hidden lg:flex lg:items-center lg:w-auto">
            <div class="text-sm lg:flex-grow">
                <nuxt-link to="/" class="block mt-4 lg:inline-block lg:mt-0 text-gray-100 hover:text-white mr-4">
                    About Me
                </nuxt-link>
                <nuxt-link to="/resume" class="block mt-4 lg:inline-block lg:mt-0 text-gray-100 hover:text-white mr-4">
                    Resume
                </nuxt-link>
                <!-- <nuxt-link to="/blog" class="block mt-4 lg:inline-block lg:mt-0 text-gray-100 hover:text-white mr-4">
                    Blog
                </nuxt-link> -->
                <nuxt-link to="/contact" class="block mt-4 lg:inline-block lg:mt-0 text-gray-100 hover:text-white">
                    Contact
                </nuxt-link>
            </div>
        </div>

        <transition name="page">
            <div v-show="showDropdown" class="modal fixed w-full h-full top-0 left-0 flex items-center justify-center z-50">
                <div class="modal-overlay absolute w-full h-full bg-gray-900 opacity-95"></div>

                <div class="modal-container fixed w-full h-full z-50 overflow-y-auto ">
                    
                    <div class="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-6 mr-6 text-black text-sm z-50" @click="showDropdown = false">
                    </div>

                    <div class="modal-content h-full container mx-auto h-auto text-left p-4">
                        <div class="flex h-full justify-between items-center">
                            <div class="block mx-auto">
                                <p class="w-full block text-4xl font-bold text-center text-blue-800">
                                    <a data-to="/" @click="handleRedirect">
                                        About Me
                                        
                                    </a>
                                </p>
                                <p class="w-full block text-4xl font-bold text-center text-blue-800">
                                    <a data-to="/resume" @click="handleRedirect">
                                        Resume
                                    </a>
                                </p>
                                <!-- <p class="w-full block text-4xl font-bold text-center text-blue-800">
                                    <a data-to="/blog" @click="handleRedirect">
                                        Blog
                                    </a>
                                </p> -->
                                <p class="w-full block text-4xl font-bold text-center text-blue-800">
                                    <a data-to="/contact" @click="handleRedirect">
                                        Contact
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
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
                this.$router.push(event.target.dataset['to']);
                setTimeout(() => {
                    this.showDropdown = false;
                }, 200)
            }
        }
    }
</script>

<style>
    #navbar {
        min-height: 10vh;
    }

    .hamburger-inner::before {
        background-color: #2c5282;
    }

    .hamburger-inner::after {
        background-color: #2c5282!important;
    }

    .hamburger-inner {
        background-color: #2c5282!important;
    }
</style>
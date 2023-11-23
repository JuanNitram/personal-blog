<template>
    <nav id="navbar" class="flex items-center justify-between flex-wrap bg-transparent p-6 px-6 lg:px-16">
        <div class="flex items-center flex-shrink-0 text-gray-400 mr-6">
            <nuxt-link to="/">
                <img src="~assets/img/logo-2.svg" class="h-12"/>
            </nuxt-link>
        </div>
        <div class="block" style="z-index: 100">
            <!-- <button class="flex items-center px-3 py-2 rounded text-gray-400 border-gray-400 hover:text-white hover:border-white" @click="handleButtonClick">
                <svg class="fill-current h-8 w-8 text-gray-400" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button> -->
            <button class="hamburger hamburger--elastic hidden" style="outline: none" :class="{ 'is-active' : showDropdown}" type="button" aria-label="Menu" aria-controls="navigation" @click="handleButtonClick">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>
        </div>


        <transition name="zoom">
            <div v-show="showDropdown" class="modal fixed w-full h-full top-0 left-0 flex items-center justify-center z-50">
                <div class="modal-overlay absolute w-full h-full bg-white opacity-95"></div>

                <div class="modal-container fixed w-full h-full z-50 overflow-y-auto ">
                    
                    <div class="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-6 mr-6 text-black text-sm z-50" @click="showDropdown = false">
                    </div>

                    <div class="modal-content h-full container mx-auto h-auto text-left p-4">
                        <div class="flex h-full justify-between items-center">
                            <div class="block mx-auto">
                                <p class="w-full block text-4xl md:text-6xl font-bold text-center text-gray-400">
                                    <a data-to="/" @click="handleRedirect" class="cursor-pointer">
                                        About Me
                                    </a>
                                </p>
                                <p class="w-full block text-4xl md:text-6xl font-bold text-center text-gray-400">
                                    <a data-to="/resume" @click="handleRedirect" class="cursor-pointer">
                                        Resume
                                    </a>
                                </p>
                                <!-- <p class="w-full block text-4xl font-bold text-center text-gray-400">
                                    <a data-to="/blog" @click="handleRedirect">
                                        Blog
                                    </a>
                                </p> -->
                                <p class="w-full block text-4xl md:text-6xl font-bold text-center text-gray-400">
                                    <a data-to="/contact" @click="handleRedirect" class="cursor-pointer">
                                        Contact
                                    </a>
                                </p>
                                <div class="w-full absolute bottom-0 left-0 right-0 block text-center text-gray-400 md:hidden">
                                    <div class="py-2 lg:py-0">
                                        <a href="https://uy.linkedin.com/in/juan-vargas-807b72142" target="_blank">
                                            <i class="fab fa-linkedin-in fa-lg mr-2"></i>
                                            
                                        </a>
                                        <a href="https://github.com/JuanNitram" target="_blank">
                                            <i class="fab fa-github fa-lg"></i>
                                        </a>
                                        <a href="https://www.upwork.com/o/profiles/users/~01c3b3dbb6c4e59e6c/" target="_blank">
                                            <svg id="Layer_1" style="fill: #2c5282; height: 25px; display: inline; margin-left: 6px;" version="1.1" viewBox="0 0 56.7 56.7" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M42.4,17.7c-5.3,0-9.3,3.5-10.9,9c-2.5-3.9-4.5-8.3-5.6-12.1h-5.6v14.7c0,2.9-2.4,5.3-5.3,5.3c-2.9,0-5.3-2.4-5.3-5.3V14.7  H4.3v14.7c0,6.1,4.9,11,10.9,11c6,0,10.9-4.9,10.9-11v-2.5c1.1,2.2,2.5,4.6,4,6.7l-3.5,16.3h5.7L34.7,38c2.2,1.4,4.7,2.2,7.7,2.2  c6.1,0,11.1-5,11.1-11.4C53.5,22.7,48.5,17.7,42.4,17.7z M42.4,34.6c-2.2,0-4.5-1-6.3-2.5l0.6-2.2v-0.1c0.4-2.4,1.7-6.4,5.8-6.4  c3.1,0,5.6,2.5,5.6,5.6C48,32.1,45.3,34.6,42.4,34.6z"/></svg>
                                        </a>
                                    </div>
                                </div>
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
        },

        watch: {
            showDropdown(value) {
                console.log(document.getElementsByTagName('body'), value)
                if(value === true) {
                    document.getElementsByTagName("body")[0].style.overflow = "hidden";
                } else {
                    document.getElementsByTagName("body")[0].style.overflow = "";
                }
            }
        }
    }
</script>

<style>
    #navbar {
        min-height: 10vh;
    }

    .hamburger-inner::before {
        background-color: #949494;
    }

    .hamburger-inner::after {
        background-color: #949494!important;
    }

    .hamburger-inner {
        background-color: #949494!important;
    }
</style>
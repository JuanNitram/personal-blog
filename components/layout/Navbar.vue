<template>
    <nav id="navbar" class="flex items-center justify-between flex-wrap bg-transparent p-6">
        <div class="flex items-center flex-shrink-0 text-gray-400 mr-6">
            <img src="~assets/img/logo.png" class="h-8"/>
            <!-- <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg> -->
            <!-- <span class="font-semibold text-xl tracking-tight">Juan Vargas</span> -->
        </div>
        <div class="block lg:hidden">
            <button class="flex items-center px-3 py-2 border rounded text-gray-400 border-gray-400 hover:text-white hover:border-white" @click="handleButtonClick">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
        </div>
        <div v-show="showDropdown === true" class="w-full lg:flex lg:items-center lg:w-auto">
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
            }
        }
    }
</script>

<style>
    #navbar {
        min-height: 10vh;
    }
</style>
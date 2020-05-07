<template>
    <div id="hero" class="block lg:flex mx-auto px-2 lg:px-72 py-12">
        <div class="w-full lg:w-1/2 flex flex-col justify-center items-center py-6">
            <img id="personal-image" src="~/assets/img/me.png" class="rounded-full border-gray-700 w-56 h-56 lg:w-96 lg:h-96 shadow-lg"/>
        </div>
        <div class="w-full lg:w-1/2 flex flex-col justify-center">
            <h3 class="text-md lg:text-xl text-center lg:text-left text-gray-400">Juan Vargas</h3>
            <h1 class="text-xl lg:text-2xl lg:text-4xl text-center lg:text-left text-gray-100">Software Developer</h1>
            <p class="text-sm lg:text-md text-center lg:text-left text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe earum, eius velit commodi porro recusandae cupiditate odio eos quae et! Architecto vero nihil atque, aliquid totam aliquam. Ducimus, soluta quis.</p>
            <div class="hidden lg:flex justify-center lg:justify-start pt-6">
                <Button text="Download CV" />
                <Button text="Contact Me" />
            </div>
        </div>
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

<style>
  #personal-image {
    border-width: 14px;
    box-shadow: 0 0 25px 0 rgba(0,0,0,.8)
  }
</style>
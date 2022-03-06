<template>
    <div id="hero" class="block lg:flex mx-auto px-5 md:px-24 lg:px-32 xl:px-72 pb-20 lg:pb-12 pt-12 xl:pt-0 mt-0 xl:-mt-12">
        <div class="w-full lg:w-1/2 flex flex-col justify-center items-center py-6">
          <img id="personal-image" src="~/assets/img/me-4.JPG" class="rounded-full border-gray-700 w-64 h-64 lg:w-72 lg:h-72 xl:w-96 xl:h-96 shadow-lg"/>
        </div>
        <div class="w-full lg:w-1/2 flex flex-col justify-center">
            <h3 class="text-lg lg:text-xl text-center lg:text-left text-gray-400">Juan Vargas</h3>
            <h1 class="text-3xl lg:text-4xl text-center lg:text-left text-gray-100">Development Team Leader</h1>
            <p class="text-sm lg:text-md text-center lg:text-left text-gray-400">{{ $t('description') }}</p>
            <div class="hidden lg:flex justify-center lg:justify-start pt-6">
                <!-- <Button :text="$t('downloadCv')" /> -->
                <nuxt-link to="/contact">
                  <Button :text="$t('contactMe')" />
                </nuxt-link>
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

  @media (min-width: 1280px) {
    #hero {
      height: 100vh;
    }
  }
</style>

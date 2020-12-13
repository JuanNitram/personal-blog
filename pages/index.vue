<template>
  <div>
    <Hero/>
    <Services />
    <!-- <Testimonials/> -->
    <Facts />
  </div>
</template>

<script>
  import Hero from '../components/pages/home/Hero';
  import Services from '../components/pages/home/Services';
  import Facts from '../components/pages/home/Facts';
  import Testimonials from '../components/pages/home/Testimonials';

  export default {
    components: {
      Hero,
      Services,
      Facts,
      Testimonials
    },
  }
</script>

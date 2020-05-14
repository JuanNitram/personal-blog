<template>
  <div>
    <Hero/>
    <Services />
    <Facts />
    <!-- <Stack /> -->
  </div>
</template>

<script>
  import Hero from '../components/pages/home/Hero';
  import Services from '../components/pages/home/Services';
  import Facts from '../components/pages/home/Facts';
  import Stack from '../components/pages/home/Stack';

  export default {
    components: {
      Hero,
      Services,
      Facts,
      Stack
    },
  }
</script>

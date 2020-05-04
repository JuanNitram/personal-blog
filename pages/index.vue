<template>
  <div>
    <Hero/>
    <Services />
    <Facts />
  </div>
</template>

<script>
  import Hero from '../components/pages/home/Hero';
  import Services from '../components/pages/home/Services';
  import Facts from '../components/pages/home/Facts';

  export default {
    components: {
      Hero,
      Services,
      Facts
    }
  }
</script>

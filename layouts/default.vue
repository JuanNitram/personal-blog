<template>
  <div class="bg-gray-900">
    <transition name="page">
      <Preloader v-show="loading"/>
    </transition>

    <header>
      <Navbar/>
    </header>

    <main>
      <nuxt />
    </main>

    <Footer />
  </div>
</template>

<script>
  import Navbar from '../components/layout/Navbar';
  import Footer from '../components/layout/Footer';
  import Preloader from '../components/layout/Preloader';

  export default {
    components: {
      Navbar,
      Footer,
      Preloader
    },
    
    data() {
      return {
        loading: true
      }
    },

    mounted() {
      setTimeout(() => {
        this.loading = false
      }, 3000)
    }
  }
</script>

<style>
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #777777;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #444444;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #333333;
  }

  .page-enter-active, .page-leave-active {
    transition: opacity .5s;
  }
  .page-enter, .page-leave-to {
    opacity: 0;
  }
</style>

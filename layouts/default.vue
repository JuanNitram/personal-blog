<template>
  <div class="bg-gray-900">
    <transition name="page">
      <Preloader v-show="loading"/>
    </transition>

    <header>
      <Navbar/>
    </header>

    <main>
      <transition name="zoom">
        <nuxt />
      </transition>
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
      }, 1000)
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

  .zoom-enter-active,
  .zoom-leave-active {
    animation-duration: 0.5s;
    animation-fill-mode: both;
    animation-name: zoom;
  }

  .zoom-leave-active {
    animation-direction: reverse;
  }

  @keyframes zoom {
    from {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }

    100% {
      opacity: 1;
    }
  }
</style>

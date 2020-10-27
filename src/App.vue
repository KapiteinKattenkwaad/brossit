<template>
  <div >


<!--    <router-link to="/testimonials"> testis</router-link>-->

<!--    <router-link :to="{ name: 'anderlecht' }"> Got anderlecht hier</router-link>-->
<!--    <router-link to="/"> home</router-link>-->
        <transition  name="fade"
                     mode="out-in"
        >
          <router-view />

      </transition>
  </div>
</template>

<script>
import './assets/styles/main.scss'


export default {


};
</script>

<style scoped>


    .fade-enter-active,
    .fade-leave-active {
        opacity: 0;
        transition-duration: 0.3s;
        transition-property: opacity;
        transition-timing-function: ease;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }

</style>

<template>
  <div class="navigation">
    <div class="navmob">
      <div class="navmob__small-logo">
        <router-link to="/">
<!--          <img loading=lazy src="../assets/img/logo.svg" alt="">-->
        </router-link>
      </div>
      <a href="#contact">
            <div class="navmob__contact button button--green">
              Contact us
            </div>
      </a>
      <input type="checkbox" class="navmob__checkbox" id="navi-toggle" ref="naviToggle" >


    <div class="">
      <router-link  class="navmob__button--text" :to="{name: 'homeindex'}"> <span class="navmob__arrow">➜</span>  Back </router-link>
    </div>

    </div>

  </div>
</template>

<script>


  export default {
    data: function () {
      return {
        naviToggle: true,
        counter: 0
      }
    },
    components: {
      // AnchorRouterLink
    },
    methods: {
        showNav: function(){
          document.getElementById('navi-toggle').checked = !document.getElementById('navi-toggle').checked
      }

    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.active {
  background-image: unset;
  opacity: 0.2 !important;
}

  .active + .navmob__nav {
    background-image: unset;
    opacity: 0;
  }

  .active ~ .navmob__nav {
    opacity: 0;
  }

  .navmob__arrow {
    transform: rotate(180deg);
    display: inline-block;

  }
  .navmob__button--text {
    transition: all .3s ease;
    &:hover {
      padding-left: 5px;
    }
  }


</style>

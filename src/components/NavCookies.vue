<template>
  <div class="navigation">
    <div class="navmob">
      <div class="navmob__small-logo">
        <router-link to="/">

        </router-link>
      </div>
      <input type="checkbox" class="navmob__checkbox" id="navi-toggle" ref="naviToggle" >


    <div class="">
      <router-link  class="navmob__button--text" :to="{name: 'homeindex'}"> <span class="navmob__arrow">➜</span>  Back </router-link>
    </div>


<!--      <label for="navi-toggle" class="navmob__button"-->
<!--      >-->
<!--        <span class="navmob__icon">&nbsp;</span>-->
<!--      </label>-->

<!--      <div class="navmob__background"-->

<!--      >&nbsp;</div>-->

<!--      <nav class="navmob__nav"-->
<!--      >-->
<!--        <div class="">-->
<!--          <a href="https://ixpole-landing.netlify.app/#contact" @click="showNav">-->
<!--            <div class="navmob__contact button button&#45;&#45;green">-->
<!--              Contact us-->
<!--            </div>-->
<!--          </a>-->
<!--          <ul class="navmob__list">-->
<!--            <li  @click="showNav" class="navmob__item navmob__what">-->
<!--              <router-link  class="navmob__link navmob__link&#45;&#45;first-last" :to="{name: 'homeindex', hash:'#what'}">What is iXpole?</router-link>-->
<!--            </li>-->
<!--&lt;!&ndash;            <router-link :to="{ name: 'homeindex', hash: '#customer' }">&ndash;&gt;-->
<!--&lt;!&ndash;              Home Footer&ndash;&gt;-->
<!--&lt;!&ndash;            </router-link>&ndash;&gt;-->
<!--&lt;!&ndash;            <li  @click="showNav" class="navmob__item navmob__customer">&ndash;&gt;-->
<!--&lt;!&ndash;            <anchor-router-link&ndash;&gt;-->
<!--&lt;!&ndash;                    :to="{name: 'homeindex', hash: '#revenue'}">Maximise revenues</anchor-router-link>&ndash;&gt;-->
<!--&lt;!&ndash;            </li>&ndash;&gt;-->
<!--&lt;!&ndash;            <li class="navmob__item navmob__customer"&ndash;&gt;-->
<!--&lt;!&ndash;                @click="showNav"&ndash;&gt;-->
<!--&lt;!&ndash;            >&ndash;&gt;-->
<!--&lt;!&ndash;              <a href="#customer" class="navmob__link">Customer journey</a></li>&ndash;&gt;-->
<!--            <li  @click="showNav" class="navmob__item navmob__customer">-->
<!--              <router-link  class="navmob__link" :to="{name: 'homeindex', hash:'#customer'}">Customer journey</router-link>-->
<!--            </li>-->

<!--            <li class="navmob__item navmob__maximise"-->
<!--                @click="showNav"-->
<!--            ><router-link :to="{name: 'homeindex', hash:'#revenue'}" class="navmob__link">Maximise revenues</router-link></li>-->

<!--            <li class="navmob__item navmob__reduce"-->
<!--                @click="showNav"-->
<!--            ><router-link :to="{name: 'homeindex', hash:'#reduce'}" class="navmob__link">Reduce costs</router-link></li>-->
<!--            <li class="navmob__item navmob__testimonials"-->
<!--                @click="showNav"-->
<!--            ><router-link :to="{name: 'homeindex', hash:'#testimonial'}"  class="navmob__link navmob__link&#45;&#45;first-last">Testimonials</router-link></li>-->
<!--            <a href="#download">-->
<!--              <div class="navmob__download button button&#45;&#45;blue">-->
<!--                Download whitepaper-->
<!--              </div>-->
<!--            </a>-->
<!--          </ul>-->
<!--        </div>-->

<!--      </nav>-->
    </div>

  </div>
</template>

<script>

  // import AnchorRouterLink from 'vue-anchor-router-link'

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

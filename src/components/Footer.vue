<template>
  <div class="footer" id="footer">
      <footer>
          <cookie-law theme="dark-ix"></cookie-law>
      </footer>

  </div>
</template>

<script>
  import CookieLaw from 'vue-cookie-law'
  export default {
    components: { CookieLaw }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

    .Cookie--ix {


    }
    .Cookie {
        background: #3D418F !important;
        color: #fff;
        padding: 1.250em;
    }

    .Cookie__content {
        font-size: 1.2rem !important;

    }
    @media (max-width: 992px) {
        .Cookie__content {
            text-align: center !important;
        }
    }

    @media screen and (min-width: 48rem) {
        .Cookie > * {
            margin: 0;
        }
    }


        .Cookie__buttons {
        display: flex;
        flex-direction: row;
    }
    .Cookie__button {
        background: #DE2213 !important;
        padding: 0.625em 3.125em;
        color: #fff;
        border-radius: 0;
        border: 0;
        font-size: 1em;
    }

    .Cookie--ix {

    }
    .Cookie--dark-ix .Cookie__button {
        background: #DE2213 !important;
        padding: 0.625em 3.125em;
        color: #fff;
        border-radius: 0;
        border: 0;
        font-size: 1em;
    }
    .Cookie--dark-ix div.Cookie__button:hover {

    }

     .Cookie__button {
        background: #DE2213 !important;
         color: #fff !important;
    }

</style>

<template>
  <div class="notfound" id="">
     <h2 class="h2">
         Uh oh!
     </h2>
      <p>
          This page doesn't exist anymore
      </p>
      <router-link  class="notfound__button" :to="{name: 'homeindex'}">Take me home</router-link>

  </div>
</template>

<script>

</script>


<style scoped lang="scss">

    .notfound {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        h2 {
            color: #E11F10;
        }
        p {
            font-size: 1.6rem;
            margin: 3rem 0;

        }
        &__button {
            padding: 12px 18px;
            text-transform: uppercase;
            text-decoration: none;
            display: inline-block;
            border-radius: 0 10rem 10rem 10rem;
            color: white;
            font-weight: bold;
            //float: left;
            position: relative;
            font-size: 1.4rem;
            border: none;
            cursor: pointer;
            background-color: #25A2E0;
            border: none;
            background-image: linear-gradient(135deg, transparent 0%, transparent 50%, #202156 50%);
            background-size: 300%;
            transition: all 1s;
            &::after {
                //background-color: $color-blue;
            }

            &:hover {
                color: #fff;
                background-position: 100%;
                transform: translateX(10px);
            }
        }
    }

</style>

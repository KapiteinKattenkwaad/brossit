<template>
    <div class="hello">
<!--        <div id="loading" v-if="isLoading">-->
<!--            <img class="loading-img" src="./../assets/img/logo.svg" alt="iXpole Logo">-->
<!--        </div>-->
<!--        <div v-else>-->
<!--            <div :class="[ 'g-cursor', { 'g-cursor_hover': hover }, {'g-cursor_hide': hideCursor} ]">-->
<!--                <div :style="cursorCircle" class="g-cursor__circle"></div>-->
<!--                <div class="g-cursor__point" ref="point" :style="cursorPoint"></div>-->
<!--            </div>-->
            <Nav></Nav>
        <Header></Header>
        <Wat></Wat>
        <Hoe></Hoe>
        <Wie></Wie>
        <Waarom></Waarom>
        <Made></Made>
            <Footer></Footer>
        </div>

<!--    </div>-->
</template>

<script>
  import './../assets/styles/main.scss'
  import Nav from './../components/Nav';
  import Header from './../components/Header';
  import Wat from './../components/Wat';
  import Hoe from './../components/Hoe';
  import Wie from './../components/Wie';
  import Waarom from './../components/Waarom';
  import Made from './../components/MadeBy';
  import Footer from './../components/Footer';

  export default {
    data () {
      return {
        isLoading: true,
        xChild: 0,
        yChild: 0,
        xParent: 0,
        yParent: 0,
        hover: false,
        hideCursor: false
      }
    },
    components: {
      Nav,
      Header,
      Wat,
      Hoe,
      Wie,
      Waarom,
      Made,
      Footer

    },
    computed: {
      cursorCircle() {
        return `transform: translateX(${this.xParent}px) translateY(${this.yParent}px) translateZ(0) translate3d(0, 0, 0);`
      },
      cursorPoint() {
        return `transform: translateX(${this.xChild - 3}px) translateY(${this.yChild - 3}px) translateZ(0) translate3d(0, 0, 0);`
      }
    },
    methods: {
      moveCursor(e) {
        this.xChild = e.clientX;
        this.yChild = e.clientY;
        setTimeout(() => {
          this.xParent = e.clientX - 15;
          this.yParent = e.clientY - 15;
        }, 100);
      }
    },
    mounted () {
      setTimeout(() => {
        this.isLoading = false
      }, 3000);
      document.addEventListener("mousemove", this.moveCursor);
      document.addEventListener('mouseleave', () => {
        this.hideCursor = true;
      });
      document.addEventListener('mouseenter', () => {
        this.hideCursor = false;
      });
    }
  }
</script>

<style  lang="scss">

    #loading {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        text-align: center;
    }
    .loading-img {
        width: 150px;
        height: 150px;
        animation: rotateImg 3s ease-in-out;
        position: absolute;
        opacity: .2;
        transform: scale(.1);

    }

    @keyframes rotateImg {
        0% {
            transform: rotate(0deg) scale(1) ;
            opacity: 1;
            /*top: 50%;*/
            /*left: 50%;*/
        }
        20% {
            transform: rotate(0deg) scale(1);
        }
        40% {
            transform: rotate(0deg) scale(1.2);
        }
        45% {
            transform: rotate(0deg) scale(1);
        }

        60% {
            transform: rotate(520deg) scale(.4);
            opacity: .6;
        }
        80% {
            transform: rotate(360deg) scale(.2);
            opacity: .2;
        }

        100% {
            transform: rotate(360deg) scale(.2);
            opacity: 0;
        }
    }



    .g-cursor {

    &_hide {
         opacity: 0;
         width: 0px;
         height: 0px;
         transition: width .6s ease,
         height .6s ease,
         opacity .6s ease;
     }

    &__circle {
         pointer-events: none;
         user-select: none;
         top: 0;
         left: 0;
         position: fixed;
         width: 30px;
         height: 30px;
         border: 2px solid #202156;
         border-radius: 100%;
         z-index: 5555;
         backface-visibility: hidden;
         transition: opacity .6s ease;
        @media (max-width:992px) {
            border: none;
        }
     }

    &__point {
         top: 0;
         left: 0;
         position: fixed;
         width: 10px;
         height: 10px;
         pointer-events: none;
         user-select: none;
         border-radius: 100%;
         background: #202156;
         z-index: 55555555;
         backface-visibility: hidden;
         will-change: transform;
        @media (max-width:992px) {
           background: none;
        }
     }

    &:hover {
    .g-cursor__circle {
        opacity: 0;
        width: 60px;
        height: 60px;
        transition: width .6s ease,
        height .6s ease,
        opacity .6s ease;
    }
    }
    }


</style>

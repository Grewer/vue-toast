<template>
    <transition name="bounce">
        <div class="box" v-if="!!time" @click="clickBox">
            {{content}}
        </div>
    </transition>
</template>

<script>
  export default {
    props: {
      content: {
        required: true,
        type: String
      }
    },
    data() {
      return {
        time: 0 // todo props
      }
    },
    methods: {
      clickBox() {
        console.log('click')
      }
    }

  }

</script>
<style scoped>
    .box {
        width: 1.26rem;
        height: .2rem;
        background-color: rgba(0, 0, 0, .8);
        color: #ffffff;
        font-size: .32rem;
        position: fixed;
        border-radius: .08rem;
        top: -10%;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        display: flex;
        align-items: center;
        text-align: center;
        padding: 0.4rem;
        z-index: 2500;
    }

    .bounce-enter-active {
        animation: bounce-in .2s;
    }

    .bounce-leave-active {
        animation: bounce-in .2s reverse;
    }

    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }
</style>

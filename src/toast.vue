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
      },
      time: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        asyncFun: null,
      }
    },
    watch: {
      time(n) {
        if (this.asyncFun === null) {
          this.setTime()
        }
      }
    },
    methods: {
      setTime() {
        this.asyncFun = setTimeout(() => {
          if (this.time > 0) {
            this.$emit('update:time', this.time-1)
            this.setTime()
          } else {
            this.asyncFun = null
          }
        }, 1000)
      },
      clickBox() {
        this.$emit('update:time', 0)
      }
    }

  }

</script>
<style scoped>
    .box {
        word-break: break-all;
        max-width: 30%;
        background-color: rgba(0, 0, 0, .8);
        color: #ffffff;
        position: fixed;
        border-radius: .2em;
        left: 50%;
        top: 50%;
        transform: translateX(-50%);
        transform: translate3d(-50%, 0, 0);
        margin: auto;
        display: flex;
        align-items: center;
        text-align: center;
        padding: .5em 1em;
        z-index: 2500;
        cursor: pointer;
    }

    .bounce-enter-active {
        animation: bounce-in .2s;
    }

    .bounce-leave-active {
        animation: bounce-in .2s reverse;
    }

    @keyframes bounce-in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
</style>

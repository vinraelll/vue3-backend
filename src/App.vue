<template>
  <div 
    class="app"
  >
    <div
      class="body-overlay"
      :class="{'is-open': authOpen}"
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
    <transition name="modal">
      <Auth 
        v-if="authOpen"
        @modalClose="authClose"
      />
    </transition>
    <Header 
      @openModalWindow="openAuth"
    />
    <Main 

    />
    <CreateForm 
      v-if="createModal"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Header from '@/components/Header.vue'
import Main from '@/components/Main.vue'
import Auth from '@/components/Auth'
import CreateForm from '@/components/CreateForm'
import { computed } from '@vue/reactivity'

export default {
  components: {
    Header,
    Main,
    Auth,
    CreateForm
  },
  data() {
    return {
      authOpen: false,
    }
  },
  methods: {
    ...mapActions(['fetchPosts']),
    openAuth() {
      this.authOpen = !this.authOpen
    },
    authClose() {
      this.authOpen = !this.authOpen
    }
  },
  async mounted() {
    this.fetchPosts()
    
  },
  computed: {
    ...mapGetters(['createModal']),
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #FFF;
  background-color: transparent;
  transition: all .3s linear;
}

.container {
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 10px;
}

.container-sm {
  max-width: 768px;
}

/* .body-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .5);
} */

.body-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  height: 100%;
  opacity: 0;
  visibility: hidden;
  transition: .6s linear .6s;
}

.body-overlay div::before,
.body-overlay div::after {
  position: fixed;
  left: 0;
  content: '';
  width: 100%;
  height: calc(100% / 6);
  background: rgba(0, 0, 0, .7);
  transform: rotateX(-270deg);
  transition: .3s linear;
}
.body-overlay div:nth-child(1)::before {
  top: 0;
}
.body-overlay div:nth-child(1)::after {
  top: calc(100% / 6);
  transition-delay: .1s;
}
.body-overlay div:nth-child(2)::before {
  top: calc(100% / 6 * 2);
  transition-delay: .2s;
}
.body-overlay div:nth-child(2)::after {
  top: calc(100% / 6 * 3);
  transition-delay: .3s;
}
.body-overlay div:nth-child(3)::before {
  top: calc(100% / 6 * 4);
  transition-delay: .4s;
}
.body-overlay div:nth-child(3)::after {
  bottom: 0;
  transition-delay: .5s;
}
.body-overlay.is-open {
  opacity: 1;
  visibility: visible;
  transition: .6s linear;
}
.body-overlay.is-open div::before,
.body-overlay.is-open div::after {
  transform: rotateX(0);
}

/* animations */

/* transform scale doesnt work with transition element */

.modal-enter-from {
  opacity: 0;
  /* transform: scale(0) !important; */
}

.modal-enter-to {
  /* transform: scale(1) !important; */
  opacity: 1;
}

.modal-enter-active,
.modal-leave-active {
  transition: all .2s linear;
}

.modal-leave-from {
  opacity: 1;
  /* transform: scale(1) !important; */
}

.modal-leave-to {
  opacity: 0;
  /* transform: scale(0) !important; */
}
</style>

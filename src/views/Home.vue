<template>
  <Main 
    class="main"
  />
  <CreateModal 
    v-if="createModal"
  />
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Main from '@/components/Main.vue'
import CreateModal from '@/components/CreateForm'

export default {
  components: {
    Main,
    CreateModal
  },
  data() {
    return {
      
    }
  },
  methods: {
    ...mapActions(['fetchPosts']),
    
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

main {
  color: var(--text-color);
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

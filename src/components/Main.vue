<template>
  <main class="main">
    <div class="container container-sm">
      <Tabs />
      <hr>
      <DynamicComponent 
        
      />
      <Loader 
        v-if="allPosts.length === 0"
      />
    </div>
  </main>
</template>

<script>
import DynamicComponent from '@/components/DynamicComponent.vue'
import Tabs from '@/components/Tabs.vue'
import Loader from '@/components/UI/Loader.vue'
import { mapGetters } from 'vuex'

export default {
computed: {
  ...mapGetters(['allPosts', 'inProgress', 'completed'])
},
components: {
    DynamicComponent,
    Tabs,
    Loader
  }
}
</script>

<style lang="scss" scoped>
main {
  color: var(--text-color);
}
</style>

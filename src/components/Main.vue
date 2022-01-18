<template>
  <main class="main">
    <div class="container container-sm">
      <Tabs />
      <hr>
      <Loader 
        v-if="loadingStatus"
      />
      <DynamicComponent 
        v-else-if="allPosts.length"
      />
      <Notification 
        v-else
      />
    </div>
  </main>
</template>

<script>
import Notification from '@/components/NoTodosNotification'
import DynamicComponent from '@/components/DynamicComponent.vue'
import Tabs from '@/components/Tabs.vue'
import Loader from '@/components/UI/Loader.vue'
import { mapGetters } from 'vuex'

export default {
computed: {
  ...mapGetters(['allPosts', 'incompleted', 'completed', 'loadingStatus'])
},
components: {
    DynamicComponent,
    Tabs,
    Loader,
    Notification
  }
}
</script>

<style lang="scss" scoped>
main {
  color: var(--text-color);
}
</style>

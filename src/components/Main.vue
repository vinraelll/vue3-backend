<template>
  <main class="main">
    <div class="container container-sm">
      <Tabs />
      <hr>
      <DynamicComponent />
    </div>
  </main>
</template>

<script>
import DynamicComponent from '@/components/DynamicComponent.vue'
import Tabs from '@/components/Tabs.vue'
import { mapGetters } from 'vuex'

export default {
computed: {
  ...mapGetters(['allPosts', 'inProgress', 'completed'])
},
components: {
    DynamicComponent,
    Tabs
  }
}
</script>

<style scoped>
main {
  color: #2a2f36;
}

.inProgress {
  margin-bottom: 30px;
}

.inProgress__header,
.completed__header {
  display: flex;
  justify-content: space-between;
}

.inProgress__counter,
.completed__counter {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 5px 4px 4px;
  font-size: 14px;
  font-weight: 700;
  border: 2px solid #2a2f36;
  border-radius: 20px;
}
</style>

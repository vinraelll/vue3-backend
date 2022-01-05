<template>
  <div>
    <component :is="tabName"></component>
  </div>
</template>

<script>
import AllTasks from '@/components/DynamicComponents/AllTasks.vue'
import Incompleted from '@/components/DynamicComponents/Incompleted.vue'
import Completed from '@/components/DynamicComponents/Completed.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'DynamicComponent',
  components: {
    AllTasks,
    Incompleted,
    Completed
  },
  computed: {
    ...mapGetters(['tabName'])
  },
}
</script>

<style>

</style>
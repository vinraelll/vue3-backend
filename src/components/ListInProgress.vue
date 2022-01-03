<template>
  <ul
    class="inProgress"
  >
    <TodoItem
    
    />
  </ul>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue'

export default {
  name: 'ListInProgress',
  components: {
    TodoItem
  }
}
</script>

<style>

</style>
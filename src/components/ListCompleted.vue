<template>
  <ul
    class="completed"
  >
    <TodoItem
    
    />
  </ul>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue'

export default {
  name: 'ListCompleted',
  components: {
    TodoItem
  }
}
</script>

<style>

</style>
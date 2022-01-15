<template>
  <ul
    
  >
    <TodoItem
      v-for="completed in allPosts"
      :key="completed.id"
    />
  </ul>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue'
import Button from '@/components/UI/Button.vue'
import Icon from "@/components/icomoon/Icomoon.vue";
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  components: {
    TodoItem,
    Button,
    Icon
  },
  methods: {
    ...mapActions(['fetchPosts']),
    ...mapMutations(['deletePost', 'editTodo', 'saveTodo']),
  },  
  computed: mapGetters(['allPosts']),
  async mounted() {
    this.fetchPosts()
    
  }
}
</script>

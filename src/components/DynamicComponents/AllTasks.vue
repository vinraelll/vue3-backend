<template>
  <transition-group
    tag="ul"
    name="list"
  >
    <TodoItem
      v-for="post in allPosts"
      :key="post.id"
      :id="post.id"
      :title="post.title"
      :description="post.description"
      @on-change="onChange($event)"
      @on-input="inputHandler($event)"
      @on-edit="onEdit($event)"
      @on-remove="deletePost($event)"
      @on-save="onSave"
      @on-textarea="onTextEdit($event)"
    />
  </transition-group>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import TodoItem from '@/components/TodoItem'

export default {
  created() {
    this.resetTasks()
  },
  components: {
    TodoItem,
  },
  data() {
    return {
      savedInputValue: '',
      description: ''
    }
  },
  methods: {
    ...mapActions(['fetchPosts']),
    ...mapMutations(['deletePost', 'editTodo', 'saveTodo', 'completeTodo', 'expandTodo', 'resetTasks']),
    onSave(id) {
      console.log('onSave', id);
    },
    onEdit(value) {
      this.savedInputValue = value
    },
    inputHandler(value) {
      this.savedInputValue = value
    },
    onTextEdit(e) {
      this.description = value
    },
    onChange(id) {
      this.completeTodo(id)
    }
  },
  computed: mapGetters(['allPosts']),
  
}
</script>

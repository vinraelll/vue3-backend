<template>
  <li 
    class="item"
    v-for="post in allPosts"
    :key="post.id"
  >
    <div 
      class="item__info"
      v-if="!post.editable"
    >
      <input 
        class="item__checkbox" 
        type="checkbox"
        id="item__checkbox"
      >
      <label 
        class="item__text"
        for="item__checkbox"
      >
        {{ post.title }}
      </label>
    </div>
    <input 
      type="text" 
      class="item__edit-input"
      :value="post.title"
      @input="inputHandler"
      v-else
    >
    <div
      v-if="!post.editable"
      class="item__controls"
    >
      <Button 
        class="item__edit-btn"
        @click="onEdit(post.id, post.title)"
      >
        <img src="../assets/images/edit.svg" alt="">
      </Button>
      <Button  
        class="item__delete-btn"
        @click="deletePost(post.id)"
      >
        <img src="../assets/images/delete.svg" alt="">
      </Button>
    </div>
    <div v-else>
      <Button 
        class="item__save-btn"
        @click="onSave(post.id, savedInputValue)"
      >
        <img src="../assets/images/save.svg" alt="">
      </Button>
    </div>
  </li>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import Button from '@/components/UI/Button.vue'

export default {
  components: {
    Button
  },
  data() {
    return {
      savedInputValue: ''
    }
  },
  methods: {
    ...mapActions(['fetchPosts']),
    ...mapMutations(['deletePost', 'editTodo', 'saveTodo']),
    onSave(id, value) {
      this.editTodo(id)
      this.saveTodo({ id, value })
      this.savedInputValue = ''
    },
    onEdit(id, value) {
      this.savedInputValue = value
      this.editTodo(id)
    },
    inputHandler(e) {
      this.savedInputValue = e.target.value
    }
  },
  computed: mapGetters(['allPosts']),
  async mounted() {
    this.fetchPosts()
  }
}
</script>

<style scoped>
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item:not(:last-child) {
  margin-bottom: 15px;
}

.item__controls {
  display: flex;
  justify-content: space-between;
  min-width: 100px;
}

.item__edit-input {
  width: 100%;
  max-width: 500px;
  margin-left: 18px;
  padding: 7px 7px 6px 7px;
  border: none;
  border-bottom: 1px solid #ccc;
  outline: transparent;
}

.item__edit-btn {
  margin-right: 10px;
}

.item__info {
  position: relative;
  padding: 0 25px;
}

.item__checkbox {
  position: absolute;
  left: 0;
  z-index: -1;
  opacity: 0;
}

.item__text::before {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  top: 1px;
  left: 0;
} 

.item__text::after {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  left: 3px;
  top: 4px;
  background-color: #2CC185;
  transition: all .2s ease;
  opacity: 0;
}

.item__checkbox:checked + .item__text::before {
  border: 2px solid #2CC185;
}

.item__checkbox:checked + .item__text::after {
  opacity: 1;
}

.item__checkbox:not(:checked) + .item__text::before {
  border: 2px solid #5d575f;
}

</style>
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
  min-width: 100px;
}

.item__edit-input {
  width: 100%;
  max-width: 500px;
  padding: 7px;
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

.item__text {
  cursor: pointer;
}

.item__checkbox {
  position: absolute;
  /* z-index: -1; */
  left: 0;
  /* padding-left: 25px; */
  /* opacity: 0; */
  cursor: pointer;
}

.item__text::before {
  content: '';
  position: absolute;
  width: 15px;
  height: 15px;
  left: 0;
  border: 1px solid #adb5bd;
  margin-right: 5px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50%;
  cursor: pointer;
  
}
/* 
.item__checkbox:checked + .item__text::before {
  border: 2px solid #4fc1de;
  background-color: #4fc1de;
}

.item__checkbox:checked + label::after {
  content:'';
  position: absolute;
  width: 10px;
  height: 10px;
  left: 0;
  transform: translateX(24%);
  border: 2px solid #4fc1de;
  background-color: #4fc1de;
}

.item__checkbox:checked + span::before {
   content:'';
   position: absolute;
   width: 16px;
   height: 16px;
   left: 0;
   top: 0;
   background-color: transparent;
   border-radius: 2px;
   border: 2px solid #4fc1de;
}
.item__checkbox:checked + span::after {
   content:'';
   position: absolute;
   width: 12px;
   height: 12px;
   transition: all .2s ease;
   opacity: 1;
   left: 4px;
   top: calc(50% - 6px);
   background-color: #4fc1de;
}
.item__checkbox:not(:checked) + span::before {
   content:'';
   position: absolute;
   width: 16px;
   height: 16px;
   left:0;
   top:calc(50% - 10px);
   background-color: transparent;
   border-radius: 2px;
   border: 2px solid #5d575f;
}
.item__checkbox:not(:checked) + span::after {
   content:'';
   position: absolute;
   width: 12px;
   height: 12px;
   transition: all .2s ease;
   opacity: 0;
   left: 4px;
   top: calc(50% - 6px);
   background-color: #7d25a9;
} */
</style>
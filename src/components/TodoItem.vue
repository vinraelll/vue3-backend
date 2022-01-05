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
    <div v-else>
      <input 
        type="text" 
        class="edit"
        :value="post.title"
        @input="inputHandler"
      >
    </div>
    <div
      v-if="!post.editable"
      class="item__controls"
    >
      <button 
        class="item__edit-btn"
        @click="onEdit(post.id, post.title)"
      >
        Edit task
      </button>
      <button 
        class="item__delete-btn"
        @click="deletePost(post.id)"
      >
        Delete task
      </button>
    </div>
    <div v-else>
      <button
        class="item__edit-btn"
        @click="onSave(post.id, savedInputValue)"
      >
        Save
      </button>
    </div>
  </li>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
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

.item__edit-btn {
  margin-right: 10px;
}

.item__edit-btn,
.item__delete-btn {
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  border: 2px solid #2a2f36;
  background-color: #333333;
  text-transform: uppercase;
  padding: 6px 10px;
}

.item__edit-btn:hover,
.item__delete-btn:hover {
  background-color: #535151;
  border-color: #535151;
}

/* .item__text {
  position: relative;
} */
/* 
.item__checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.item__checkbox + label {
  display: inline-flex;
  align-items: center;
  user-select: none;
}
/* 
.item__checkbox + label::before {
  content: '';
  display: inline-block;
  width: 15px;
  height: 15px;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #adb5bd;
  margin-right: 5px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50%;
  cursor: pointer;
}
/* 
.item__checkbox:checked + label::before {
  border: 2px solid #4fc1de;
  background-color: #4fc1de;
}
/* 
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
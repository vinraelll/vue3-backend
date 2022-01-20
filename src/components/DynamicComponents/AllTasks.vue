<template>
  <transition-group
    tag="ul"
    name="list"
  >
    <li
      v-for="post in allPosts"
      :key="post.id"
      class="item"
    >
      <div class="item__wrapper">
        <div 
          class="item__info"
          v-if="!post.editable"
        >
          <label class="item__label">
            <input 
              class="item__checkbox" 
              type="checkbox"
              @change="onChange(post.id)"
            >
            <span class="item__text">{{ post.title }}</span>
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
            class="item__edit-btn item__btn"
            @click="onEdit(post.id, post.title)"
          >
            <icon icon="pencil" :size="20" color="#fff" />
            
          </Button>
          <Button  
            class="item__delete-btn item__btn"
            @click="deletePost(post.id)"
          >
            <icon icon="delete" :size="20" color="#fff" />
            
          </Button>
          <Button
            class="item__expand-btn item__btn"
            @click="expandTodo(post.id)"
          >
            <icon icon="arrow" :size="20" color="#fff" />
          </Button>
        </div>
        <div v-else>
          <Button 
            class="item__save-btn"
            @click="onSave(post.id, savedInputValue, description)"
          >
            <icon icon="save" :size="20" color="#fff" />
          </Button>
        </div>
      </div>
      <div class="item__description" v-if="post.expanded">
        <span
          v-if="!post.editable"
        >{{ post.description }}</span>
        <textarea
          v-if="post.editable"
          class="item__description-edit"
          @input="onTextEdit"
          :value="post.description"
        ></textarea>
      </div>
    </li>
    
  </transition-group>
</template>

<script>
import Button from '@/components/UI/Button.vue'
import Icon from "@/components/icomoon/Icomoon.vue";
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  created() {
    this.resetTasks()
  },
  components: {
    Button,
    Icon
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
    onSave(id, title, desc) {
      this.editTodo(id)
      this.saveTodo({ id, title, desc })
      this.savedInputValue = ''
    },
    onEdit(id, value) {
      this.savedInputValue = value
      this.editTodo(id)
    },
    inputHandler(e) {
      this.savedInputValue = e.target.value
      
    },
    onTextEdit(e) {
      this.description = e.target.value
    },
    onChange(id) {
      this.completeTodo(id)
    }
  },
  computed: mapGetters(['allPosts']),
  
}
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-bottom: 15px;
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__label {
    cursor: pointer;
  }
  
  &__checkbox {
    position: absolute;
    left: 0;
    opacity: 0;
    z-index: -1;
  }

  &__text {
    position: relative;
    display: flex;
    max-width: 550px;
    padding-left: 20px;
  }

  &__text::before {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    top: 1px;
    left: 0;
    border: 2px solid #5d575f;
  }

  &__text::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    left: 3px;
    top: 4px;
    background-color: var(--accent-color);
    transition: all .2s ease;
    transform: scale(0);
    opacity: 0;
  }

  &__text::before + &__checkbox:not(:checked) {
    border: 2px solid #5d575f;
  } 

  &__checkbox:checked + &__text::before {
    border: 2px solid var(--accent-color);
  }

  &__checkbox:checked + &__text::after {
    opacity: 1;
    transform: scale(1);
  }

  &__controls {
    display: flex;
    justify-content: space-between;
    min-width: 100px;
  }

  &__edit-input {
    width: 100%;
    max-width: 500px;
    margin-left: 13px;
    padding: 7px 7px 6px 7px;
    border: none;
    border-bottom: 1px solid #ccc;
    outline: transparent;
  }

  &__btn:not(:last-child) {
    margin-right: 10px;
  }

  &__edit-btn {
    margin-right: 10px;
  }

    &__info {
    position: relative;
    padding-right: 25px;
  }

  &__description {
    // max-width: 530px;
    // margin-left: 7px;
    // padding: 3px 5px;
    // font-size: 14px;
    // border-bottom: 1px solid var(--gray-color);
    // border-left: 1px solid var(--gray-color);

    & span {
      display: block;
      max-width: 530px;
      margin-left: 7px;
      padding: 3px 5px;
      font-size: 14px;
      border-bottom: 1px solid var(--gray-color);
      border-left: 1px solid var(--gray-color);
    }

    &-edit {
      resize: none;
      width: 530px;
      margin-left: 7px;
      padding: 3px 5px;
      font-size: 14px;
      border: none;
      border-bottom: 1px solid var(--gray-color);
      border-left: 1px solid var(--gray-color);
    }
  }
}

// animation

.list-enter-from {
  opacity: 0;
  transform: translateX(100px)
}

.list-enter-to {
  opacity: 1;
  transform: translateX(0)
}

.list-enter-active {
  transition: all .3s ease;
}

.list-leave-from {
  opacity: 1;
  transform: translateX(0)
}

.list-leave-to {
  opacity: 0;
  transform: translateX(100px)
}

.list-leave-active {
  transition: all .3s ease;
}
</style>
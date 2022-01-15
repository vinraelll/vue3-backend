<template>
  <ul
    
  >
    <li
      v-for="completedPost in completed"
      :key="completedPost.id"
      class="item"
    >
      <div 
        class="item__info"
      >
        <label class="item__label">
          <input 
            class="item__checkbox" 
            type="checkbox"
            @change="onChange(completedPost.id)"
          >
          <span class="item__text">{{ completedPost.title }}</span>
        </label>
      </div>
      <div
        class="item__controls"
      >
        <Button  
          class="item__delete-btn item__btn"
          @click="deletePost(post.id)"
        >
          <icon icon="delete" :size="20" color="#fff" />
          
        </Button>
        <Button
          class="item__expand-btn item__btn"
        >
          <icon icon="arrow" :size="20" color="#fff" />
        </Button>
      </div> 
    </li>
  </ul>
</template>

<script>
import Button from '@/components/UI/Button.vue'
import Icon from "@/components/icomoon/Icomoon.vue";
import { mapGetters, mapMutations } from 'vuex'

export default {
  components: {
    Button,
    Icon
  },
  methods: {
    ...mapMutations(['deletePost', 'editTodo', 'saveTodo']),
  },  
  computed: mapGetters(['completed'])
}
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 15px;
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

  &__btn:not(:last-child) {
    margin-right: 10px;
  }

    &__info {
    position: relative;
    padding-right: 25px;
  }
}
</style>
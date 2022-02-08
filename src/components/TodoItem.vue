<template>
  <li class="item">
    <div class="item__wrapper">
      <div 
        v-if="!editable"
        class="item__info"
      >
        <label class="item__label">
          <input 
            class="item__checkbox" 
            type="checkbox"
            @change="$emit('on-change', id)"
          >
          <span class="item__text">
            {{ title }}
          </span>
        </label>
      </div>
      <input 
        v-else
        type="text" 
        class="item__edit-input"
        :value="title"
        @input="$emit('on-input', $event.target.value)"
      >
      <div
        v-if="!editable"
        class="item__controls"
      >
        <Button 
          class="item__edit-btn item__btn"
          @click="onEdit"
        >
          <icon icon="pencil" :size="20" color="#fff" />
        </Button>
        <Button  
          class="item__delete-btn item__btn"
          @click="$emit('on-remove', id), onDeleting = !onDeleting"
        >
          <BtnLoader 
            v-if="onDeleting"
            class="loader"
          />
          <icon 
            v-else
            icon="delete" 
            :size="20" 
            color="#fff"
          />
        </Button>
        <Button
          class="item__expand-btn item__btn"
          @click="expanded = !expanded"
        >
          <icon icon="arrow" :size="20" color="#fff" />
        </Button>
      </div>
      <div v-else>
        <Button 
          class="item__save-btn"
          @click="$emit('on-save', id)"
        >
          <icon icon="save" :size="20" color="#fff" />
        </Button>
      </div>
    </div>
    <div
      v-if="expanded"
      class="item__description"
    >
      <span v-if="!editable">
        {{ description }}
      </span>
      <textarea
        v-if="editable"
        class="item__description-edit"
        @input="$emit('on-textarea', $event.target.value)"
        :value="description"
      ></textarea>
    </div>
  </li>
</template>

<script>
import BtnLoader from '@/components/UI/BtnLoader'
import Button from '@/components/UI/Button'
import Icon from "@/components/icomoon/Icomoon";

export default {
  name: 'TodoItem',
  components: {
    Button,
    Icon,
    BtnLoader
  },
  props: {
    id: {
      type: String,
      default: '',
      require: true,
    },
    title: {
      type: String,
      default: '',
      require: true,
    },
    description: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      expanded: false,
      editable: false,
      onDeleting: false
    }
  },
  methods: {
    onEdit() {
      this.editable = !this.editable
      this.$emit('on-edit', this.title)
    },
  },
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

// loader 

.loader {
  transform: translateX(-5px);
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
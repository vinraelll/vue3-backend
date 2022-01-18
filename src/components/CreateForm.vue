<template>
  <div class="create">
    <h3 class="create__title">Add new task</h3>
    <form 
      class="form" 
      @submit.prevent="create"
    >
      <label class="form__label">
        <input
          class="form__input"
          type="text"
          placeholder="Type new task here"
          v-model="newTodo"
        />
      </label>
      <textarea
        class="form__textarea"
        placeholder="Description"
        v-model="description"
      ></textarea>
      <button 
        class="form__btn" 
        type="submit"
        v-if="newTodo"
      >
        Add new task
      </button>
      <button 
        class="form__btn disabled"
        disabled
        v-else
      >
        Add new task
      </button>
      <button 
        class="form__btn form__btn--cancel"
        @click="toggleCreateModal"
      >
        Cancel
      </button>
    </form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      newTodo: '',
      description: ''
    }
  },
  methods: {
    ...mapMutations(['createTodo', 'toggleCreateModal']),
    create() {
      if (this.newTodo.trim()) {
        this.createTodo({
          id: Date.now(),
          title: this.newTodo,
          body: this.description,
          editable: false
        })

        this.newTodo = ''
        this.description = ''
        this.toggleCreateModal()
      }

      return
    }
  }
 
}
</script>

<style lang="scss" scoped>
.create {
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
  color: #C4CBC9;
  background-color: var(--white-color);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-top: 4px solid var(--accent-color);
  border-radius: 1%;
  transform: translate(-50%, -50%);
  z-index: 10;

  &__title {
    margin-bottom: 15px;
    text-transform: uppercase;
    text-align: center;
  }
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;

  &__input {
    width: 300px;
    margin-bottom: 20px;
    padding: 5px;
    border: none;
    border-bottom: 1px solid #C4CBC9;
    outline: transparent;
  }

  &__textarea {
    padding: 5px;
    margin-bottom: 20px;
    resize: none;
    outline: transparent;
    border: 1px solid #C4CBC9;
  }

  &__textarea::placeholder {
    color: #C4CBC9;
  }

  &__btn {
    padding: 10px 15px;
    color: var(--white-color);
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    background-color: var(--accent-color);
  }

  &__btn:not(:last-child) {
    margin-bottom: 10px;
  }

  &__btn:disabled {
    color: var(--white-color);
    background-color: #C4CBC9;
    cursor: auto;
  }

  &__btn--cancel {
    background-color: rgb(228, 0, 0);
  }
}
</style>
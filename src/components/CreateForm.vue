<template>
  <div class="create">
    <h3 class="create__title">Add new task</h3>
    <form class="form" @submit.prevent="create">
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
      <button class="form__btn" type="submit" v-if="newTodo">
        <BtnLoader 
          v-if="onCreating"
          class="form__loader"
        />
        <span 
          v-else
          class="form__btn-text"
        >
          Add new task
        </span>
      </button>
      <button class="form__btn disabled" disabled v-else>Add new task</button>
      <button class="form__btn form__btn--cancel" @click="toggleCreateModal">
        Cancel
      </button>
    </form>
  </div>
</template>

<script>
import BtnLoader from '@/components/UI/BtnLoader'
import { mapActions, mapMutations } from "vuex";

export default {
  components: {
    BtnLoader
  },
  data() {
    return {
      onCreating: false,
      newTodo: "",
      description: "",
    };
  },
  methods: {
    ...mapActions(['createTodo', 'fetchPosts']),
    ...mapMutations(['toggleCreateModal']),
    async create() {
      if (this.newTodo.trim()) {
        this.onCreating = true

        try {
          await this.createTodo({
            title: this.newTodo,
            description: this.description,
            done: false,
          })
          await this.fetchPosts()
          
          this.newTodo = "";
          this.description = "";
          this.toggleCreateModal();

        } catch (error) {
          this.onCreating = false
          console.error(error);
        }
      }

      return;
    },
  },
};
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
  color: #c4cbc9;
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
    border-bottom: 1px solid #c4cbc9;
    outline: transparent;
  }

  &__textarea {
    padding: 5px;
    margin-bottom: 20px;
    resize: none;
    outline: transparent;
    border: 1px solid #c4cbc9;
  }

  &__textarea::placeholder {
    color: #c4cbc9;
  }

  &__btn {
    padding: 10px 15px;
    color: var(--white-color);
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    background-color: var(--accent-color);
  }

  &__btn-text {
    display: block;
  }

  &__btn:not(:last-child) {
    margin-bottom: 10px;
  }

  &__btn:disabled {
    color: var(--white-color);
    background-color: #c4cbc9;
    cursor: auto;
  }

  &__btn--cancel {
    background-color: rgb(228, 0, 0);
  }
}
</style>
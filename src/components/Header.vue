<template>
  <header class="header">
    <div class="container">
      <nav class="nav">
        <div class="header__flexbox">
          <h1 class="header__logo">ToDo List</h1>
          <form 
            class="header__form"
            @submit.prevent="create"
          >
            <input 
              class="header__form-input" 
              type="text" 
              placeholder="Type new task here"
              v-model="newTodo" 
              id="createTodo"
            >
            <label for="createTodo" class="header__form-label"></label>
            <button 
              class="header__form-btn"
              type="submit"
            >
              Add new task
            </button>
          </form>
        </div>
        <div class="header__auth">
          <button 
            class="header__auth-btn"
            @click="$emit('openModalWindow')"
          >
            Sign in
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      newTodo: ''
    }
  },
  methods: {
    ...mapMutations(['createTodo']),
    create() {
      if (this.newTodo.trim()) {
        const todo = {
          id: Date.now(),
          title: this.newTodo,
          body: '',
          editable: false
        }

        this.createTodo(todo)
        this.newTodo = ''
      }

      return
    }
  }
 
}
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header {
  padding: 10px 0;
  margin-bottom: 30px;
  background: #2c3e50;

  &__flexbox {
    display: flex;
    align-items: center;
  }

  &__logo {
    margin-right: 10px;
  }

  &__form {
    width: 335px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__form-input {
    width: 200px;
    height: 36px;
    padding: 3px;
    border: 1px solid #fff;
    outline: transparent;
    transition: .2s border;
  }

  &__form-input:focus {
    border: 1px solid var(--accent-color);
  }

  &__form-btn {
    padding: 10px 15px;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    background-color: var(--accent-color);
    border: 1px solid var(--accent-color);
  }

  &__form-btn:hover {
    background-color: var(--accent-color);
    border-color: var(--accent-color);
  }

  &__auth-btn {
    position: relative;
    padding-right: 25px;
    text-transform: uppercase;
    font-weight: 700;
  }

  &__auth-btn::before {
    content: "";
    position: absolute;
    right: 0;
    top: -4px;
    height: 25px;
    width: 20px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    background-image: url('../assets/images/auth/login.svg');
  }
}
</style>

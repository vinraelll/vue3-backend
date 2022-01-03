<template>
  <header class="header">
    <div class="container">
      <nav class="nav">
        <h1 class="header__logo">ToDo List</h1>
        <form 
          class="header__form"
          @submit.prevent="createTodo"
        >
          <input class="header__form-input" type="text" id="createTodo" placeholder="Type new task here">
          <label for="createTodo" class="header__form-label"></label>
          <button 
            class="header__form-btn"
            type="submit"
          >
            Add new task
          </button>
        </form>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    createTodo() {
      console.log('todo created');
    }
  }
 
}
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header {
  padding: 10px 0;
  margin-bottom: 30px;
  background: #2c3e50;
}

.header__form {
  width: 335px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__form-input {
  width: 200px;
  height: 36px;
  padding: 3px;
  border: 1px solid #fff;
  outline: transparent;
  transition: .2s border;
}

.header__form-input:focus {
  border: 1px solid #12c0dd;
}

.header__form-btn {
  padding: 10px 15px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  background-color: #12c0dd;
  border: 1px solid #12c0dd;
}

.header__form-btn:hover {
  background-color: #0dd6f8;
  border-color: #0dd6f8;
}

</style>

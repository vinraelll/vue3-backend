<template>
  <header class="header">
    <div class="container">
      <nav class="nav">
        <div class="header__flexbox">
          <router-link to="/">
            <h1 class="header__logo">ToDo App</h1>
          </router-link>
        </div>
        <div class="header__auth">
          <router-link 
            to="/auth"
            class="header__auth-btn"
            
          >
            Sign in
          </router-link>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import Button from './UI/Button.vue'

export default {
  components: { Button },

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

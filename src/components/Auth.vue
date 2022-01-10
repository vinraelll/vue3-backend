<template>
  <transition name="modal">
    <div class="auth">
      <h3 class="auth__title">Sign in</h3>
      <form 
        @submit.prevent="onSubmit"
        class="auth__form"
      >
        
        <label>
          <input 
            type="text" 
            class="auth__form-username auth__input"
            placeholder="Username"
            required
          >
        </label>
        
        <label>
          <input 
            type="password" 
            class="auth__form-password auth__input"
            placeholder="Password"
            required
          >
        </label>
        <button 
          class="auth__form-submit"
          type="submit"
          
        >
          Sign in
        </button>
        <button class="auth__form-help">Forgot password?</button>
      </form>
      <div class="auth__create">
        <p class="auth__create-text">
          Don't have an account?
        </p>
        <a class="auth__create-link" href="#">Create one now</a>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  methods: {
    onSubmit() {
      this.$emit('modalClose')
    }
  }
}
</script>

<style lang="scss" scoped>
.auth {
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 50px;
  color: #C4CBC9;
  background-color: var(--white-color);
  border-top: 4px solid var(--accent-color);
  border-radius: 1%;
  transform: translate(-50%, -50%);
  z-index: 10;

  &__form {
    display: flex;
    flex-direction: column;
    padding: 40px;
  }

  &__input {
    width: 230px;
    margin-bottom: 20px;
    padding: 5px 0 5px 33px;
    border: none;
    border-bottom: 1px solid #C4CBC9;
    outline: transparent;
  }

  &__input + label {
    position: relative;
  }

  &__input + label::before {
    content: '';
    position: absolute;
    left: 10px;
    top: -44px;
    width: 16px;
    height: 16px;
    background-position: center;
    background-size: contain;
  }

  &__form-username + label::before {
    background-image: url('../assets/images/auth/user.svg');
  }

  &__form-password + label::before {
    background-image: url('../assets/images/auth/password.svg');
  }

  &__title {
    font-size: 22px;
    text-transform: uppercase;
    text-align: center;
    color: #0C2331;
    font-weight: 700;
  }

  &__form-submit {
    padding: 12px 25px;
    margin-bottom: 14px;
    text-transform: uppercase;
    color: #fff;
    font-weight: 700;
    background-color: #2CC185;
    border-radius: 5px;
  }

  &__form-help {
    font-size: 12px;
    text-decoration: underline dotted;
  }

  &__create {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 10px;
    border-top: 1px solid #C4CBC9;
    font-size: 12px;
  }

  &__create-link {
    color: #2CC185;
    font-weight: 700;
    text-decoration: underline dotted;
  }
}
</style>
<template>
  <button 
    class="btn"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script>
export default { 
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  display: inline-block;
  width: 44px;
  font-size: 12px;
  font-weight: 700;
  color: var(--white-color);
  border: 2px solid #2a2f36;
  background-color: #333333;
  text-transform: uppercase;
  padding: 6px 10px;

  &:hover {
    background-color: #535151;
    border-color: #535151;
  }
}
</style>
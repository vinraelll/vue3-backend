<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {

}
</script>

<style scoped>


.btn {
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  border: 2px solid #2a2f36;
  background-color: #333333;
  text-transform: uppercase;
  padding: 6px 10px;
}

.btn:hover {
  background-color: #535151;
  border-color: #535151;
}
</style>
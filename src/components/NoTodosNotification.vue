<template>
  <div class="noTodoNotification">
    <p>No todos, you lazy bitch</p>
    <img src="../assets/images/cat.png" alt="No todos image" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.noTodoNotification {
  text-align: center;
  font-size: 25px;
  
  & img {
    object-fit: cover;
    margin: 0 auto;
  }
}
</style>
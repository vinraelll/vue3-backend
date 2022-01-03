<template>
  <li 
    class="item"
    
  >
    <div class="item__info">
      <input type="checkbox" class="item__checkbox">
      <span class="item__text">
        Test text
      </span>
    </div>
    <div class="item__controls">
      <button class="item__edit-btn">
        Edit task
      </button>
      <button class="item__delete-btn">
        Delete task
      </button>
    </div>
  </li>
</template>

<script>
export default {

}
</script>

<style scoped>
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item__edit-btn {
  margin-right: 10px;
}

.item__edit-btn,
.item__delete-btn {
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  border: 2px solid #2a2f36;
  background-color: #333333;
  text-transform: uppercase;
  padding: 6px 10px;
}

.item__edit-btn:hover,
.item__delete-btn:hover {
  background-color: #535151;
  border-color: #535151;
}
</style>
<template>
  <main class="main">
    <div class="container container-sm">
      <div class="inProgress">
        <div class="inProgress__header">
          <h2 class="inProgress__title">In Progress</h2>
          <div class="inProgress__counter">
            <span>10</span>
          </div>
        </div>
        <hr>
        <ListInProgress 
          class="inProgress__list" 
        />
      </div>
      
      <div class="completed">
        <div class="completed__header">
          <h2 class="completed__title">Completed</h2>
          <div class="completed__counter">
            <span>255</span>
          </div>
        </div>
        <hr>
        <ListCompleted 
          class="completed__list" 
        />
      </div>
    </div>
  </main>
</template>

<script>
import ListInProgress from '@/components/ListInProgress.vue'
import ListCompleted from '@/components/ListCompleted.vue'

export default {
components: {
    ListInProgress,
    ListCompleted
  }
}
</script>

<style scoped>
main {
  color: #2a2f36;
}

.inProgress {
  margin-bottom: 30px;
}

.inProgress__header,
.completed__header {
  display: flex;
  justify-content: space-between;
}

.inProgress__counter,
.completed__counter {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 5px 4px 4px;
  font-size: 14px;
  font-weight: 700;
  border: 2px solid #2a2f36;
  border-radius: 20px;
}
</style>

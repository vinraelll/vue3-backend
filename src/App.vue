<template>
  <div>
    <Header />
    <Main />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Main from '@/components/Main.vue'

export default {
  components: {
    Header,
    Main,
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #FFF;
}

.container {
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 10px;
}

.container-sm {
  max-width: 768px;
}
</style>

<template>
  <nav class="nav">
    <ul class="nav__list">
      <li 
        class="nav__item"
        :class="{'tab-current': tabCurrent === tab}"
        v-for="tab of allTabs"
        :key="tab"
      >
        <button
          class="nav__btn"
          @click="onChangeTab(tab)"
        >
          {{ tab }}
          {{ allPosts.length }}
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Tabs',
  data() {
    return {
      tabCurrent: 'All Tasks'
    }
  },
  methods: {
    ...mapMutations(['changeTab']),
    onChangeTab(tab) {
      this.changeTab(tab)
      this.tabCurrent = tab
    }
  },
  computed: {
    ...mapGetters(['allTabs', 'allPosts'])
  }
}
</script>

<style lang="scss" scoped>
.nav {
  margin-bottom: 30px;

  &__list {
    display: flex;
    justify-content: center;
  }

  &__item {
    margin: 0 0.5em;
    position: relative;
  }

  &__btn {
    padding: 0 1.5em;
    color: #74777b;
    font-weight: 700;
    transition: color 0.3s;
  }

  &__btn:hover,
  &__btn:focus {
    color: var(--accent-color);
  }

  &__item.tab-current &__btn {
    color: var(--white-color);
  }

  &__btn::after {
    position: absolute;
    bottom: -10px;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 4px;
    background: #d2d8d6;
    content: '';
    transition: all .3s;
  }

  &__item.tab-current &__btn::after {
    height: 200%;
  }

  &__btn:hover::after,
  &__btn:focus::after,
  &__item.tab-current &__btn::after {
    background: var(--accent-color);
  }
}
</style>
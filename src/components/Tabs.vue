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

<style scoped>
.nav {
  margin-bottom: 30px;
}

.nav__list {
  display: flex;
  justify-content: center;
}
.nav__item {
	margin: 0 0.5em;
	position: relative;
}

.nav__btn {
	padding: 0 1.5em;
	color: #74777b;
	font-weight: 700;
	transition: color 0.3s;
}

.nav__btn:hover,
.nav__btn:focus {
	color: #2CC185;
}

.nav__item.tab-current .nav__btn {
	color: #fff;
}

.nav__btn::after {
	position: absolute;
	bottom: -10px;
	left: 0;
	z-index: -1;
	width: 100%;
	height: 4px;
	background: #d2d8d6;
	content: '';
	transition: all .3s;
  /* transform: translateY(4px); */
}

.nav__item.tab-current .nav__btn::after {
  height: 200%;
}

.nav__btn:hover::after,
.nav__btn:focus::after,
.nav__item.tab-current .nav__btn::after {
	background: #2CC185;
}
</style>
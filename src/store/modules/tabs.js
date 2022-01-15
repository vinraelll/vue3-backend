export default {
  state: {
    tabName: 'All Tasks',
    tabs: ['Create task', 'All Tasks', 'Incompleted', 'Completed']
  },
  getters: {
    allTabs(state) {
      return state.tabs
    },
    tabName(state) {
      return state.tabName.split(' ').join('')
    },
  },
  mutations: {
    changeTab(state, tab) {
      state.tabName = tab
    }
  } 
}
import axios from 'axios'

export default {
  state: {
    posts: [],
    postsLoading: true,
    createOpen: false,
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts,
      state.postsLoading = false
    },
    deletePost(state, id) {
      state.posts = state.posts.filter(p => p.id !== id)
    },
    editTodo(state, id) {
      const post = state.posts.find(p => p.id === id)
      post.editable = !post.editable
    },
    saveTodo(state, { id, title, desc }) {
      const post = state.posts.find(p => p.id === id)
      post.title = title,
      post.body = desc
      console.log(post);
    },
    toggleCreateModal(state) {
      state.createOpen = !state.createOpen
      console.log(state.createOpen);
    },
    createTodo(state, todo) {
      state.posts.unshift(todo)
    },
    completeTodo(state, id) {
      const post = state.posts.find(p => p.id === id)
      post.completed = !post.completed
    },
    expandTodo(state, id) {
      const post = state.posts.find(p => p.id === id)
      post.expanded = !post.expanded
    }
  },
  actions: {
    async fetchPosts({ commit }) {
      try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
        data.forEach(p => p.editable = false)
        data.forEach(p => p.completed = false)
        data.forEach(p => p.expanded = false)
        commit('updatePosts', data)
      } catch (error) {
        console.log(error);
      }
    }
  },
  getters: {
    allPosts(state) {
      return state.posts
    },
    incompleted(state) {
      return state.posts.filter(p => !p.completed)
    },
    completed(state) {
      return state.posts.filter(p => p.completed)
    },
    createModal(state) {
      return state.createOpen
    },
    loadingStatus(state) {
      return state.postsLoading
    }
  }
}
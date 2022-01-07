import axios from "axios"

export default {
  state: {
    posts: [],
    inProgress: [],
    completed: []
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts
    },
    deletePost(state, id) {
      state.posts = state.posts.filter(p => p.id !== id)
    },
    editTodo(state, id) {
      const post = state.posts.find(p => p.id === id)
      post.editable = !post.editable
    },
    saveTodo(state, { id, value }) {
      const post = state.posts.find(p => p.id === id)
      post.title = value
    },
    createTodo(state, todo) {
      state.posts.push(todo)
    }
  },
  actions: {
    async fetchPosts({ commit }) {
      try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=3')
        data.forEach(p => p.editable = false)
        commit('updatePosts', data)
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  },
  getters: {
    allPosts(state) {
      return state.posts
    },
    inProgress(state) {
      return state.inProgress
    },
    completed(state) {
      return state.completed
    }
  }
}
import axios from 'axios'

export default {
  state: {
    posts: [],
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
    },
    completeTodo(state, id) {
      const post = state.posts.find(p => p.id === id)
      post.completed = !post.completed
      console.log(post.completed);
    }
  },
  actions: {
    async fetchPosts({ commit }) {
      try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
        data.forEach(p => p.editable = false)
        data.forEach(p => p.completed = false)
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
  }
}
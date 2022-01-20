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
    resetTasks(state) {
      state.posts.forEach((p) => {
        p.expanded = false
        p.editable = false
      })
    },
    expandAll(state) {
      state.posts.forEach(p => p.expanded = true)
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
        const data = await axios.get('https://serene-sea-12622.herokuapp.com/api/posts')
          // data.forEach(() => {
          //   p.editable = false
          //   p.completed = false
          //   p.expanded = false
          // })

          console.log(data);

        commit('updatePosts', data)

      } catch (error) {
        console.log(error);
      }

      // const axios = require('axios')
      // await axios.get('https://serene-sea-12622.herokuapp.com/api/posts')
      //   .then(function (response) {
      //     console.log(response);
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   })
      //   .then(function () {
      // });

      
        // try {
        //   const response = await axios.get('https://serene-sea-12622.herokuapp.com/api/posts');
        //   console.log(response);
        // } catch (error) {
        //   console.error(error);
        // }
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
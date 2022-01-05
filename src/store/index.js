import { createStore } from "vuex";
import posts from './modules/posts'
import tabs from './modules/tabs'

export default createStore({
  modules: {
    posts,
    tabs
  }
})
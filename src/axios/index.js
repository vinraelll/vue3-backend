import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://serene-sea-12622.herokuapp.com/api'
})

export default instance
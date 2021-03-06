import axios from 'axios'

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com'

export default {
  findOne (id) {
    return axios
      .get(`${API_ENDPOINT}/users/${id}`)
      .then(response => response.data)
  }
}

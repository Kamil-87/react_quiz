import axios from 'axios'

export default axios.create({
  baseURL: 'https://my-quiz-3682a-default-rtdb.europe-west1.firebasedatabase.app/'
})

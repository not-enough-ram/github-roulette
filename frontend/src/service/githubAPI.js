import axios from 'axios'

const token = process.env.REACT_APP_GITHUB_TOKEN

const instance = axios.create({
  timeout: 5000,
  headers: { Authorization: `Bearer ${token}` },
})

export default instance

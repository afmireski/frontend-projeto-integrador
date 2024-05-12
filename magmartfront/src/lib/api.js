import Axios from 'axios'

const api = Axios.create({
    baseURL: `${process.env.API_URL}/`
})

export default api;
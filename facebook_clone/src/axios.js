import axios from "axios"

const instance = axios.create({
    baseURL : "https://facebook-aman.herokuapp.com"
})

export default instance


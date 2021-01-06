import axios from "axios"

const instance = axios.create({
  baseURL: "http://dev.pubmate.io/"
})

export default instance
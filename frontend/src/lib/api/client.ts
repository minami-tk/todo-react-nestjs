import axios from "axios"

const client = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  headers: ({
    Authorization: "Bearer " + localStorage.getItem("token")
  })
})

export default client
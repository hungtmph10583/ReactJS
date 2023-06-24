import axios from "./customize-axios"


// call api user
const fetchAllUser = (page) => {
    return axios.get(`/api/users?page=${page}`)
}

export {fetchAllUser}
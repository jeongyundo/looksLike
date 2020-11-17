import axios from 'axios'

const port = 1324;
export default axios.create({
    
    baseURL: `https://49.247.134.77:${port}`,
    headers:{

    }
})
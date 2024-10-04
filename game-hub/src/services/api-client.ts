import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key:'db7134a07a9f4df1996100b1c55114c7'
    }
})
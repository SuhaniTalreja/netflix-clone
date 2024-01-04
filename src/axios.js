import axios from "axios";

const instance=axios.create({
    baseURL:"https://image.tmdb.org/t/p/original"
});

export default instance;
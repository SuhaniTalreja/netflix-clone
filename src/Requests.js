const API_KEY="010c336bf55b07c684ec44827acecac9";

export const POPULAR_API_URL =`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`;

export const UPCOMING_API_URL =`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US`;

export const TOPRATED_API_URL =`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`;

export const NOWPLAYING_API_URL=`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US`;

export const NETFLIX_MOVIES=`https://api.themoviedb.org/3/trending/all/day?with_networks=213&api_key=${API_KEY}`
import axios from "axios";

const TMDB_API = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: import.meta.env.VITE_APP_TMDB_API_KEY,
    language: "es-ES",
  },
});

// console.log(import.meta.env.VITE_APP_TMDB_API_KEY);

const TMDB_PATHS = {}
import {
  tmdb_api,
  tmdb_paths,
} from "../../../core/datasource/remote/tmdb/tmdb_api";

//hace una solicitud GET a la API de TMDB (The Movie Database)
//para obtener las películas populares

export const getPopularMovies = async () => {
  const {data} = await tmdb_api.get(tmdb_paths.movies.popular);

  console.log("data", data);

  return data;
};

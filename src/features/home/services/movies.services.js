import {
  tmdb_api,
  tmdb_paths,
} from "../../../core/datasource/remote/tmdb/tmdb_api";
import { tmdbMoviesTvAdapter } from "../../adapters/tmdb.adapters";



// estos son los servicios que se van a usar en el componente Home
// para obtener las películas más populares, mejor valoradas y próximas

export const getPopularMovies = async () => {
  const { data } = await tmdb_api.get(tmdb_paths.movies.popular);

  return tmdbMoviesTvAdapter(data);
};

export const getTopRatedMovies = async () => {
  const { data } = await tmdb_api.get(tmdb_paths.movies.top_rated);

  return tmdbMoviesTvAdapter(data);
};

export const getUpcomingMovies = async () => {  
  const { data } = await tmdb_api.get(tmdb_paths.movies.upcoming);

  return tmdbMoviesTvAdapter(data);
}

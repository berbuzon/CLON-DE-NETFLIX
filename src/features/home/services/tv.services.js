import {
  tmdb_api,
  tmdb_paths,
} from "../../../core/datasource/remote/tmdb/tmdb_api";
import { tmdbMoviesTvAdapter } from "../../adapters/tmdb.adapters";

// estos son los servicios que se van a usar en el componente Home
// para obtener los programas de TV más populares, mejor valoradas y al aire hoy

export const getPopularTV = async () => {
  const { data } = await tmdb_api.get(tmdb_paths.tv.popular);

  return tmdbMoviesTvAdapter(data);
};

export const getTopRatedTV = async () => {
  const { data } = await tmdb_api.get(tmdb_paths.tv.top_rated);

  return tmdbMoviesTvAdapter(data);
};

export const getUpcomingTV = async () => {
  const { data } = await tmdb_api.get(tmdb_paths.tv.airing_today);

  return tmdbMoviesTvAdapter(data);
};

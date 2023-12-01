import { tmdb_paths } from "../../core/datasource/remote/tmdb/tmdb_api";

//adaptador de datos de la API de TMDB (The Movie Database)
export const tmdbMoviesTvAdapter = (response) => {
  const { results } = response;
  return results.map((item) => {
    return {
      id: item.id,
      title: item.title || item.name,
      poster: `${tmdb_paths.images.poster.url}${tmdb_paths.images.poster.sizes.original}${item.poster_path}`,
      backdrop: `${tmdb_paths.images.backdrop.url}${tmdb_paths.images.backdrop.sizes.original}${item.backdrop_path}`,
      description: item.overview,
      rating: item.vote_average,
      video: item.video,
    };
  });
};

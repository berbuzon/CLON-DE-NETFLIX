import React, { useState } from "react";
import AppCarouselSection from "../../../core/components/app_carousel_section/app_carousel_section";
import AppButton from "../../../core/components/app_button";
import { AppSwiper } from "../../../core/components/app_swiper/app_swiper";
import AppSwiperSlide from "../../../core/components/app_swiper/components/app_swiper_slide";
import { getPopularMovies } from "../services/movies.services";
import { getTopRatedMovies } from "../services/movies.services";
import { getUpcomingMovies } from "../services/movies.services";

import useSWR from "swr";

const HomeView = () => {
  const {
    data: popularMovies,
    error: popularMoviesError,
    isLoading: popularMoviesIsLoading,
  } = useSWR("getPopularMovies", getPopularMovies);

  const {
    data: topRatedMovies,
    error: topRatedMoviesError,
    isLoading: topRatedMoviesIsLoading,
  } = useSWR("getTopRatedMovies", getTopRatedMovies);

  const {
    data: UpcomingMovies,
    error: UpcomingMoviesError,
    isLoading: UpcomingMoviesIsLoading,
  } = useSWR("getUpcomingMovies", getUpcomingMovies);

  return (
    <div>
      <AppCarouselSection title={"Popular Movies"} data={popularMovies} />
    </div>
  );
};

export default HomeView;

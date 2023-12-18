import React, { useState } from "react";
import AppCarouselSection from "../../../core/components/app_carousel_section/app_carousel_section";
import { AppSwiper } from "../../../core/components/app_swiper/app_swiper";
import AppSwiperSlide from "../../../core/components/app_swiper/components/app_swiper_slide";
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "../services/movies.services";
import {
  getPopularTV,
  getTopRatedTV,
  getUpcomingTV,
} from "../services/tv.services";

import useSWR from "swr";
import AppCard from "../../../core/components/app_card/app_card";

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

  const {
    data: popularTv,
    error: popularTvError,
    isLoading: popularTvIsLoading,
  } = useSWR("getPopularTV", getPopularTV);

  const {
    data: topRatedTv,
    error: topRatedTvError,
    isLoading: topRatedTvIsLoading,
  } = useSWR("getTopRatedTV", getTopRatedTV);

  const {
    data: UpcomingTv,
    error: UpcomingTvError,
    isLoading: UpcomingTvIsLoading,
  } = useSWR("getUpcomingTV", getUpcomingTV);

  return (
    <div>
      <AppCarouselSection title={"Popular Movies"} data={popularMovies} />
      <AppCarouselSection title={"Top Rated Movies"} data={topRatedMovies} />
      <AppCarouselSection title={"Upcoming Movies"} data={UpcomingMovies} />
      <AppCarouselSection title={"Popular TV"} data={popularTv} />
      <AppCarouselSection title={"Top rated TV"} data={topRatedTv} />
      <AppCarouselSection title={"Upcoming TV"} data={UpcomingTv} />


    </div>
  );
};

export default HomeView;

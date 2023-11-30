import React, { useState } from "react";
import AppButton from "../../../core/components/app_button";
import { AppSwiper } from "../../../core/components/app_swiper/app_swiper";
import AppSwiperSlide from "../../../core/components/app_swiper/components/app_swiper_slide";

const HomeView = () => {
  return (
    <div>
      <h1>Películas mejor puntuadas</h1>
      <AppSwiper>
        {Array.from({ length: 10 }).map((item, index) => (
          <AppSwiperSlide key={index}>
            <div
              style={{
                height: "100px",
                width: "140px",
                backgroundColor: "red",
              }}
            >
              <h3>{index}</h3>
            </div>
          </AppSwiperSlide>
        ))}
      </AppSwiper>
      <h1>Películas mejor puntuadas</h1>
      <AppSwiper>
        {Array.from({ length: 10 }).map((item, index) => (
          <AppSwiperSlide key={index}>
            <div
              style={{
                height: "100px",
                width: "140px",
                backgroundColor: "red",
              }}
            >
              <h3>{index}</h3>
            </div>
          </AppSwiperSlide>
        ))}
      </AppSwiper>
      <h1>Películas mejor puntuadas</h1>
      <AppSwiper>
        {Array.from({ length: 10 }).map((item, index) => (
          <AppSwiperSlide key={index}>
            <div
              style={{
                height: "100px",
                width: "140px",
                backgroundColor: "red",
              }}
            >
              <h3>{index}</h3>
            </div>
          </AppSwiperSlide>
        ))}
      </AppSwiper>
      <h1>Películas mejor puntuadas</h1>
      <AppSwiper>
        {Array.from({ length: 10 }).map((item, index) => (
          <AppSwiperSlide key={index}>
            <div
              style={{
                height: "100px",
                width: "140px",
                backgroundColor: "red",
              }}
            >
              <h3>{index}</h3>
            </div>
          </AppSwiperSlide>
        ))}
      </AppSwiper>
    </div>
  );
};

export default HomeView;

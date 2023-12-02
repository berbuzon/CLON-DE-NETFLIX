import React from "react";
import { AppSwiper } from "../app_swiper/app_swiper";
import AppSwiperSlide from "../app_swiper/components/app_swiper_slide";

export const AppCarouselSection = ({title,data}) => {
  return (
    <>
      <h1>{title}</h1>

      <AppSwiper>
        {data?.map((e) => (
          <AppSwiperSlide key={e.id}>
            <div
              style={{
                height: "150px",
                width: "250px",
                backgroundImage: `url(${e.backdrop})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <h3>{e.title}</h3>
            </div>
          </AppSwiperSlide>
        ))}
      </AppSwiper>
    </>
  );
};

export default AppCarouselSection;


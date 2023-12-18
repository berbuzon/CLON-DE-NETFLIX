import React from "react";
import { AppSwiper } from "../app_swiper/app_swiper";
import AppSwiperSlide from "../app_swiper/components/app_swiper_slide";
import AppCard from "../app_card/app_card";
import AppTitle from "../app_title/app_title";
import AppFooter from "../app_card/app_footer/app_footer";
import { sizes } from "../constants";

export const AppCarouselSection = ({ title, data }) => {
  return (
    <>
      <h1>{title}</h1>

      <AppSwiper>
        {data?.map((e) => (
          <AppSwiperSlide key={e.id}>
            <AppCard
              height="150px"
              width="250px"
              backgroundImageSrc={e.backdrop}
            >
              <AppCard.Header>
                <AppTitle size={sizes.sm}>{e.title}</AppTitle>
              </AppCard.Header>
              <AppCard.Footer>
              <AppFooter >{e.rating}</AppFooter>
              </AppCard.Footer>
              </AppCard>
          </AppSwiperSlide>
        ))}
      </AppSwiper>
    </>
  );
};

export default AppCarouselSection;

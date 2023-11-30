import { useRef, useEffect } from "react";


// AppSwiper es un componente que contiene a AppSwiperSlide
export const AppSwiper = ({children}) => {
  const swiperElRef = useRef(null);

  return (
    <swiper-container
      ref={swiperElRef}
      loop
      slides-per-view="5"
      navigation="true"
    >
    {children}
    </swiper-container>
  );
};

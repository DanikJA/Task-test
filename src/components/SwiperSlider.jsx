import { Section, Title, SlideImage } from "./SwiperSliderStyled.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const SwiperSlider = () => {
  return (
    <Section id="slider">
      <Title>Галерея</Title>
      <Swiper spaceBetween={20} slidesPerView={1}>
        <SwiperSlide>
          <SlideImage src="https://via.placeholder.com/300x200" alt="1" />
        </SwiperSlide>
        <SwiperSlide>
          <SlideImage src="https://via.placeholder.com/300x200" alt="2" />
        </SwiperSlide>
        <SwiperSlide>
          <SlideImage src="https://via.placeholder.com/300x200" alt="3" />
        </SwiperSlide>
      </Swiper>
    </Section>
  );
};

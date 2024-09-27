import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import Card from '../Card/Card';



function Carousel() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1440: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
      }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      onSlideChange={() => { }}
      onSwiper={() => { }}
    >
      <SwiperSlide>
        <Card title="Card 1" content="Content 1" image="https://via.placeholder.com/150" />
      </SwiperSlide>
      <SwiperSlide>
        <Card title="Card 2" content="Content 2" image="https://via.placeholder.com/150" />
      </SwiperSlide>
      <SwiperSlide>
        <Card title="Card 3" content="Content 3" image="https://via.placeholder.com/150" />
      </SwiperSlide>
      <SwiperSlide>
        <Card title="Card 4" content="Content 4" image="https://via.placeholder.com/150" />
      </SwiperSlide>
    </Swiper>
  );
}

export default Carousel;

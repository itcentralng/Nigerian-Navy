import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css/effect-coverflow';

// Import Swiper core and required modules
import SwiperCore, { EffectCoverflow } from 'swiper';

// Install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

const CardSwiper = () => {
  const cardsData = [
    {
      id: 1,
      imageSrc: 'https://via.placeholder.com/300?text=Image+1',
      caption: 'Caption 1',
    },
    {
      id: 2,
      imageSrc: 'https://via.placeholder.com/300?text=Image+2',
      caption: 'Caption 2',
    },
    // Add more cards as needed
  ];

  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={3}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{
        clickable: true,
      }}
      className="mySwiper"
    >
      {cardsData.map((card) => (
        <SwiperSlide key={card.id}>
          <div className="card">
            <img src={card.imageSrc} alt={`Image ${card.id}`} />
            <p>{card.caption}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardSwiper;

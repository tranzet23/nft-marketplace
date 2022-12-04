import React, { useRef } from 'react';
import { Swiper as SwiperType, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container } from '@mui/material';

import 'swiper/css';
import 'swiper/css/navigation';

import WidgetCarouselLot from '../WidgetCarouselLot/WidgetCarouselLot';

import { WidgetCarouselData } from './data';

type Props = {
  tabletMedia: boolean;
};

const WidgetCarouselLots = ({ tabletMedia }: Props) => {
  const swiperRef = useRef<SwiperType>();

  const onClickPrev = () => {
    swiperRef.current?.slidePrev();
  };
  const onClickNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <Container sx={{ pt: tabletMedia ? 16 : 32, pb: tabletMedia ? 10 : 32 }}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {WidgetCarouselData.map((item, index) => (
          <SwiperSlide key={index}>
            <WidgetCarouselLot
              title={item.title}
              endTime={item.endTime}
              creator={item.creator}
              currentBid={item.currentBid}
              startPrice={item.startPrice}
              onClickNextLot={onClickNext}
              onClickPrevLot={onClickPrev}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default WidgetCarouselLots;

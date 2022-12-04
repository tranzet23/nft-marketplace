import React, { useRef } from 'react';
import { Box, Button, Container, Typography, useMediaQuery } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType, Navigation } from 'swiper';

import FlexGrid from '../../UI/CustomGrid/FlexGrid';
import CollectionsItem from '../CollectionsItem/CollectionsItem';
import Item from '../../UI/Item/Item';
import Arrow from '../../../assets/images/arrow.svg';

import { itemCollectionData } from './data';

type Props = {
  tabletMedia: boolean;
  mobMedia: boolean;
};

const Collections = ({ tabletMedia }: Props) => {
  const tablet = useMediaQuery('(max-width: 64rem)');
  const extraMobMin = useMediaQuery('(min-width: 500px');
  const extraMobMax = useMediaQuery('(max-width: 500px');
  const swiperRef = useRef<SwiperType>();
  const onClickPrev = () => {
    swiperRef.current?.slidePrev();
  };
  const onClickNext = () => {
    swiperRef.current?.slideNext();
  };
  return (
    <Box sx={{ backgroundColor: 'info.light' }}>
      <Container sx={{ pt: tabletMedia ? 8 : 32, pb: tabletMedia ? 8 : 32 }}>
        <FlexGrid>
          <Grid xs>
            <Item sx={{ textAlign: extraMobMax ? 'center' : 'left' }}>
              <Typography variant={'h3'}>Hot collections</Typography>
            </Item>
          </Grid>
          {tablet && extraMobMin && (
            <Grid xs>
              <Item>
                <Grid xs={12} container columnSpacing={4} justifyContent={'flex-end'}>
                  <Grid xs={3} sm={2}>
                    <Item>
                      <Button
                        variant={'outlined'}
                        color='secondary'
                        size={'small'}
                        onClick={onClickPrev}
                      >
                        <img src={Arrow} alt='' />
                      </Button>
                    </Item>
                  </Grid>
                  <Grid xs={3} sm={2}>
                    <Item>
                      <Button
                        variant={'outlined'}
                        color='secondary'
                        size={'small'}
                        onClick={onClickNext}
                        sx={{ transform: 'rotate(180deg)' }}
                      >
                        <img src={Arrow} alt='' />
                      </Button>
                    </Item>
                  </Grid>
                </Grid>
              </Item>
            </Grid>
          )}
        </FlexGrid>

        <Item sx={{ backgroundColor: 'info.light', pt: '3rem' }}>
          <Swiper
            breakpoints={{
              1024: {
                slidesPerView: 3,
              },
              900: {
                slidesPerView: 2.5,
              },
              500: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={32}
            slidesPerView={1}
            modules={[Navigation]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {itemCollectionData.map((item, index) => (
              <SwiperSlide key={index}>
                <CollectionsItem creator={item.creator} count={item.count} images={item.images} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Item>
        {extraMobMax && (
          <Grid xs={12}>
            <Item sx={{ mt: '2rem' }}>
              <Grid xs={12} container spacing={5}>
                <Grid xs={6}>
                  <Item sx={{ textAlign: 'right' }}>
                    <Button
                      variant={'outlined'}
                      color='secondary'
                      size={'small'}
                      onClick={onClickPrev}
                    >
                      <img src={Arrow} alt='' />
                    </Button>
                  </Item>
                </Grid>
                <Grid xs={6}>
                  <Item sx={{ textAlign: 'left' }}>
                    <Button
                      variant={'outlined'}
                      color='secondary'
                      size={'small'}
                      onClick={onClickNext}
                      sx={{ transform: 'rotate(180deg)' }}
                    >
                      <img src={Arrow} alt='' />
                    </Button>
                  </Item>
                </Grid>
              </Grid>
            </Item>
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default Collections;

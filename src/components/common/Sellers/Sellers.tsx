import React, { useRef } from 'react';
import {
  Container,
  FormControl,
  MenuItem,
  Select,
  Typography,
  SelectChangeEvent,
  Box,
  Button,
  InputLabel,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { makeStyles } from '@mui/styles';
import { Swiper as SwiperType, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import FlexGrid from '../../UI/CustomGrid/FlexGrid';
import SellersItem from '../SellersItem/SellersItem';
import Arrow from '../../../assets/images/arrow.svg';
import Item from '../../UI/Item/Item';
import theme from '../../../theme/Theme';

import { SellerData } from './data';

type Props = {
  tabletMedia: boolean;
  mobMedia: boolean;
};

const useStyles = makeStyles({
  select: {
    '& li': {
      fontSize: 12,
    },
  },
  arrowBox: {
    position: 'absolute',
    top: 350,
    left: 0,
    zIndex: '1',
    maxWidth: 'none',
    justifyContent: 'center',
    [theme.breakpoints.down('mob')]: {
      justifyContent: 'flex-start',
      top: 250,
    },
  },
});

const Sellers = ({ tabletMedia, mobMedia }: Props) => {
  const classes = useStyles();
  const swiperRef = useRef<SwiperType>();
  const [day, setDay] = React.useState('');

  const onClickPrev = () => {
    swiperRef.current?.slidePrev();
  };
  const onClickNext = () => {
    swiperRef.current?.slideNext();
  };
  const handleChange = (event: SelectChangeEvent) => {
    setDay(event.target.value);
  };

  return (
    <Box sx={{ maxWidth: 'none', backgroundColor: 'info.light', width: '100%' }}>
      <Container sx={{ pt: tabletMedia ? 8 : 32, pb: mobMedia ? 8 : 16 }}>
        <FlexGrid flexDirection={'column'} rowSpacing={{ xs: 8, mob: 16 }}>
          <Grid xs={12}>
            <FlexGrid xs={12}>
              <Grid xs={12} mob={6}>
                <Item sx={{ textAlign: 'left' }}>
                  <Typography variant={'h5'}>Popular</Typography>
                </Item>
                <Item sx={{ textAlign: 'left' }}>
                  <Typography variant={'h3'}>Sellers</Typography>
                </Item>
              </Grid>
              <Grid
                xs={12}
                mob={6}
                display={'flex'}
                justifyContent={mobMedia ? 'flex-start' : 'flex-end'}
              >
                <Item sx={{ textAlign: 'left' }}>
                  <FormControl sx={{ m: 1, minWidth: '16rem' }} size='medium'>
                    <InputLabel variant={'standard'} id='label'>
                      Day
                    </InputLabel>
                    <Select
                      MenuProps={{ classes: { paper: classes.select } }}
                      variant={'outlined'}
                      id='select'
                      value={day}
                      onChange={handleChange}
                      displayEmpty
                      sx={{
                        backgroundColor: 'info.main',
                        color: 'secondary.main',
                        '.MuiOutlinedInput-notchedOutline': {
                          borderColor: 'info.dark',
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'primary.main',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'primary.main',
                        },
                        '.MuiSvgIcon-root ': {
                          fill: 'secondary.light',
                          borderColor: 'primary.main',
                          border: '0.1rem solid',
                          borderRadius: '50%',
                        },
                      }}
                    >
                      <MenuItem value={''}>Today</MenuItem>
                      <MenuItem value={2}>Yesterday</MenuItem>
                      <MenuItem value={3}>Day before yesterday</MenuItem>
                    </Select>
                  </FormControl>
                </Item>
              </Grid>
            </FlexGrid>
          </Grid>

          <Grid xs={12} sx={{ position: 'relative', pb: 8 }}>
            <Item sx={{ height: '17rem' }}>
              <Swiper
                breakpoints={{
                  1200: {
                    slidesPerView: 5,
                  },
                  900: {
                    slidesPerView: 4,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  550: {
                    slidesPerView: 2,
                  },
                }}
                spaceBetween={32}
                slidesPerView={1.5}
                modules={[Navigation]}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
              >
                {SellerData.map((item, index) => (
                  <SwiperSlide key={index}>
                    <SellersItem
                      numberCount={item.number}
                      price={item.price}
                      creator={item.creator}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Item>
            <Item>
              <Grid xs={12}>
                <Item>
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
            </Item>
          </Grid>
        </FlexGrid>
      </Container>
    </Box>
  );
};

export default Sellers;

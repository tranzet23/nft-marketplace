import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Button, Typography } from '@mui/material';
import Countdown from 'react-countdown';
import { makeStyles } from '@mui/styles';

import Photo from '../../../assets/images/widget.png';
import Arrow from '../../../assets/images/arrow.svg';
import { User } from '../../../models/User';
import UserBlock from '../UserBlock/UserBlock';
import Timer from '../Timer/Timer';
import InfoBox from '../InfoBox/InfoBox';
import FlexGrid from '../../UI/CustomGrid/FlexGrid';
import Item from '../../UI/Item/Item';
import theme from '../../../theme/Theme';

type Props = {
  title: string;
  creator: User;
  startPrice: string;
  currentBid: number;
  endTime: number;
  onClickPrevLot: () => void;
  onClickNextLot: () => void;
};

const useStyles = makeStyles({
  widgetImgBox: {
    borderRadius: '1rem',
    overflow: 'hidden',
    justifyContent: 'flex-start',
    height: '50rem',
    maxWidth: '40rem',
    [theme.breakpoints.down('md')]: {
      margin: '0 auto',
      height: 'auto',
    },
    '& img': {
      width: '100%',
    },
  },
});

export const WidgetCarouselLot = ({
  title,
  currentBid,
  endTime,
  creator,
  onClickNextLot,
  onClickPrevLot,
  startPrice,
}: Props) => {
  const classes = useStyles();
  return (
    <FlexGrid columnSpacing={{ lg: 5, md: 12 }} sx={{ justifyContent: 'space-between' }}>
      <Grid xs={12} md={7}>
        <Item className={classes.widgetImgBox}>
          <Box component={'img'} src={Photo} sx={{ height: '100%' }}></Box>
        </Item>
      </Grid>

      <Grid container xs={12} md lg={4.5} spacing={1} sx={{ flexDirection: 'column' }}>
        <Grid sx={{ mb: 5 }}>
          <Grid xs={12}>
            <Item>
              <Typography variant={'h1'} textAlign={'left'}>
                {title}
              </Typography>
            </Item>
          </Grid>
          <Grid xs={12}>
            <Item sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <UserBlock avatarUrl={creator.avatarUrl} title={'Creator'} name={creator.firstName} />
              <InfoBox topLabel={'Instant price'} bottomLabel={startPrice} />
            </Item>
          </Grid>
        </Grid>

        <Grid xs={12}>
          <Item>
            <Grid
              xs={12}
              container
              sx={{
                flexDirection: 'column',
                border: '0.125rem solid',
                borderColor: 'info.dark',
                borderRadius: '1.5rem',
                p: 8,
                mb: 6,
              }}
            >
              <Grid xs sx={{ mb: 5, textAlign: 'center' }}>
                <Item>
                  <Typography variant={'body2'}>Current Bid</Typography>
                  <Typography variant={'h2'}>{currentBid} ETH</Typography>
                  <Typography variant={'h5'}>$3.6654.54</Typography>
                </Item>
              </Grid>
              <Grid xs>
                <Item>
                  <Countdown date={Date.now() + endTime} renderer={Timer} />
                </Item>
              </Grid>
            </Grid>
          </Item>
        </Grid>

        <Grid xs container rowSpacing={3} columnSpacing={1} sx={{ flexDirection: 'column', mb: 5 }}>
          <Grid xs>
            <Item>
              <Button variant={'contained'} size={'large'} fullWidth>
                Place a bid
              </Button>
            </Item>
          </Grid>
          <Grid xs>
            <Item>
              <Button variant={'outlined'} color='secondary' size={'large'} fullWidth>
                View item
              </Button>
            </Item>
          </Grid>
        </Grid>

        <Grid xs={12} sm={5} container rowSpacing={2} columnSpacing={1}>
          <Grid xs>
            <Item>
              <Button
                variant={'outlined'}
                color='secondary'
                size={'small'}
                onClick={onClickPrevLot}
              >
                <img src={Arrow} alt='' />
              </Button>
            </Item>
          </Grid>
          <Grid xs>
            <Item>
              <Button
                variant={'outlined'}
                color='secondary'
                size={'small'}
                onClick={onClickNextLot}
                sx={{ transform: 'rotate(180deg)' }}
              >
                <img src={Arrow} alt='' />
              </Button>
            </Item>
          </Grid>
        </Grid>
      </Grid>
    </FlexGrid>
  );
};

export default WidgetCarouselLot;

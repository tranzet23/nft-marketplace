import React from 'react';
import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import WidgetCarouselLots from '../components/common/WidgetCarouselLots/WidgetCarouselLots';
import Feed from '../components/common/Feed/Feed';
import Sellers from '../components/common/Sellers/Sellers';
import Collections from '../components/common/Collections/Collections';

const Home = () => {
  const tablet = useMediaQuery('(max-width: 56rem)');
  const mob = useMediaQuery('(max-width: 28rem)');
  return (
    <Box>
      <Grid
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          pt: tablet ? 16 : 32,
          textAlign: 'center',
        }}
      >
        <Typography variant={'body1'} fontWeight={700}>
          Create, explore, & collect digital art NFTs.
        </Typography>
        <Typography pb={6} pt={2} variant={'h3'}>
          The new creative economy.
        </Typography>
        <Button variant={'outlined'} color='secondary' size={'large'}>
          Start your search
        </Button>
      </Grid>
      <WidgetCarouselLots tabletMedia={tablet} />
      <Feed tabletMedia={tablet} />
      <Sellers tabletMedia={tablet} mobMedia={mob} />
      <Collections tabletMedia={tablet} mobMedia={mob} />
    </Box>
  );
};

export default Home;

import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Button, Link, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import FlexGrid from '../../UI/CustomGrid/FlexGrid';
import Kubok from '../../../assets/images/icon/Line.png';
import Plus from '../../../assets/images/icon/plus.png';
import Arrow from '../../../assets/images/icon/arrow.png';
import Almaz from '../../../assets/images/icon/almaz.png';
import Item from '../../UI/Item/Item';

type SellerItem = {
  numberCount: string;
  price: string;
  creator: {
    avatarUrl: string;
    firstName: string;
    lastName: string;
  };
};

const useStyles = makeStyles({
  item: {
    position: 'relative',
    zIndex: '2',
    '&:hover': {
      boxShadow: '0px 64px 64px -48px rgba(31, 47, 70, 0.12)',
      transition: '.3s',
    },
    '&:hover > div > div:nth-child(2) > div:nth-child(1) > div ': {
      width: '5rem',
      height: '5rem',
      transition: '.3s',
    },
  },
});

const SellersItem = ({ price, creator, numberCount }: SellerItem) => {
  const classes = useStyles();
  return (
    <Link underline={'none'} target={'_blank'}>
      <Box
        className={classes.item}
        sx={{ flexGrow: 1, backgroundColor: 'info.main', borderRadius: '1rem' }}
      >
        <Grid xs={12}>
          <FlexGrid sx={{ borderBottom: '1px solid', borderColor: 'info.dark', padding: '0' }}>
            <Grid xs={5} sx={{ pl: '1.5rem' }}>
              <Item
                sx={{
                  backgroundColor: 'primary.main',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '0,25rem 0.5rem',
                  gap: '0,25rem',
                  borderRadius: '1.5rem',
                }}
              >
                <Box sx={{ width: '1rem', height: '1rem' }} component={'img'} src={Kubok}></Box>
                <Typography color={'info.main'} variant={'body1'}>
                  #{numberCount}
                </Typography>
              </Item>
            </Grid>
            <Grid xs sx={{ pr: '1.5rem' }}>
              <Item
                sx={{
                  height: '1.5rem',
                  display: 'flex',
                  justifyContent: 'flex-end',
                  columnGap: '0.6rem',
                  alignItems: 'center',
                }}
              >
                <Button
                  size={'small'}
                  variant={'outlined'}
                  color={'info'}
                  sx={{ p: 0, w: 'max-content', minWidth: 'none' }}
                >
                  <Box component={'img'} src={Plus}></Box>
                </Button>
                <Button size={'small'} variant={'outlined'} color={'info'}>
                  <Box component={'img'} src={Arrow}></Box>
                </Button>
              </Item>
            </Grid>
          </FlexGrid>
          <FlexGrid flexDirection={'column'}>
            <Grid xs sx={{ pb: 0 }}>
              <Item sx={{ position: 'relative', height: '4rem', width: '4rem' }}>
                <Box
                  component={'img'}
                  src={creator.avatarUrl}
                  sx={{ borderRadius: '3rem', width: '100%', height: '100%' }}
                ></Box>
                <Box sx={{ position: 'absolute', bottom: -4, right: 0 }}>
                  <Box component={'img'} src={Almaz}></Box>
                </Box>
              </Item>
            </Grid>
            <Grid xs sx={{ pb: 0 }}>
              <Item sx={{ display: 'flex', flexDirection: 'column' }}>
                <Item sx={{ display: 'flex', flexDirection: 'row' }}>
                  <Typography variant={'caption'} color={'secondary.dark'} sx={{ pr: '0.2rem' }}>
                    {creator.firstName}
                  </Typography>
                  <Typography variant={'caption'} color={'secondary.dark'}>
                    {creator.lastName}
                  </Typography>
                </Item>
                <Item sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Typography color={'secondary.dark'} sx={{ fontWeight: 600, pr: '0.2rem' }}>
                    {price}
                  </Typography>
                  <Typography>ETN</Typography>
                </Item>
              </Item>
            </Grid>
          </FlexGrid>
        </Grid>
      </Box>
    </Link>
  );
};

export default SellersItem;

import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Link, Typography } from '@mui/material';

import IMG from '../../../assets/images/infoBoxImg.png';
import { FeedItemUserProps } from '../Feed/types';
import Item from '../../UI/Item/Item';

const FeedItemUser = ({ number, creator, startPrice }: FeedItemUserProps) => {
  return (
    <Grid
      xs
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
      <Item>
        <Link target={'_blank'} underline={'none'} sx={{ display: 'flex' }}>
          <Item sx={{ position: 'relative' }}>
            <Box
              sx={{
                borderRadius: '3rem',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mr: '1rem',
              }}
            >
              <Box
                sx={{
                  color: 'info.main',
                  border: '0.2rem solid',
                  borderColor: 'info.main',
                  backgroundColor: 'secondary.dark',
                  position: 'absolute',
                  top: '0px',
                  left: '0px',
                  zIndex: 2,
                  width: '1.5rem',
                  height: '1.5rem',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {number}
              </Box>
              <Box
                component={'img'}
                src={creator.avatarUrl == '' ? IMG : creator.avatarUrl}
                sx={{ width: '56px', height: '56px' }}
              ></Box>
            </Box>
          </Item>
          <Item sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Box sx={{ textAlign: 'left', display: 'flex' }}>
              <Typography variant={'body1'} color={'secondary.dark'} fontWeight={600} mr={1}>
                {creator.firstName}
              </Typography>
              <Typography variant={'body1'} color={'secondary.dark'} fontWeight={600}>
                {creator.lastName}
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'left', display: 'flex', alignItems: 'center' }}>
              <Typography variant={'caption'} color={'secondary.dark'} sx={{ mr: 0.5 }}>
                {startPrice}
              </Typography>
              <Typography color={'secondary.light'}>ETN</Typography>
            </Box>
          </Item>
        </Link>
      </Item>
    </Grid>
  );
};

export default FeedItemUser;

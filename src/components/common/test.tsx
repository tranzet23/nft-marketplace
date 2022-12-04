import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Link, Typography } from '@mui/material';

import Item from '../UI/Item/Item';

const Test = () => {
  return (
    <Grid
      container
      xs={12}
      mob={3.5}
      sm
      flexDirection={'column'}
      spacing={{ sm: 10, xs: 1 }}
      sx={{ height: 'auto' }}
    >
      <Grid xs sx={{ height: 'max-content' }}>
        <Item sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <Typography variant={'body2'} color={'secondary.dark'} fontWeight={600}>
            Stacks
          </Typography>
        </Item>
      </Grid>
      <Grid container xs flexDirection={'column'} rowSpacing={2}>
        <Grid xs>
          <Box
            component='ul'
            sx={{ pl: 0, m: 0, display: 'flex', flexDirection: 'column', rowGap: 6 }}
          >
            <li>
              <Link>
                <Typography variant={'caption'} fontWeight={700} color={'secondary.light'}>
                  Discover
                </Typography>
              </Link>
            </li>
            <li>
              <Link>
                <Typography variant={'caption'} fontWeight={700} color={'secondary.light'}>
                  Connect wallet
                </Typography>
              </Link>
            </li>
            <li>
              <Link>
                <Typography variant={'caption'} fontWeight={700} color={'secondary.light'}>
                  Create item
                </Typography>
              </Link>
            </li>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Test;

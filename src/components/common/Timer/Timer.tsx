import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Typography } from '@mui/material';

type TimerProps = {
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
};

const Completionist = () => (
  <Box sx={{ textAlign: 'center' }}>
    {' '}
    <Typography>You are good to go!</Typography>
  </Box>
);

const Timer = ({ hours, minutes, seconds, completed }: TimerProps) => {
  if (completed) {
    return <Completionist />;
  } else {
    return (
      <Grid container sx={{ flexDirection: 'column', alignItems: 'center' }}>
        <Grid sx={{ mb: 2 }}>
          <Typography variant={'body2'} color={'secondary.dark'}>
            Auction ending in
          </Typography>
        </Grid>

        <Grid container columnSpacing={2} xs={12} sx={{ justifyContent: 'center' }}>
          <Grid xs={3} container sx={{ flexDirection: 'column', alignItems: 'center' }}>
            <Grid>
              <Typography variant={'h4'} color={'secondary.dark'}>
                {hours}
              </Typography>
            </Grid>
            <Grid>
              <Typography variant={'body2'} color={'secondary.light'}>
                Hrs
              </Typography>
            </Grid>
          </Grid>
          <Grid xs={3} container sx={{ flexDirection: 'column', alignItems: 'center' }}>
            <Grid>
              <Typography variant={'h4'} color={'secondary.dark'}>
                {minutes}
              </Typography>
            </Grid>
            <Grid>
              <Typography variant={'body2'} color={'secondary.light'}>
                mins
              </Typography>
            </Grid>
          </Grid>
          <Grid xs={3} container sx={{ flexDirection: 'column', alignItems: 'center' }}>
            <Grid>
              <Typography variant={'h4'} color={'secondary.dark'}>
                {seconds}
              </Typography>
            </Grid>
            <Grid>
              <Typography variant={'body2'} color={'secondary.light'}>
                secs
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
};

export default Timer;

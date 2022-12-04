import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Typography } from '@mui/material';

export type UserBlockProps = {
  photo: string;
  title: string;
  name: string;
};

const UserBlock = ({ photo, title, name }: UserBlockProps) => {
  return (
    <Grid container columnSpacing={4}>
      <Grid>
        <Box sx={{ borderRadius: '3rem', width: '2.5rem', height: '2.5rem', overflow: 'hidden' }}>
          <img src={photo} alt='' />
        </Box>
      </Grid>
      <Grid container columnSpacing={4} sx={{ flexDirection: 'column', justifyContent: 'center' }}>
        <Typography variant={'body1'} color={'secondary.light'}>
          {title}
        </Typography>
        <Typography variant={'caption'} color={'secondary.dark'}>
          {name}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default UserBlock;

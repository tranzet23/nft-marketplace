import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Avatar, Box, Typography } from '@mui/material';
import clsx from 'clsx';

import IMG from '../../../assets/images/infoBoxImg.png';
import classes from '../../../assets/styles/components/InfoBox.module.scss';
import Item from '../../UI/Item/Item';

export type UserBlockProps = {
  imgUrl?: string;
  topLabel: string;
  bottomLabel: string;
  feed?: boolean;
};

const InfoBox = ({ imgUrl = IMG, topLabel, bottomLabel, feed }: UserBlockProps) => {
  const presidency = clsx({
    [classes.feed]: feed,
  });

  return (
    <Grid xs={6} spacing={1} sx={{ display: 'flex', alignItems: 'center', textAlign: 'left' }}>
      <Grid>
        <Item
          sx={{
            borderRadius: '3rem',
            overflow: 'hidden',
            position: 'relative',
            textAlign: 'left',
          }}
        >
          {feed && (
            <Box
              sx={{
                color: 'info.main',
                border: '0.2rem solid',
                borderColor: 'info.main',
                backgroundColor: 'secondary.dark',
                position: 'absolute',
                top: '-4px',
                left: '-4px',
                zIndex: 2,
                width: '1.5rem',
                height: '1.5rem',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              6
            </Box>
          )}
          <Avatar className={presidency} src={imgUrl} />
        </Item>
      </Grid>

      <Grid
        xs
        columnSpacing={4}
        sx={{ flexDirection: 'column', justifyContent: 'center', display: 'flex' }}
      >
        <Item>
          {!feed ? (
            <Box sx={{ flexDirection: 'column', textAlign: 'left' }}>
              <Item sx={{ textAlign: 'left' }}>
                <Typography variant={'caption'} color={'secondary.dark'}>
                  {topLabel}
                </Typography>
              </Item>
              <Item sx={{ textAlign: 'left' }}>
                <Typography variant={'caption'} color={'secondary.dark'} fontWeight={600}>
                  {bottomLabel}
                </Typography>
              </Item>
            </Box>
          ) : (
            <Box>
              <Item sx={{ textAlign: 'left' }}>
                <Typography variant={'body1'} color={'secondary.light'}>
                  {topLabel}
                </Typography>
              </Item>
              <Box alignItems={'center'} sx={{ display: 'flex' }}>
                <Item>
                  <Typography variant={'caption'} color={'secondary.dark'} sx={{ mr: 0.5 }}>
                    {bottomLabel}
                  </Typography>
                </Item>
                <Item>
                  <Typography color={'secondary.light'}>ETN</Typography>
                </Item>
              </Box>
            </Box>
          )}
        </Item>
      </Grid>
    </Grid>
  );
};

export default InfoBox;

import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Button, ImageList, ImageListItem, Typography } from '@mui/material';

import Item from '../../UI/Item/Item';
import { CollectionsType } from '../Collections/data';
import FlexGrid from '../../UI/CustomGrid/FlexGrid';

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

const CollectionsItem = ({ images, count, creator }: CollectionsType) => {
  return (
    <Grid xs={4}>
      <Item sx={{ backgroundColor: 'info.light' }}>
        <Box>
          <ImageList variant='quilted' cols={6} rowHeight={80}>
            {images.map((item) => (
              <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                <img
                  {...srcset(item.img, 121, item.rows, item.cols)}
                  alt={item.title}
                  loading='lazy'
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Item>
      <Item
        sx={{ backgroundColor: 'info.light', flexDirection: 'column', alignItems: 'flex-start' }}
      >
        <Box>
          <Typography
            variant={'h5'}
            color={'secondary.dark'}
            textAlign={'left'}
            sx={{ mb: '0.5rem' }}
          >
            Awesome collection
          </Typography>
        </Box>
        <FlexGrid xs={12} rowSpacing={1}>
          <Grid xs={1} sx={{ display: 'flex', justifyContent: 'flex-start', pl: 0 }}>
            <Box component={'img'} src={creator.avatarUrl}></Box>
          </Grid>
          <Grid xs={8} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
            <Typography variant={'caption'} color={'secondary.dark'}>
              By &nbsp;
            </Typography>
            <Typography variant={'caption'} color={'secondary.dark'} fontWeight={600}>
              {creator.firstName} {creator.lastName}
            </Typography>
          </Grid>
          <Grid xs={3}>
            <Button sx={{ border: '0.125rem solid', borderColor: 'info.dark', p: '0.5rem' }}>
              <Typography color={'secondary.dark'} fontWeight={700}>
                {count} items
              </Typography>
            </Button>
          </Grid>
        </FlexGrid>
      </Item>
    </Grid>
  );
};

export default CollectionsItem;

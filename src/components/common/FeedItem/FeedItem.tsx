import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Avatar, Box, Button, Typography } from '@mui/material';

import FlexGrid from '../../UI/CustomGrid/FlexGrid';
import EthBlock from '../EthBlock/EthBlock';
import { FeedItemProps } from '../Feed/types';
import Item from '../../UI/Item/Item';

const FeedItem = ({ imgUrl, price, countEnd, title, avatarUrl }: FeedItemProps) => {
  return (
    <FlexGrid columnSpacing={0.1}>
      <Grid xs={5.3}>
        <Item sx={{ height: '9,25rem' }}>
          <Box component={'img'} src={imgUrl}></Box>
        </Item>
      </Grid>
      <Grid xs={6.5}>
        <Item>
          <FlexGrid
            flexDirection={'column'}
            rowSpacing={1}
            columnSpacing={0.1}
            alignItems={'flex-start'}
          >
            <Grid xs={12}>
              <Item>
                <Typography variant='body2' color={'secondary.main'} textAlign={'left'}>
                  {title}
                </Typography>
              </Item>
            </Grid>
            <Grid xs={12}>
              <Item>
                <FlexGrid spacing={0.1} xs={10} lg={12} justifyContent={'space-between'}>
                  <Grid xs={2}>
                    <Item>
                      <Avatar src={avatarUrl} sx={{ width: '1.5rem', height: '1.5rem' }} />
                    </Item>
                  </Grid>
                  <Grid xs={6}>
                    <Item>
                      <EthBlock price={price} />
                    </Item>
                  </Grid>
                  <Grid>
                    <Item>
                      <Typography>1 of {countEnd}</Typography>
                    </Item>
                  </Grid>
                </FlexGrid>
              </Item>
            </Grid>

            <Grid xs>
              <Item>
                <Button
                  variant={'outlined'}
                  color={'secondary'}
                  sx={{ color: 'secondary.dark', borderColor: 'info.dark' }}
                >
                  Place a bid
                </Button>
              </Item>
            </Grid>
          </FlexGrid>
        </Item>
      </Grid>
    </FlexGrid>
  );
};

export default FeedItem;

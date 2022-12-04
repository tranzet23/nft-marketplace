import React from 'react';
import { Avatar, Box, Button, Container, Typography, useMediaQuery } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { makeStyles } from '@mui/styles';

import FlexGrid from '../../UI/CustomGrid/FlexGrid';
import NFT from '../../../assets/images/nft.png';
import Avatar1 from '../../../assets/images/avatar/avatar.png';
import EthBlock from '../EthBlock/EthBlock';
import FeedItem from '../FeedItem/FeedItem';
import FeedItemUser from '../FeedItemUser/FeedItemUser';
import Item from '../../UI/Item/Item';
import theme from '../../../theme/Theme';

import { FeedItemData, FeedItemUserData } from './data';

type Props = {
  tabletMedia: boolean;
};

const useStyles = makeStyles({
  wrapItems: {
    height: '33rem',
    '& > div': {
      height: '100%',
    },
    [theme.breakpoints.down('lg')]: {
      height: 'auto',
      justifyContent: 'center',
    },
  },
  wrapItemsCenter: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  wrapItemsLeft: {
    [theme.breakpoints.down('lg')]: {
      marginTop: '2rem',
    },
    '& > div > div:nth-child(2)': {
      overflow: 'hidden',
      [theme.breakpoints.down('lg')]: {
        overflowX: 'scroll',
        overflowY: 'hidden',
      },
    },
    '& > div > div:nth-child(2) > div': {
      [theme.breakpoints.down('lg')]: {
        width: '68rem',
      },
    },
  },
});

const Feed = ({ tabletMedia }: Props) => {
  const classes = useStyles();
  const lgSize = useMediaQuery('(max-width:1200px)');
  return (
    <Container sx={{ pb: tabletMedia ? 16 : 32 }}>
      <FlexGrid
        className={classes.wrapItems}
        columnSpacing={3}
        alignItems={'flex-start'}
        justifyContent={'flex-start'}
      >
        <Grid xs={12} md={6} lg={5}>
          <Item>
            <FlexGrid flexDirection={'column'} rowSpacing={5} md={12}>
              <Grid xs>
                <Item>
                  <Box component={'img'} src={NFT} sx={{ width: '100%' }}></Box>
                </Item>
              </Grid>
              <Grid xs={12}>
                <Item>
                  <FlexGrid
                    xs={12}
                    columnSpacing={1}
                    justifyContent={'space-between'}
                    sx={{ p: 0 }}
                  >
                    <Grid xs={2}>
                      <Item>
                        <Avatar src={Avatar1} />
                      </Item>
                    </Grid>
                    <Grid xs>
                      <Item sx={{ textAlign: 'left' }}>
                        <Typography variant='h5' color={'secondary.dark'}>
                          The future of ETH®
                        </Typography>
                        <Typography variant='caption' color={'secondary.dark'}>
                          18 in stock
                        </Typography>
                      </Item>
                    </Grid>
                    <Grid xs={3}>
                      <Item>
                        <Typography variant='body1' sx={{ mb: 1 }}>
                          Highest bid
                        </Typography>
                        <EthBlock price={1.125} />
                      </Item>
                    </Grid>
                  </FlexGrid>
                </Item>
              </Grid>
            </FlexGrid>
          </Item>
        </Grid>

        <Grid xs={6} lg={4.5} className={classes.wrapItemsCenter}>
          <Item sx={{ mt: '0' }}>
            <FlexGrid
              rowSpacing={6}
              sx={{
                borderRight: lgSize ? 0 : '0.1rem solid',
                borderColor: 'info.dark',
                height: '100%',
              }}
            >
              <Grid xs={12}>
                <Item>
                  {FeedItemData.map((item, index) => (
                    <FeedItem
                      imgUrl={item.imgUrl}
                      price={item.price}
                      countEnd={item.countEnd}
                      title={item.title}
                      avatarUrl={item.avatarUrl}
                      key={index}
                    />
                  ))}
                </Item>
              </Grid>
            </FlexGrid>
          </Item>
        </Grid>

        <Grid xs={12} lg className={classes.wrapItemsLeft}>
          <Item>
            <Grid sx={{ mb: 4 }}>
              <Item>
                <Typography textAlign={'left'}>Latest upload from creators 🔥</Typography>
              </Item>
            </Grid>
            <Grid xs>
              <Item>
                <FlexGrid
                  flexDirection={lgSize ? 'row' : 'column'}
                  rowSpacing={7}
                  alignItems={'flex-start'}
                >
                  {FeedItemUserData.map((item, index) => (
                    <FeedItemUser
                      key={index}
                      number={item.number}
                      startPrice={item.startPrice}
                      creator={item.creator}
                    />
                  ))}
                  <Grid xs>
                    <Item>
                      <Button
                        variant={'outlined'}
                        color={'secondary'}
                        sx={{ color: 'secondary.dark', borderColor: 'info.dark' }}
                      >
                        Discover more
                      </Button>
                    </Item>
                  </Grid>
                </FlexGrid>
              </Item>
            </Grid>
          </Item>
        </Grid>
      </FlexGrid>
    </Container>
  );
};

export default Feed;

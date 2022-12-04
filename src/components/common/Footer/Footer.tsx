import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  FormControl,
  Link,
  Typography,
  useMediaQuery,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { makeStyles } from '@mui/styles';

import FlexGrid from '../../UI/CustomGrid/FlexGrid';
import Logo from '../Logo/Logo';
import Item from '../../UI/Item/Item';
import InputFooter from '../../UI/Input/InputFooter';
import theme, { colors } from '../../../theme/Theme';

const useStyles = makeStyles({
  wrapItems: {
    flexDirection: 'row',
    [theme.breakpoints.down('mob')]: {
      flexDirection: 'column',
    },
  },
  borderBottom: {
    [theme.breakpoints.down('mob')]: {
      borderBottom: `0.2rem solid ${colors.whiteDark}`,
    },
  },
});

const Footer = () => {
  const mobile = useMediaQuery('(max-width:445px)');
  const classes = useStyles();
  const [cookies, setCookies] = useState(false);
  const handleChange = () => {
    setCookies(true);
  };
  return (
    <Container sx={{ pt: '8rem' }}>
      <Box sx={{ flexGrow: 1 }}>
        <FlexGrid flexDirection={'column'} rowSpacing={{ mob: 10, xs: 6 }}>
          <FlexGrid
            className={classes.wrapItems}
            xs={12}
            spacing={1}
            alignItems={'flex-start'}
            sx={{
              borderBottom: '0.2rem solid',
              borderColor: 'info.dark',
            }}
          >
            <Grid container xs={12} sm={3} className={classes.borderBottom}>
              <Item sx={{ textAlign: 'left' }}>
                <Logo />
              </Item>
              <Item>
                <Typography
                  variant={'h5'}
                  color={'secondary.dark'}
                  fontWeight={400}
                  textAlign={'left'}
                >
                  The New Creative Economy.
                </Typography>
              </Item>
            </Grid>

            <Grid
              container
              xs={12}
              mob={3}
              sm
              flexDirection={'column'}
              rowSpacing={{ sm: 10, xs: 1 }}
              className={classes.borderBottom}
            >
              <Grid xs>
                <Item sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <Typography variant={'body2'} color={'secondary.dark'} fontWeight={600}>
                    Stacks
                  </Typography>
                </Item>
              </Grid>
              <Grid container xs flexDirection={'column'} rowSpacing={2}>
                <Grid xs>
                  <Item>
                    <Box
                      component='ul'
                      sx={{
                        pl: 0,
                        m: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        rowGap: 6,
                        textAlign: 'left',
                      }}
                    >
                      <li>
                        <Link>
                          <Typography
                            variant={'caption'}
                            fontWeight={700}
                            color={'secondary.light'}
                          >
                            Discover
                          </Typography>
                        </Link>
                      </li>
                      <li>
                        <Link>
                          <Typography
                            variant={'caption'}
                            fontWeight={700}
                            color={'secondary.light'}
                          >
                            Connect wallet
                          </Typography>
                        </Link>
                      </li>
                      <li>
                        <Link>
                          <Typography
                            variant={'caption'}
                            fontWeight={700}
                            color={'secondary.light'}
                          >
                            Create item
                          </Typography>
                        </Link>
                      </li>
                    </Box>
                  </Item>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              container
              xs={12}
              mob={3}
              sm
              flexDirection={'column'}
              rowSpacing={{ sm: 10, xs: 1 }}
              className={classes.borderBottom}
            >
              <Grid xs>
                <Item sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <Typography variant={'body2'} color={'secondary.dark'} fontWeight={600}>
                    Info
                  </Typography>
                </Item>
              </Grid>
              <Grid container xs flexDirection={'column'} rowSpacing={2}>
                <Grid xs>
                  <Item>
                    <Box
                      component='ul'
                      sx={{
                        pl: 0,
                        m: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        rowGap: 6,
                        textAlign: 'left',
                      }}
                    >
                      <li>
                        <Link>
                          <Typography
                            variant={'caption'}
                            fontWeight={700}
                            color={'secondary.light'}
                          >
                            Download
                          </Typography>
                        </Link>
                      </li>
                      <li>
                        <Link>
                          <Typography
                            variant={'caption'}
                            fontWeight={700}
                            color={'secondary.light'}
                          >
                            Demos
                          </Typography>
                        </Link>
                      </li>
                      <li>
                        <Link>
                          <Typography
                            variant={'caption'}
                            fontWeight={700}
                            color={'secondary.light'}
                          >
                            Support
                          </Typography>
                        </Link>
                      </li>
                    </Box>
                  </Item>
                </Grid>
              </Grid>
            </Grid>

            <Grid container xs={12} mob={5} sm={3.8} flexDirection={'column'} rowSpacing={10}>
              <Grid xs>
                <Item sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <Typography variant={'body2'} color={'secondary.dark'} fontWeight={600}>
                    Join Newsletter
                  </Typography>
                </Item>
              </Grid>
              <Grid container xs flexDirection={'column'} rowSpacing={6}>
                <Grid xs>
                  <Item sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <Typography variant={'caption'} color={'secondary.dark'} textAlign={'left'}>
                      Subscribe our newsletter to get more free design course and resource
                    </Typography>
                  </Item>
                </Grid>
                <Grid xs={12}>
                  <Item sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <FormControl sx={{ width: '100%' }}>
                      <InputFooter />
                    </FormControl>
                  </Item>
                </Grid>
              </Grid>
            </Grid>
          </FlexGrid>

          <FlexGrid
            xs={12}
            sx={{ flexDirection: mobile ? 'column' : 'row', alignItems: mobile ? 'center' : '' }}
          >
            <Grid xs={6}>
              <Item sx={{ display: 'flex' }}>
                <Typography>Copyright © 2021 UI8 LLC. All rights reserved</Typography>
              </Item>
            </Grid>
            {!cookies && (
              <Grid
                xs={6}
                sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}
              >
                <Item>
                  <Typography>We use cookies for better service.</Typography>
                  <Button variant={'text'} onClick={handleChange}>
                    Accept
                  </Button>
                </Item>
              </Grid>
            )}
          </FlexGrid>
        </FlexGrid>
      </Box>
    </Container>
  );
};

export default Footer;

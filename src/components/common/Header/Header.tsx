import React from 'react';
import {
  Box,
  Button,
  Container,
  Divider,
  MenuItem,
  SvgIcon,
  Typography,
  useMediaQuery,
} from '@mui/material';
import Menu from '@mui/material/Menu';
import Grid from '@mui/material/Unstable_Grid2';
import { makeStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';

import Notif from '../../../assets/images/Noti.svg';
import InputSearch from '../../UI/Input/InputSearch';
import Logo from '../Logo/Logo';
import FlexGrid from '../../UI/CustomGrid/FlexGrid';
import Item from '../../UI/Item/Item';
import theme from '../../../theme/Theme';
import '../../../assets/styles/components/Header.css';

export function HeaderMenuBtn(props: any) {
  return (
    <SvgIcon {...props}>
      <MenuIcon />
    </SvgIcon>
  );
}

const useStyles = makeStyles({
  headerLeft: {
    '& > div:nth-child(n + 2)': {
      [theme.breakpoints.down('laptop')]: {
        display: 'none',
      },
    },
  },
  headerMenu: {
    '& li': {
      display: 'flex',
      justifyContent: 'flex-end',
    },
  },
});

const Header = () => {
  const tablet = useMediaQuery('(max-width: 56rem)');
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Container>
      <Box sx={{ pt: tablet ? 5 : 10, display: 'flex' }}>
        <FlexGrid sx={{ alignItems: 'center' }} columnSpacing={8} className={classes.headerLeft}>
          <Grid xs>
            <Logo />
          </Grid>
          <Grid>
            <Item>
              <Divider variant={'inset'} />d
            </Item>
          </Grid>
          <Grid>
            <Item>
              <Typography variant='caption' color='secondary.dark'>
                Discover
              </Typography>
            </Item>
          </Grid>
          <Grid>
            <Item>
              <Typography variant='body2' color='secondary.light'>
                How it work
              </Typography>
            </Item>
          </Grid>
        </FlexGrid>

        <FlexGrid
          xs
          sx={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
            display: tablet ? 'none' : 'flex',
          }}
          columnSpacing={1}
        >
          <Grid container columnSpacing={6} xs sx={{ justifyContent: 'flex-end' }}>
            <Grid>
              <Item>
                <InputSearch />
              </Item>
            </Grid>
            <Grid className={'notification'} sx={{ mr: 5 }}>
              <Item>
                <Box component={'img'} src={Notif} alt={''}></Box>
                <div></div>
              </Item>
            </Grid>
          </Grid>
          <FlexGrid columnSpacing={4} sx={{ justifyContent: 'flex-end' }}>
            <Grid>
              <Button color='primary' variant={'contained'}>
                Upload
              </Button>
            </Grid>
            <Grid>
              <Button color='secondary' variant={'outlined'}>
                Connect Wallet
              </Button>
            </Grid>
          </FlexGrid>
        </FlexGrid>
        {tablet && (
          <Grid xs sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              id='positioned-button'
              aria-controls={open ? 'demo-positioned-menu' : undefined}
              aria-haspopup='true'
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <HeaderMenuBtn color={'secondary'} />
            </Button>
            <Menu
              className={classes.headerMenu}
              id='demo-positioned-menu'
              aria-labelledby='positioned-button'
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <MenuItem onClick={handleClose}>
                <Button color='primary' variant={'contained'} fullWidth>
                  Upload
                </Button>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Button color='secondary' variant={'outlined'} fullWidth>
                  Connect Wallet
                </Button>
              </MenuItem>
              <MenuItem>
                <InputSearch />
              </MenuItem>
            </Menu>
          </Grid>
        )}
      </Box>
    </Container>
  );
};

export default Header;

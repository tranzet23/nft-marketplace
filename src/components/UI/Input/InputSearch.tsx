import React from 'react';
import { IconButton, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import theme from '../../../theme/Theme';

const InputSearch = () => {
  return (
    <Paper variant={'outlined'}>
      <InputBase sx={{ fontSize: 14 }} placeholder='Search' />
      <IconButton type='button' sx={{ p: theme.spacing(0.1) }} aria-label='search'>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default InputSearch;

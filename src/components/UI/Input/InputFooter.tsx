import React from 'react';
import { IconButton, InputBase, Paper, SvgIcon } from '@mui/material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

import theme from '../../../theme/Theme';

export function ArrowIcon(props: any) {
  return (
    <SvgIcon {...props}>
      <ArrowCircleRightIcon />
    </SvgIcon>
  );
}

const InputFooter = () => {
  return (
    <Paper
      variant={'outlined'}
      sx={{ borderRadius: '5rem', height: '3rem', pr: '0.5rem', width: '100%' }}
    >
      <InputBase sx={{ fontSize: 14, pl: 0, width: '100%' }} placeholder='Enter your email' />
      <IconButton
        type='button'
        sx={{ p: theme.spacing(0.1), background: 'primary.main' }}
        aria-label='Enter your email'
      >
        <ArrowIcon color={'primary'} variant={'filled'} size={'large'} sx={{ fontSize: '32px' }} />
      </IconButton>
    </Paper>
  );
};

export default InputFooter;

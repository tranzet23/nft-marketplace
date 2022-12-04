import React from 'react';
import { Box, Typography } from '@mui/material';

type Props = {
  price: string | number;
};

const EthBlock = ({ price }: Props) => {
  return (
    <Box
      sx={{
        border: '0.125rem solid',
        borderColor: 'success.main',
        p: '0.3rem 0.1rem',
        borderRadius: '0.250rem',
        textAlign: 'center',
        minWidth: '4rem',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Typography color={'success.main'} sx={{ fontWeight: 700, width: 'max-content' }}>
        {price} ETH
      </Typography>
    </Box>
  );
};

export default EthBlock;

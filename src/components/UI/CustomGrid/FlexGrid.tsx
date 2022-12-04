import React from 'react';
import Grid, { Grid2Props } from '@mui/material/Unstable_Grid2';

type Props = Grid2Props & {
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
};

const FlexGrid = ({
  children,
  flexDirection = 'row',
  justifyContent = 'center',
  alignItems = 'center',
  ...rest
}: Props) => {
  return (
    <Grid container sx={{ justifyContent, alignItems, flexDirection }} {...rest}>
      {children}
    </Grid>
  );
};

export default FlexGrid;

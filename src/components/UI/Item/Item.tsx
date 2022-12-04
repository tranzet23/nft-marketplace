import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width: 'auto',
  border: 'none',
  boxShadow: 'none',
}));

export default Item;

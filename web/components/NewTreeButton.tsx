import { IconButton } from '@chakra-ui/react';
import { AddRounded } from '@mui/icons-material';
import { FunctionComponent } from 'react';

const NewTreeButton: FunctionComponent = () => (
  <a href='/create-skilltree'>
    <IconButton aria-label='New Skilltree' icon={<AddRounded />} />
  </a>
);

export default NewTreeButton;

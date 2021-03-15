import React from 'react';
import Grid from '@material-ui/core/Grid';

import ListItem from './ListItem';

const CardsList = () => {
  return (
    <Grid container spacing={3}>
      <ListItem title='Vscode Setup' />
      <ListItem title='Rust' />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
    </Grid>
  );
};

export default CardsList;

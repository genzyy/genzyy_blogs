import React from 'react';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import ListItem from './ListItem';

const CardsList = () => {
  return (
    <Grid container spacing={3}>
      <ListItem />
      <ListItem />
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

import React from 'react';
import Grid from '@material-ui/core/Grid';

import ListItem from './ListItem';

const CardsList = () => {
  return (
    <Grid container spacing={3}>
      <ListItem
        title='Vscode Setup'
        image_url='https://raw.githubusercontent.com/genzyy/genzyy_blogs/main/src/content/assets/vscode/vscode.png'
        description='My vscode setup with all the extensions and theme that I use and that makes coding healthy!'
        afterlink='vscode_setup'
      />
      <ListItem
        title='bspwm config'
        image_url='https://raw.githubusercontent.com/genzyy/bspwm-config/master/screenshot.png'
        description='I use bspwm as my main DE/WM on my arch setup and here are the dotfiles'
        afterlink='bspwm_config'
      />
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

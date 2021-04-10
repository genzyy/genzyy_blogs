import React from 'react';
import Grid from '@material-ui/core/Grid';
import RItems from './RItems';
import '../styles/RItems.css';

const Recommended = () => {
  return (
    <div>
      <Grid
        container
        direction='row'
        justify='center'
        alignItems='center'
        spacing={3}
      >
        <RItems
          className='RItems'
          title='bspwm config'
          description='A beutiful linux wm setup'
          link='/bspwm_config'
        />
        <RItems />
      </Grid>
    </div>
  );
};

export default Recommended;

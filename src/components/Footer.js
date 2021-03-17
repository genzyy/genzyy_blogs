import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import RedditIcon from '@material-ui/icons/Reddit';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles(theme => ({
  footer: {
    padding: '40px 20px'
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <Grid
        className={classes.footer}
        container
        direction='column'
        justify='center'
        alignItems='center'
        spacing={3}
      >
        <Grid item>
          <Typography>© genzyy: Rishit Pandey, 2021</Typography>
        </Grid>
        <Grid
          container
          direction='row'
          justify='center'
          alignItems='center'
          spacing={3}
        >
          <Grid item>
            <a
              href='www.reddit.com'
              style={{ color: '#ffffff' }}
              target='_blank'
            >
              <RedditIcon />
            </a>
          </Grid>
          <Grid item>
            <a
              href='www.linkedin.com'
              style={{ color: '#ffffff' }}
              target='_blank'
            >
              <LinkedInIcon />
            </a>
          </Grid>
          <Grid item>
            <a
              href='www.github.com'
              style={{ color: '#ffffff' }}
              target='_blank'
            >
              <GitHubIcon />
            </a>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;

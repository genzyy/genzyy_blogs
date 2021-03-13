import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CardsList from './CardsList';

const useStyles = makeStyles(theme => ({
  blogsContainer: {
    paddingTop: theme.spacing(3)
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
    textAlign: 'left'
  }
}));

const BlogsContainer = () => {
  const classes = useStyles();

  return (
    <div>
      <Container maxWidth='lg' className={classes.blogsContainer}>
        <Typography variant='h4' className={classes.blogTitle}>
          Articles
        </Typography>
        <CardsList />
      </Container>
    </div>
  );
};

export default BlogsContainer;

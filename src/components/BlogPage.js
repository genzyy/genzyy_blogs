import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism/';
import NavBar from './NavBar';
import Readme from '../content/README.md';
import '../BlogPage.css';

const useStyles = makeStyles(theme => ({
  container: {
    margin: '100px'
  }
}));

const BlogPage = () => {
  const [text, setText] = useState('');
  const classes = useStyles();
  fetch(Readme)
    .then(response => response.text())
    .then(text => {
      setText(text);
    });

  const renderers = {
    code: ({ language, value }) => {
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          children={value}
        />
      );
    }
  };

  return (
    <>
      <NavBar />
      <Grid
        className='main_div'
        container
        direction='row'
        justify='center'
        alignItems='center'
      >
        <ReactMarkdown renderers={renderers} className='rmd' source={text} />
      </Grid>
    </>
  );
};

export default BlogPage;

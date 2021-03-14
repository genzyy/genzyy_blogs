import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism/';
import NavBar from './NavBar';
import Readme from '../content/Vscode.md';
import '../BlogPage.css';

const useStyles = makeStyles(theme => ({
  container: {
    margin: '100px'
  }
}));

const BlogPage = () => {
  // State to preserve the text taken from the md file.
  const [text, setText] = useState('');
  const classes = useStyles();
  // fetching the contents of the readme file in a async/await function.
  fetch(Readme)
    .then(response => response.text())
    .then(text => {
      setText(text);
    });

  // Function for rendering the code part in the readme file
  // And to add syntax highlighting in <code></code> part.
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

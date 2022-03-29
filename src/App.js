import './App.css';
import './myComponents/myCSS/body.css';
import { Navbar } from "./myComponents/Navbar";
import { Content1 } from "./myComponents/Content1";
import { Content2 } from "./myComponents/Content2";
import Heading from './components/Heading';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Grid, Paper} from '@material-ui/core';
import Posts from './components/Posts';
import Trending from './components/Trending';
import Recent from './components/Recent';
const useStyles =makeStyles((theme)=>({
     grid: {
       width: '100%',
       margin: '0px'
     },
     paper: {
       margin: theme.spacing(1),
       padding: theme.spacing(1),
       textAlign: 'center',
       background: 'red',
       borderRadius: '1.5rem'
     }
}));

function App() {
  const classes = useStyles();
  return (
    <>

    <Router>
      <Switch>
        <Route exact path="/">
    <div className='mainBody'>
      <Navbar/>
      <Content1/>
      <Content2/>
    </div>
      </Route>

    <div className="blog">
      <Route exact path="/blog">
      <Heading/>
    <Grid container spacing={2} className={classes.grid}>
     <Grid item xs={12} md={8}>
       
       <Posts/>
       
     </Grid>
     <Grid item xs={12} md={4} >
       <Trending/>
       <Recent/>
       
     </Grid>
    </Grid>
      </Route>
    </div>

      </Switch>
    </Router>
    </>
  );
}

export default App;

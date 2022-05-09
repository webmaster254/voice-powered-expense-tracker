
import React from 'react';
import { Grid } from '@material-ui/core';
import './App.css';
import {Details,Main} from './components';
import useStyles from './styles';

const App=()=> {
  const classes= useStyles();
  return (
    <div className="App">
      <Grid className={classes.grid} container spacing={0} alignItems='center' justify='center' style={{height:'100vh'}}>
       <Grid item xs={12} sm={4}>
         <Details/>
       </Grid>

       <Grid item xs={12} sm={3}>
         <Main/>
       </Grid>

       <Grid item xs={12} sm={4}>
         <Details/>
       </Grid>


      </Grid>
    </div>
  );
}

export default App;

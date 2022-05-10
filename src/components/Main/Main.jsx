import { Card, CardContent, CardHeader,Grid, Divider, Typography } from '@material-ui/core'
import React, { useContext } from 'react';
import { ExpenseTrackerContext } from '../../context/context';
import Form from './Form/Form';
import List from './List/List';
import useStyles from './styles';
import InfoCard from '../InfoCard';

const ExpenseTracker=()=> {
    const classes= useStyles();
    const {balance} = useContext(ExpenseTrackerContext);

  return (
      
    <Card className={classes.root}>
        <CardHeader title="Expense Tracker" subheader="Powered by Speechly"/>
        <CardContent>
            <Typography align="center" variant="h5">Total Balance:${balance}</Typography>
            <Typography variant="subtitle1" style={{lineHeight:'1.5em' , marginTop:'20px'}}>
            <InfoCard/>
            </Typography>
            <Divider className={classes.divider}/>
            <Form/>
        </CardContent>
        <CardContent className={classes.cartContent}>
            <Grid container space={2}>
                <Grid item xs={12}>
                    <List/>
                </Grid>
            </Grid>
        </CardContent>

    </Card>
  )
}

export default ExpenseTracker
import { Card, CardContent, CardHeader, Divider, Typography } from '@material-ui/core'
import React from 'react';
import Form from './Form/Form';
import useStyles from './styles';

const ExpenseTracker=()=> {
    const classes= useStyles();
  return (
    <Card className={classes.root}>
        <CardHeader title="Expense Tracker" subheader="Powered by Speechly"/>
        <CardContent>
            <Typography align="center" variant="h5">Total Balance:$500</Typography>
            <Typography variant="subtitle1" style={{lineHeight:'1.5em' , marginTop:'20px'}}>
              .....
            </Typography>
            <Divider className={classes.divider}/>
            <Form/>
        </CardContent>
    </Card>
  )
}

export default ExpenseTracker
import { Button, FormControl, Grid, InputLabel, Select,MenuItem, TextField, Typography } from '@material-ui/core'
import React from 'react';
import useStyles from './styles';

const NewTransactionForm=()=> {
    const classes= useStyles();
  return (
    <Grid container spacing={2}>
        <Grid item xs={12}>
            <Typography align="center" variant="subtitle2" gutterBottom>

            </Typography>
        </Grid>

        <Grid item xs={6}>
            <FormControl fullWidth>
                <InputLabel>Type</InputLabel>
                <Select >
                    <MenuItem value="Income">Income</MenuItem>
                    <MenuItem value="Expense">Expense</MenuItem>
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={6}>
            <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select >
                    
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={6} >
            <TextField type="number" label='Amount' fullwidth/>
        </Grid>
        <Grid item xs={6} >
            <TextField fullWidth type="date" label='Date' />
        </Grid>
      <Button className={classes.button} variant='outlined' color='primary' fullwidth>Create</Button>
    </Grid>
  )
}

export default NewTransactionForm
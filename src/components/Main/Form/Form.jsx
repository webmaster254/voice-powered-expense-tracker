import { Button, FormControl, Grid, InputLabel, Select,MenuItem, TextField, Typography } from '@material-ui/core'
import React,{useContext,useState,useEffect} from 'react';
import { ExpenseTrackerContext } from '../../../context/context';
import { incomeCategories,expenseCategories } from '../../../constants/categories';
import formatDate from '../../../utils/formatDate';
import useStyles from './styles';


const initialState= {
    amount:'',
    category:'',
    type:'Income',
    date:formatDate(new Date()),
};



const NewTransactionForm=()=> {
    const classes= useStyles();
    const {addTransaction} = useContext(ExpenseTrackerContext);
    const [formData,setFormData] = useState(initialState);
    

    const createTransaction = ()=> {
        if(Number.isNaN(Number(formData.amount)) || !formData.date.includes('-'))return;

        if(incomeCategories.map((iC)=>iC.type).includes(formData.category)){
            setFormData({...formData,type:'Income'});

        } else if(expenseCategories.map((iC)=>iC.type).includes(formData.category)){
            setFormData({...formData,type:'Expense'});
        }
    };

    



    const selectedCategories = formData.type === "Income" ? incomeCategories: expenseCategories;
  return (
    <Grid container spacing={2}>
        <Grid item xs={12}>
            <Typography align="center" variant="subtitle2" gutterBottom>

            </Typography>
        </Grid>

        <Grid item xs={6}>
            <FormControl fullWidth>
                <InputLabel>Type</InputLabel>
                <Select value={formData.type} onChange={(e) => setFormData({...formData,type:e.target.value})}>
                    <MenuItem value="Income">Income</MenuItem>
                    <MenuItem value="Expense">Expense</MenuItem>
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={6}>
            <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select value={formData.category} onChange={(e)=> setFormData({...formData,category:e.target.value})} >
                    {selectedCategories.map((c)=> <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>)}
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={6} >
            <TextField fullwidth type="number" label='Amount' value={formData.amount} onChange={(e)=>setFormData({...formData,amount:e.target.value})} />
        </Grid>
        <Grid item xs={6} >
            <TextField fullWidth type="date" label='Date' value={formData.date} onchange={(e)=> setFormData({...formData,date:formatDate(e.target.value)})} />
        </Grid>
      <Button className={classes.button} variant='outlined' color='primary' onClick={createTransaction} fullwidth>Create</Button>
    </Grid>
  )
}

export default NewTransactionForm
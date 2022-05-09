import { Typography,Card,CardHeader,CardContent } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

const DetailsCard=() =>{
    const classes= useStyles();
  return (
    <Card >
        <CardHeader/>
        <CardContent>
            <Typography variant='h5'>$100</Typography>
        </CardContent>
    </Card>
  )
}

export default DetailsCard;
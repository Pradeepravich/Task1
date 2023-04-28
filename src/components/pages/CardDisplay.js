import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '../../assets/images/avatar.jpg'
import Grid from '@mui/material/Unstable_Grid2';

const CardDisplay = (props) => {
  const {data,title} = props;

  return (
    <div>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}></Grid>
            {data.map((item)=>
                <Grid xs={6}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            component="img"
                            alt={item.product}
                            height="140"
                            image={Avatar}
                            title={item.product}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Quantity: {item.qty}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div">
                            Price: {item.price}
                            </Typography>                
                        </CardContent>            
                    </Card>
                </Grid> 
            )}
        <Grid/>
    </div>
  )
}

export default CardDisplay
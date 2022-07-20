import React from "react";
import Grid from "@mui/material/Grid";
import { Paper, Avatar, TextField, Button } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../App.css';

const Login=()=> {
    const paperStyle={
        padding: "20px",
        height: "130vh",
        width: 280,
        margin: "20px auto"  
    }
    const avatarStyle={
        backgroundColor:"black"
    }
    const btnstyle={
        margin:"8px 0"
    }




    return(
        <Grid>
             <Paper elevation={10} style={paperStyle}>
                 <Grid align="center">
                <Avatar style={avatarStyle}><ShoppingCartIcon></ShoppingCartIcon></Avatar>
                <h2>Welcome To your Online Shopping Cart</h2>
                </Grid>

                <TextField label="Beans" placeholder="Add or Subtract" fullWidth required></TextField>
                <TextField label="Soups" placeholder="Add or Subtract" fullWidth required></TextField>
                <TextField label="Cheese" placeholder="Add or Subtract" fullWidth required></TextField>
                <TextField label="Perishables" placeholder="Add or Subtract" fullWidth required></TextField>
                <TextField label="Vegetables" placeholder="Add or Subtract" fullWidth required></TextField>
                
        
                <Button
                    type="Submit"
                    color="primary"
                    variant="contained"
                    style={btnstyle}
                    fullWidth
                    >
                        Donate Items
                     </Button>
                     
<p> Thank you so much for Donating to the Hope Center!</p>
<font font-size="100px"><p>provided by code differently dev shop </p></font>



                     
                </Paper>
                </Grid>

    )
}
export default Login;
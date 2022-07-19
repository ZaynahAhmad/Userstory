import React from "react";
import Grid from "@mui/material/Grid";
import { Paper, Avatar, TextField, Button } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Login=()=> {
    const paperStyle={
        padding: "20px",
        height: "70vh",
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
                <TextField label="Soup" placeholder="Add or Subtract" fullWidth required></TextField>
                <TextField label="Cheese" placeholder="Add or Subtract" fullWidth required></TextField>
                <TextField label="Chicken" placeholder="Add or Subtract" fullWidth required></TextField>
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
                     

                     
                </Paper>
                </Grid>

    )
}
export default Login;
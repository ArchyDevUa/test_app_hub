import React from "react";
import { Link } from "react-router-dom";
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { Button } from "@material-ui/core";


const Navbar = () => {
    return (
      <AppBar position='static' color='default'>
        <Toolbar>
          <Button style={{ fontSize: '20px' }} color="inherit" component={Link} to="/">Home</Button>
          
        </Toolbar>
      </AppBar>
    )
  
}

export default Navbar;
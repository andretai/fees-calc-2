import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Dialpad, Home, Receipt } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  navbar: {
    padding: '32px 16px'
  }
}));

const Navbar = () => {

  // CSS
  const classes = useStyles();

  return (
    <nav className={`${classes.navbar}`}>
      <List>
        <ListItem button>
          <ListItemIcon><Home/></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><Receipt/></ListItemIcon>
          <ListItemText primary="Transactions" />
        </ListItem>
        {/* <ListItem button>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="Resources" />
        </ListItem> */}
        <ListItem button>
          <ListItemIcon><Dialpad/></ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </nav>
  )
}

export default Navbar

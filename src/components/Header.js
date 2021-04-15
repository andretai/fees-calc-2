import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Drawer, IconButton, Toolbar, Typography } from '@material-ui/core';
import { MenuOpen } from '@material-ui/icons';
import Navbar from './Navbar';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  navbar: {
    backgroundColor: '#1a535c'
  },
  menu: {
    color: '#f7fff7'
  },
  brand: {
    color: '#f7fff7',
    fontStyle: 'italic',
    fontWeight: 800
  }
}));

const Header = () => {

  // CSS
  const classes = useStyles();

  // State
  const [navbar, toggleNavbar] = React.useState(false);

  return (
    <>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <IconButton edge="start" onClick={() => toggleNavbar(true)}>
            <MenuOpen className={classes.menu} />
          </IconButton>
          <div className={classes.grow}></div>
          <Typography variant="body1" className={classes.brand}>Tranzact2</Typography>
        </Toolbar>
      </AppBar>
      <Drawer open={navbar} onClose={() => toggleNavbar(false)}>
        <Navbar/>
      </Drawer>
    </>
  );
}

export default Header;

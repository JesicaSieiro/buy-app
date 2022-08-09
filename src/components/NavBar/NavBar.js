import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardWidget from '../CardWidget/CardWidget';
import './NavBar.css'
import { Link } from 'react-router-dom';

const drawerWidth = 240;
/* const navItems = ['Home', 'About', 'Contact']; */
const navItems = [
  <Link to="/" className="btn-nav">Home</Link>, <Link to='category/buzo' className="btn-nav">Buzos</Link>, <Link className="btn-nav" to='category/remera'>Remeras</Link>];


function NavBar(props){
    const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} >
      <h3 className="logo">Buy</h3>
      <Divider />
      <List>
        {/* {navItems.map((item) => (
           <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} >
              <ListItemText primary={item} className="btn-nav"/>
            </ListItemButton>
          </ListItem> 
          
        ))} */}
        <Link to="/" className="btn-nav">Home</Link>
        <Link to='category/buzo' className="btn-nav">Buzos</Link>
        <Link className="btn-nav" to='category/remera'>Remeras</Link>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
    return(
        
        <div sx={{ display: 'flex' }}>
      <AppBar className="head" >
        <Toolbar className="nav-gral">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <h3 className="logo">Buy</h3>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#000' }} className="btn-nav"> 
                {item}
              </Button>
            ))}
          </Box>
          <CardWidget></CardWidget>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        </Box>
      </div>
     
    );
}
export default NavBar;
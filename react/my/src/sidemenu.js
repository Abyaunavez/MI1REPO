import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function SideMenu() {
  return (
    <Drawer variant="permanent" anchor="left">
      <List>
        <ListItem button>
          <ListItemText primary="Inicio" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Acerca de" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Contacto" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default SideMenu;

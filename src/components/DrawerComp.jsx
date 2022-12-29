import { MenuOutlined } from "@mui/icons-material";
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useState } from "react"

export const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
        <Drawer 
        open={openDrawer}
        onClose={() => setOpenDrawer(false)} 
        >
          <List>
            <ListItemButton>
              <ListItemIcon>
                <ListItemText>Hola</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          </List>
        </Drawer>
        <IconButton 
          onClick={() => setOpenDrawer(!openDrawer)}
        >
          <MenuOutlined />
        </IconButton>
    </>
  )
}

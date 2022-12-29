import { PersonRemove } from "@mui/icons-material";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { DrawerComp } from "./DrawerComp";

export const NavBar = () => {
  const [value, setValue] = useState();

  return (
    <>
      <AppBar>
        <Toolbar sx={{ backgroundColor: "black" }}>
          <Typography
            variant="h4"
            sx={{
              color: "primary.main",
            }}
          >
            clientes
          </Typography>

          <Tabs
            sx={{ marginLeft: "auto" }}
            textColor="inherit"
            value={value}
            onChange={(e, value) => setValue(value)}
            indicatorColor="primary"
          >
            <Tab label="clientes" sx={{ color: "white" }} />
            <Tab label="Registrar" sx={{ color: "white", ml: 2 }} />
          </Tabs>
          <PersonRemove sx={{ color: "white", cursor: "pointer", ml: 2 }} />
        </Toolbar>
        <DrawerComp />
      </AppBar>
    </>
  );
};

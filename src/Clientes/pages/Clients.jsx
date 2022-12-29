import { useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, Grid, Modal, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLoadingNotes } from "../../store/clientData/thunks";
import { setActive } from "../../store/clientData/clientSlice";

const columns = [
  // { field: 'id', headerName: 'ID', width: 90 },
  {
    field: "name",
    headerName: "Nombre",
    width: 150,
  },
  {
    field: "nDocument",
    headerName: "Numero de documento",
    width: 250,
  },
  {
    field: "address",
    headerName: "Dirección",
    width: 160,
  },
  {
    field: "phone",
    headerName: "Numero de telefono",
    width: 160,
  },
];

export const Clients = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { CLients, active } = useSelector((state) => state.clients);

  const data = [];
  CLients.map((cli, id) => {
    cli = { ...cli, id };
    data.push(cli);
  });

  // agrega los clientes ya existentes
  useEffect(() => {
    dispatch(startLoadingNotes());
  }, []);

  return (
    <>
      <Grid
        container
        justifyContent="center"
        direction="column"
        sx={{
          width: "100%",
          height: "100vh",
          backgroundColor: "primary.main",
          padding: 2,
        }}
      >
        <Button
          onClick={() => navigate("/clientes/registrar")}
          sx={{ width: "300px", backgroundColor: "blueviolet" }}
          variant="contained"
        >
          Agregar nuevo cliente
        </Button>
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            mb: 2,
            fontSize: 30,
            fontWeight: "700",
          }}
        >
          Registros
        </Typography>
        <Grid xs={12} md={10} item>
          <Box sx={{ height: 400, width: "100%" }}>
            <DataGrid
              sx={{ backgroundColor: "white", cursor: "pointer" }}
              rows={data}
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[10]}
              checkboxSelection
              disableSelectionOnClick
              experimentalFeatures={{ newEditingApi: true }}
              onRowClick={(e) => {
                dispatch(setActive(e.row));
              }}
            />
          </Box>
        </Grid>

        {/* muestra informacion del cliente (modal) */}
        <Modal
          open={active !== null}
          onClose={() => {
            dispatch(setActive(null));
          }}
        >
          <Grid
            item
            xs={6}
            justifyContent="center"
            sx={{
              backgroundColor: "white",
              padding: "15px",
              position: "absolute",
              width: "400px",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              border: "1px solid #000",
              borderRadius: "30px 0px ",
              boxShadow: "0px 3px 3px 1px #00000050",
            }}
          >
            <Typography
              variant="h4"
              sx={{ textAlign: "center", fontWeight: "bold" }}
            >
              Información
            </Typography>
            <Grid container direction="column">
              <Typography
                sx={{
                  mt: 1,
                  border: "1px solid #000",
                  padding: 1,
                  width: "100%",
                }}
              >
                {" "}
                {active?.name}{" "}
              </Typography>
              <Typography
                sx={{
                  mt: 1,
                  border: "1px solid #000",
                  padding: 1,
                  width: "100%",
                }}
              >
                {" "}
                {active?.nDocument}{" "}
              </Typography>
              <Typography
                sx={{
                  mt: 1,
                  border: "1px solid #000",
                  padding: 1,
                  width: "100%",
                }}
              >
                {" "}
                {active?.address}{" "}
              </Typography>
              <Typography
                sx={{
                  mt: 1,
                  border: "1px solid #000",
                  padding: 1,
                  width: "100%",
                }}
              >
                {" "}
                {active?.phone}{" "}
              </Typography>
            </Grid>
          </Grid>
        </Modal>
      </Grid>
    </>
  );
};

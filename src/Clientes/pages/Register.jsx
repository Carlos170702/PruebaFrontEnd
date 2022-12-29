import { Button, Grid, TextField, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useForm } from "../../hooks/useForm";
import { startInsertClient } from "../../store/clientData/thunks";

const formData = {
  name: "",
  nDocument: "",
  address: "",
  phone: "",
};

export const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isSaving, message } = useSelector((state) => state.clients);
  const { formState, name, nDocument, address, phone, onInputChange } =
    useForm(formData);

  useEffect(() => {
    if (message?.msg.length > 0) {
      message.status
        ? Swal.fire("Registrado", message.msg, "success")
        : Swal.fire({
            icon: "error",
            title: "Error",
            text: message.msg,
          });
    }
  }, [message]);

  return (
    <>
      <Grid
        container
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          minHeight: "100vh",
          backgroundColor: "primary.main",
          width: "100%",
          m: "0",
        }}
      >
        <Grid
          item
          className="shadow-register"
          xs={3}
          sx={{
            backgroundColor: "white",
            padding: 4,
            borderRadius: 2,
            margin: "0 10px",
          }}
        >
          <Typography variant="h5" sx={{ mb: 1, color: "black" }}>
            Registrar
          </Typography>

          <form>
            <Grid container justifyContent="end">
              <Grid item xs={12} md={3} sx={{ ml: 2, textAlign: "end" }}>
                <Button
                  onClick={() => navigate("/clientes/registros")}
                  variant="contained"
                  sx={{ backgroundColor: "blueviolet", width: "120px" }}
                >
                  Registros
                </Button>
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12} md={6} sx={{ mt: 1 }}>
                <TextField
                  type="text"
                  label="Nombre del cliente "
                  placeholder="Nombre"
                  fullWidth
                  name="name"
                  value={name}
                  onChange={onInputChange}
                />
              </Grid>
              <Grid item xs={12} md={6} sx={{ mt: 1 }}>
                <TextField
                  type="number"
                  label="Numero de documento"
                  placeholder="123456789123456789"
                  fullWidth
                  name="nDocument"
                  value={nDocument}
                  onChange={onInputChange}
                />
              </Grid>
              <Grid item xs={12} md={6} sx={{ mt: 1 }}>
                <TextField
                  type="text"
                  label="Dirección"
                  placeholder="calle y colonia"
                  fullWidth
                  name="address"
                  value={address}
                  onChange={onInputChange}
                />
              </Grid>
              <Grid item xs={12} md={6} sx={{ mt: 1 }}>
                <TextField
                  type="number"
                  label="Numero de telefono"
                  placeholder="Numero"
                  fullWidth
                  name="phone"
                  value={phone}
                  onChange={onInputChange}
                />
              </Grid>

              <Grid container justifyContent="end">
                <Grid item xs={12} md={3} sx={{ ml: 2 }}>
                  <Button
                    disabled={isSaving}
                    onClick={() => dispatch(startInsertClient(formState))}
                    variant="contained"
                    fullWidth
                    sx={{
                      mt: 2,
                    }}
                  >
                    Registrar
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

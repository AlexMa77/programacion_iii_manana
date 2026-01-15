import { Box, TextField, Button } from "@mui/material";
import type { JSX } from "react";

export default function Register(): JSX.Element {
  return (
    <Box sx={{ maxWidth: 400, margin: "0 auto", padding: 2 }}>
      <h1>Registro</h1>
      <TextField label="Email" fullWidth margin="normal" />
      <TextField label="Contraseña" type="password" fullWidth margin="normal" />
      <Button variant="contained" fullWidth sx={{ marginTop: 2 }}>
        Registrarse
      </Button>
    </Box>
  );
}

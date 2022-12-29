import { Navigate, Route, Routes } from "react-router-dom"
import { Clients } from "../pages/Clients"
import { Register } from "../pages/Register"

export const ClientRoutes = () => {
  return (
    <Routes>
        <Route path="registros" element={<Clients />} />
        <Route path="registrar" element={<Register />} />
        <Route path="/*" element={<Navigate to='/clientes/registros' />} />
    </Routes>
  )
}

import { Route, Routes } from "react-router-dom"
import { ClientRoutes } from "../Clientes/routes/clientRoutes"

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/clientes/*" element={ <ClientRoutes /> } />
    </Routes>
  )
}

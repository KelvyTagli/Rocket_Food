import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../Hooks/auth";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.Routes";

export function Router() {
    const { user } = useAuth()

    return(
        <BrowserRouter>
            {user ? <AppRoutes/> : <AuthRoutes />}
        </BrowserRouter>
    )
}
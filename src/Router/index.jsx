import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../Hooks/auth";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.Routes";
import { AdminRoutes } from "./admin.routes";

import { USER_ROLE } from "../utils/roles";

export function Router() {
    const { user } = useAuth()

    function AccessRoute() {
        switch(user.admin) {
            case USER_ROLE.ADMIN:
                return <AdminRoutes/>;

            case USER_ROLE.USER: 
                return <AppRoutes/>;
        }
    }
    return(
        <BrowserRouter>
            {user ? <AccessRoute/> : <AuthRoutes />}
        </BrowserRouter>
    )
}
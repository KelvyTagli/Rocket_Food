import { BrowserRouter } from "react-router-dom";

// import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth,Routes";

export function Router() {
    return(
        <BrowserRouter>
            <AuthRoutes/>
        </BrowserRouter>
    )
}
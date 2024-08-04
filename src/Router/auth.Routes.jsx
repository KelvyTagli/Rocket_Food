import { Routes, Route } from "react-router-dom";

import { SignIn } from '../Pages/signIn'
import { SignUp } from '../Pages/signUp'

export function AuthRoutes() {
    return(
        <Routes>
            <Route path="/Rocket_Food" element={<SignIn/>}/>
            <Route path="/Rocket_Food/register" element={<SignUp/>}/>
        </Routes>
    )
}
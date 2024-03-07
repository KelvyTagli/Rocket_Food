import { Routes, Route } from "react-router-dom";

import { SignIn } from '../Pages/signIn'
import { SignUp } from '../Pages/signUp'

export function AuthRoutes() {
    return(
        <Routes>
            <Route path="/" element={<SignIn/>}/>
            <Route path="/register" element={<SignUp/>}/>
        </Routes>
    )
}
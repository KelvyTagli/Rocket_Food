import { Routes, Route } from 'react-router-dom'

import { Admin } from '../Pages/Admin/Home_Admin'
import { Error } from '../Pages/404'

export function AdminRoutes() {
    return (
        <Routes>
            <Route path='/Rocket_Food/' element={<Admin />}/>
            <Route path = "*" exact={true} element={<Error/>} />
        </Routes>
    )
}
import { Routes, Route } from 'react-router-dom'

import { Admin } from '../Pages/Admin/Home'
import { Dish_admin } from '../Pages/Admin/Dish'
import { Edit } from '../Pages/Admin/Edit'
import { New } from '../Pages/Admin/New'
import { Error } from '../Pages/404'

export function AdminRoutes() {
    return (
        <Routes>
            <Route path='/Rocket_Food/' element={<Admin />}/>
            <Route path='/Rocket_Food/Dish/:id' element={<Dish_admin/>}/>
            <Route path='/Rocket_Food/Edit/:id' element={<Edit/>}/>
            <Route path='/Rocket_Food/New' element={<New/>}/>
            <Route path = "*" exact={true} element={<Error/>} />
        </Routes>
    )
}
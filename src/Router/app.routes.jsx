import { Routes, Route } from 'react-router-dom'

import { Home } from '../Pages/home'
import { Dish } from '../Pages/dish'
import { Order } from '../Pages/Orders'

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/Rocket_Food/' element={<Home />}/>
            <Route path='/Rocket_Food/Dish/:id' element={<Dish />}/>
            <Route path='/Rocket_Food/Orders' element={<Order />}/>
        </Routes>
    )
}
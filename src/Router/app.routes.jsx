import { Routes, Route } from 'react-router-dom'

import { Home } from '../Pages/home'
import { Dish } from '../Pages/dish'

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/Rocket_Food/' element={<Home />}/>
            <Route path='/Rocket_Food/Dish' element={<Dish />}/>
        </Routes>
    )
}
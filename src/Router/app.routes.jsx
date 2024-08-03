import { Routes, Route } from 'react-router-dom'

import { Home } from '../Pages/home'
import { Dish } from '../Pages/dish'

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Dish/:id' element={<Dish />}/>
        </Routes>
    )
}
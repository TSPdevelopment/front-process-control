import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import { Cart } from './pages/Cart'
import { Catalog } from './pages/Catalog'
import Welcome from './pages/Welcome'

export function AppRoutes() {
    return(
        <Router>
            <Routes>
                <Route path='/catalog' element={<Catalog />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/' element={<Welcome />} />
            </Routes>
        </Router>
    )
}
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import { Control } from '../pages/Control'
import { Create } from '../pages/Create'

export function AppRoutes() {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Control />} />
                <Route path='/create' element={<Create />} />
            </Routes>
        </Router>
    )
}
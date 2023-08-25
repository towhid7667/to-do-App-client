import { createBrowserRouter } from "react-router-dom";
import TODOHome from '../Pages/TODOHome';

export const router = createBrowserRouter([
    {
        path : '/',
        element : <TODOHome></TODOHome>,
        errorElement : <p>Error</p>
    }
    
])
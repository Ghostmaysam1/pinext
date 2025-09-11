import { createBrowserRouter } from "react-router";

import HomeView from '../views/HomeView';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeView />
    }
])

export default router;
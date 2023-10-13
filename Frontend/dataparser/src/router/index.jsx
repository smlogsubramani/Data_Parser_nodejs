import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/Homepage";
import Getpdf from "../pages/GetPdf";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "/getpdf",
        element: <Getpdf/>
    }
]);

const Router = () => (
    <div>
        <RouterProvider router={router} />
    </div>
);

export default Router;
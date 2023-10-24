import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/Homepage";
import Getpdf from "../pages/GetPdf";
import GetImage from "../pages/GetImage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "/getpdf",
        element: <Getpdf/>
    },
    {
        path: "/getimage",
        element: <GetImage/>
    }
]);

const Router = () => (
    <div>
        <RouterProvider router={router} />
    </div>
);

export default Router;
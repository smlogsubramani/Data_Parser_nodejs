import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/Homepage";
import Getpdf from "../pages/GetPdf";
import GetImage from "../pages/GetImage";
import GetCsv from "../pages/Getcsv";
import Getexcel from "../pages/Getexcel";
import { Getword } from "../pages/Getword";
import Getzip from "../pages/Getzip";

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
    },
    {
        path : "/getcsv",
        element : <GetCsv/>
    },
    {
        path : "/getexcel",
        element : <Getexcel/>
    },
    {
        path : "/getword",
        element : <Getword/>
    },
    {
        path : "/getzip",
        element : <Getzip/>
    },

]);

const Router = () => (
    <div>
        <RouterProvider router={router} />
    </div>
);

export default Router;
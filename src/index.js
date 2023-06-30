import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Comments from "./pages/Comments";
import ErrorTest from "./pages/ErrorTest";
import Forms from "./pages/Forms";

import { TasksProvider } from "./Context";

const someList = [];
const router = createBrowserRouter([
    {
        path: "/",
        element: <App someList={someList} />,
        children: [
            {
                path: "/",
                element: <Home />,
                children: [],
            },
            // {
            //     path: "/contact",
            //     element: <Contact />,
            // },
            // {
            //     path: "/blogs",
            //     element: <Blogs />,
            // },
            // {
            //     path: "/comments",
            //     element: <Comments />,
            // },
            // {
            //     path: "/error",
            //     element: <ErrorTest />,
            // },
            // {
            //     path: "/forms",
            //     element: <Forms />,
            // },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <TasksProvider>
        <RouterProvider router={router} />
    </TasksProvider>
);

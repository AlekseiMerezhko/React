import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import Blogs from "../../pages/Blogs";
import Contact from "../../pages/Contact";
import Home from "../../pages/Home";
import { PrivateRoute } from "../../hoc/PrivateRoute";

class Container extends React.Component {
    render() {
        return (
            <div
                style={{
                    flexGrow: 1,
                }}
            >
                <div>
                    <Outlet />
                </div>
            </div>
        );
    }
}

export default Container;

import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import Blogs from "../../pages/Blogs";
import Contact from "../../pages/Contact";
import SomeView from "../../pages/Home";
import { PrivateRoute } from "../../hoc/PrivateRoute";

class Container extends React.Component {
    state = { counter: 0, showResult: false };

    handleChangeValue = () => {
        this.setState({ counter: 2 }, () => {
            console.log(this.state);
        });
        this.setState((prevState) => ({
            counter: prevState.counter++,
        }));
    };

    reset = () => {
        this.setState({
            counter: 0,
        });
    };
    renderResult = () => {
        return this.state.showResult ? <div></div> : <p></p>;
    };

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

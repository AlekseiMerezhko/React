import { createElement } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Container from "./components/Container/Container";
import { USERS } from "./constants";
import { useTasks } from "./Context";
import { useOnlineStatus } from "./hooks/useOnlineStatus";

const App = () => {
    const darkMode = false;
    const tasks = useTasks();
    const status = useOnlineStatus();
    console.log(status);
    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                // color: darkMode ? "red" : "blue",
                flexDirection: "column",
            }}
        >
            <Header />
            <Container />
            <Footer />
        </div>
    );
};

export default App;

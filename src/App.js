import { createElement } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Container from "./components/Container/Container";
const App = () => {
    const darkMode = false;
    const users = [
        {
            name: "Alex",
            age: 24,
            id: 0,
        },
        {
            name: "Dima",
            age: 20,
            id: 1,
        },
        {
            name: "Dan",
            age: 24,
            id: 2,
        },
    ];
    // const renderCard = () => {
    //     return darkMode ? <div>Hello</div> : <h1>By</h1>;
    // };

    // console.log("darkMode", darkMode);
    return (
        <div
            className="App"
            style={{
                minHeight: "100vh",
                display: "flex",
                // color: darkMode ? "red" : "blue",
                flexDirection: "column",
            }}
        >
            <Footer />
            <Header darkMode={darkMode} users={users} />
            <Container users={users} />
        </div>
    );
};

export default App;

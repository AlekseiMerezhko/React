import React from "react";
// import { Component } from "react";
import Counter from "../Counter";
// import Counter2 from "components/Counter/Counter";
import UsersList from "../UsersList";
//Импорт с Индекс файлов

class Container extends React.Component {
    renderList = (list) => {
        return list.map((elem) => {
            return (
                <div key={elem.id}>
                    <h2>Name: {elem.name}</h2>
                </div>
            );
        });
    };

    handleClick = (e, users) => {
        console.log("click", e, users);
    };

    render() {
        return (
            <div
                style={{
                    flexGrow: 1,
                }}
            >
                <UsersList />
                {/* <Counter /> */}
            </div>
        );
    }
}

export default Container;

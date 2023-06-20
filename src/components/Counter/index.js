import { Component, PureComponent } from "react";

class Counter extends PureComponent {
    state = { value: 0, users: ["a", "b"] };

    incrementValue = () => {
        //0 <-
        let prevValue = this.state.value;
        this.setState({ value: prevValue++ });
        // this.setState({ value: this.state.value-1 });

        this.setState((prevState) => ({ value: prevState.value - 1 }));
    };
    decrementValue = () => {
        this.setState((state) => ({ value: state.value - 1, users: [] }));
    };
    render() {
        console.log("render");
        return (
            <div>
                <h2>Counter: {this.state.value}</h2>
                <button onClick={this.incrementValue}>Increment</button>
                <button onClick={this.decrementValue}>Decrement</button>
                {this.state.users.map((user) => (
                    <div key={user}>{user}</div>
                ))}
            </div>
        );
    }
}

//1 - Изменился Стейт
//2 - Изменились пропсы

export default Counter;

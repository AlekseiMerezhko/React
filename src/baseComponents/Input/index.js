import { Component, Fragment } from "react";

class Input extends Component {
    state = {};

    componentDidMount() {
        // console.log("componentDidMount");
        // this.interval = setTimeout(() => {
        //     console.log("interval");
        // }, 5000);
    }
    componentDidUpdate(prevProps, prevState) {
        // console.log("componentDidUpdate");
    }
    componentWillUnmount() {
        // clearInterval(this.interval);
    }
    // shouldComponentUpdate(nextProps, nextState) {}

    render() {
        // console.log("render");
        return (
            <input
                onChange={this.props.handleChange}
                value={this.props.value}
            />
        );
    }
}

export default Input;

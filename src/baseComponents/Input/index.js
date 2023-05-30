import { Component, Fragment } from "react";

class Input extends Component {
    render() {
        return (
            <input
                onChange={this.props.handleChange}
                value={this.props.value}
            />
        );
    }
}

export default Input;

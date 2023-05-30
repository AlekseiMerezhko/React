import { Component } from "react";
import Input from "../../baseComponents/Input";

class UsersList extends Component {
    state = { users: [], value: "" };
    handleAddUser = () => {
        this.setState({ users: [this.state.value] });
    };
    handleChange = (e) => {
        console.log("event", e.target.value);
        this.setState({ value: e.target.value });
    };
    render() {
        console.log("this.state", this.state);
        return (
            <div>
                {this.state.users.map((user) => (
                    <div key={user}>{user}</div>
                ))}
                
                <Input
                    value={this.state.value}
                    handleChange={this.handleChange}
                />
                <button onClick={this.handleAddUser}>Button</button>
            </div>
        );
    }
}

export default UsersList;

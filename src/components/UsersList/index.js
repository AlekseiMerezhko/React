import { Component } from "react";
import PropTypes from "prop-types";
import Input from "../../baseComponents/Input";

class UsersList extends Component {
    state = { value: "", renderInput: true };
    handleAddUser = () => {
        this.setState({ users: [this.state.value] });
    };
    handleChange = (e) => {
        // console.log("event", e.target.value);
        this.setState({ value: e.target.value });
    };
    handleInputToggle = () => {
        this.setState({ renderInput: false });
    };
    renderUsers = () => {
        if (Array.isArray(this.props.users)) {
            return this.props.users.map((user) => (
                <div key={user.name}>{user.name}</div>
            ));
        }
    };
    render() {
        console.log(this.props.users);
        return (
            <div>
                {this.renderUsers()}

                {this.state.renderInput && (
                    <Input
                        value={this.state.value}
                        handleChange={this.handleChange}
                    />

                )}

                <button onClick={this.handleInputToggle}>Button</button>
            </div>
        );
    }
}

UsersList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape),
};

UsersList.defaultProps = {
    users: [
        {
            name: "Rahul",
            eyeColor: "deepblue",
            age: "45",
        },
    ],
};

export default UsersList;

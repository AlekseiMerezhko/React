import { useState, useEffect } from "react";
import { validateUserName } from "../../utils/index";
import Input from "../../baseComponents/Input";
const Home = () => {
    const [userName, setUserName] = useState({
        value: "",
        error: "",
    });
    const [email, setEmail] = useState({
        value: "",
        error: "",
    });

    const handleChangeUserName = (e) => {
        setUserName((userName) => ({ ...userName, value: e.target.value }));
    };
    const handleChangeEmail = (e) => {
        setEmail((userName) => ({ ...userName, value: e.target.value }));
    };
    const handleSubmit = () => {
        if (!validateUserName(userName.value)) {
            console.log("Validate");
        }
    };

    return (
        <div>
            <Input value={userName.value} handleChange={handleChangeUserName} />
            <Input value={email.value} handleChange={handleChangeEmail} />
        </div>
    );
};

export default Home;

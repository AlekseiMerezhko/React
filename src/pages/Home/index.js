import { useState, useEffect } from "react";
import { validateUserName } from "utils/index";
// import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Input from "@mui/joy/Input";
import { Text, Button } from "baseComponents";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "features/counter/counterSlice";
import { login, logout } from "features/login/loginSlice";
import { fetchUserById } from "features/users/usersSlice";

const CircularIndeterminate = () => {
    return (
        <Box
            sx={{
                display: "flex",
                position: "fixed",
                left: "50%",
                top: "100px",
            }}
        >
            <CircularProgress />
        </Box>
    );
};

const BasicAlert = ({ error }) => {
    return (
        <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity="error">{error}</Alert>
        </Stack>
    );
};
const Home = () => {
    const [userId, setUserId] = useState("");
    const users = useSelector((state) => state.users);
    // const isLogined = useSelector((state) => state.login.isLogined);
    const dispatch = useDispatch();

    console.log("users", users);

    return (
        <div style={{ padding: 25 }}>
            {users.loading && <CircularIndeterminate />}
            {users.error && <BasicAlert error={users.error} />}

            <Input
                placeholder="Type in here…"
                value={userId}
                onChange={(e) => {
                    setUserId(e.target.value);
                }}
            />
            <Button
                text="Fetch Users"
                onClick={() => dispatch(fetchUserById(userId))}
            />
            <div>
                {users.entities.map((elem) => (
                    <div key={elem.name}>
                        <h2>{elem.name}</h2>
                    </div>
                ))}
            </div>
            {/* <div>
                <Button
                    text="Fetch Users"
                    onClick={() => dispatch(fetchUserById(1))}
                />
            </div>
            <h2>count: {count}</h2>
            <div>
                <Button
                    text="Increment value"
                    onClick={() => dispatch(increment())}
                />

                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>

            <div>
                <Button text="Login" onClick={() => dispatch(login())} />
                <Button text="Logout" onClick={() => dispatch(logout())} />
            </div> */}
        </div>
    );
};

export default Home;

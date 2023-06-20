import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <div
            style={{
                height: 80,
                width: "100%",
                backgroundColor: "#23272f",
                color: "white",
            }}
        >
            <ul
                style={{
                    display: "flex",
                    gap: "10px",
                    listStyleType: "none",
                }}
            >
                <li>
                    <Link
                        to="/"
                        style={{
                            color: "white",
                        }}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="blogs"
                        style={{
                            color: "white",
                        }}
                    >
                        Blog
                    </Link>
                </li>
                <li>
                    <Link
                        to="contact"
                        style={{
                            color: "white",
                        }}
                    >
                        Contact
                    </Link>
                </li>
                <li>
                    <Link
                        to="comments"
                        style={{
                            color: "white",
                        }}
                    >
                        Comments
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;

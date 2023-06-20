import { useRef, useEffect, useLayoutEffect } from "react";

const Blog = () => {
    const inputRef = useRef(null);

    function handleClick() {
        inputRef.current.focus();
    }

    useEffect(() => {
        console.log("useEffect");
    }, []);

    useLayoutEffect(() => {
        console.log("useLayoutEffect");
    }, []);

    return (
        <>
            <input ref={inputRef} />
            <button onClick={handleClick}>Focus the input</button>
        </>
    );
};

export default Blog;

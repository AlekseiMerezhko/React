import { useState, useMemo, useCallback, memo } from "react";
import Blog from "./Blog";
const Blogs = (props) => {
    const [currentValue, setCurrentValue] = useState("");

    // const isUniqBlog = props?.someValue ? true : false;

    const isUniqBlog = useMemo(
        () => (props?.someValue ? true : false),
        [props?.someValue]
    );

    let calculateNewValue = () => {};
    calculateNewValue = () => {};

    const myMemoCAllback = useCallback(
        (value1, value2) => {
            return calculateNewValue(value1, value2);
        },
        [calculateNewValue]
    );

    return (
        <div>
            {currentValue && <h3> Header</h3>}
            <Blog isUniqBlog={isUniqBlog}></Blog>
        </div>
    );
};

export default memo(Blogs);

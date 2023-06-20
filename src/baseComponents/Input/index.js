const Input = ({ handleChange, value, error, type, height, styles }) => {
    return (
        <div>
            {value.error && <span>{value.error}</span>}

            <input
                onChange={handleChange}
                value={value}
                accesabilityLabels
                className={type === "primary" ? "red" : "blue"}
                height={height}
                type="text"
                style={{ ...styles }}
            />
        </div>
    );
};
const styles = {};
export default Input;

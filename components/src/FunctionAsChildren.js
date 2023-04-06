const InputHeadless = ({children}) => {
    const [value, setValue] = React.useState("");

    const handleChangeValue = (event) => {
        setValue(event.target.value);
    };
    return children({
        value,
        onChange: handleChangeValue,
    });
}

export default InputHeadless
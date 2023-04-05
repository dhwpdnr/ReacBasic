const InputContext = React.createContext({
    id: "",
    value: "",
    type: "text",
    onChange: () => {} 
});

const InputWrapper = ({id, value, type, onChange, children}) => {
    const contextValue = {id, value, type, onChange};
    return(
        <InputContext.Provider value={contextValue}>
            {children}
        </InputContext.Provider>
    );
};

const Input = ({...props}) => {
    const {id, value, type, onChange} = React.useContext(InputContext);
    return (
        <input id={id} value={value} type={type} onChange={onChange} {...props}/>
    );
};

const Label = ({children, ...props}) => {
    const {id} = React.useContext(InputContext);
    return (
        <label htmlFor={id} {...props}>
            {children}
        </label>
    );
}

InputWrapper.Input = Input
InputWrapper.Label = Label
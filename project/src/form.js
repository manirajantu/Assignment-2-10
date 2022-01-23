import { useState } from "react";

function Form({ calculate }) {
    const defaultValues = {
        one: 0,
        two: 0,
    };

    const [values, setValues] = useState(defaultValues);

    const handleOnChange = (e) => {
        console.log(e.target.name, e.target.value);
        const newValues = { ...values };
        newValues[e.target.name] = e.target.value;
        setValues(newValues);
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        calculate(parseInt(values.one), parseInt(values.two));
        setValues(defaultValues);
    }
    return (
    <div className="form-component">
        <form className="form">
            <input className="box1"
            type="number" 
            name="one" 
            onChange={handleOnChange} 
            value={values.one}>
            </input>
            +
            <input className="box2"
            type="number" 
            name="two" 
            onChange={handleOnChange} 
            value={values.two}>
            </input>
            <button onClick={handleOnSubmit}>Submit</button>
        </form>

    </div>
)
}



export default Form;
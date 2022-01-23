import { useState } from "react"


import Form from "./form";
import Display from "./display";

function Calculator() {
    const [answer, setAnswer] = useState(0);

    const handleSum = (x, y) => {
        console.log(x, y);
        setAnswer( x + y);
    };

    return (
        <div className="calculation-page">
            <Form calculate={handleSum} />
            <br></br>
            <div className="display">
            <Display answer={answer}/>
            </div>
        </div>
    );
}

export default Calculator;
import { useState } from "react";

const Counter = () => {
    let [state, setState] = useState(0);
    return (
        <div>
            <button onClick={() => setState(state - 1)}>-</button>
            <span>{' '}{state}{' '}</span>
            <button onClick={() => setState(state + 1)}>+</button>
        </div>
    )
}
export default Counter;
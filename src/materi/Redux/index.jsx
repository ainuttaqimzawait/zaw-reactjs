import { Provider } from "react-redux";
import Counter from "./pembahasan/Counter";
import store from "../../App/Store";

const Redux = () => {
    return (
        <div>
            <Provider store={store}>
                <Counter />
            </Provider>
        </div>
    )
}
export default Redux;
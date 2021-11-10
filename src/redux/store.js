import { createStore } from "redux";
import rootReducers from "./reducer/Index.jsx";

const store = createStore(rootReducers);

export default store;
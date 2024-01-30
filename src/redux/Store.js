import { createStore } from "redux";
import BankReducer from "./BankReducer";




export const store = createStore(BankReducer);



import { composeWithDevTools } from "@redux-devtools/extension"
import { Reducer } from "./index"
import {createStore} from "redux"
export const store=createStore(Reducer,composeWithDevTools())
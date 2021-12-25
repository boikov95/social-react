import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import authreducer from "./authreducer";
import dialogreducer from "./dialogreducer";
import friendreducer from "./friendreducer";
import profilereducer from "./profilereducer";
import usersreducer from "./usersreducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from "redux-form"
import appreducer from "./appreducer";

let reducers =combineReducers({
    profilePage: profilereducer,
    dialogPage: dialogreducer,
    friendPage: friendreducer,
    usersPage: usersreducer,
    auth: authreducer,
    app: appreducer,
    form : formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)
  ));



export default store;
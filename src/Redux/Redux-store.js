import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from "redux-thunk";
const { createStore, applyMiddleware, combineReducers, compose } = require("redux");
const { default: AppInitialized } = require("./appInit-reducer");
const { default: AuthPage } = require("./auth-reducer");
const { default: DialogsPage } = require("./dialogs-reducer");
const { default: ProfilePage } = require("./profile-reducer");
const { default: UsersPage } = require("./users-reducer");


const reducers = combineReducers({
    auth: AuthPage,
    appInit: AppInitialized,
    dialogs: DialogsPage,
    profile: ProfilePage,
    users: UsersPage,
    form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


export default store;
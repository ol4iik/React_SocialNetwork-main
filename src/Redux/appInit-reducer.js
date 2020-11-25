import { IsAuth } from "./auth-reducer";

const INITIALIZING = 'INITIALIZING-USER';


const initial = {
    isInitialized: false
}

const AppInitialized = (state = initial, action) => {
    switch (action.type) {
        case INITIALIZING:
            {
                return {
                    ...state,
                    isInitialized: action.isInitialized
                }
            }
        default:
            {
                return state;
            }
    }
}

const setInitializing = (isInitialized) => ({ type: INITIALIZING, isInitialized });


export const setInitializingThunk = () => async(dispatch) => {
    await dispatch(IsAuth());
    dispatch(setInitializing(true));
}

export default AppInitialized;
import { combineReducers } from "redux";

import InformationReducer from './InformationReducer';

export default combineReducers({
    information: InformationReducer
});

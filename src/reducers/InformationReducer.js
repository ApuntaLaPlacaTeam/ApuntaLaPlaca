import {
    REQUEST_INFORMATION,
    RECEIVE_INFORMATION,
    INVALID_INFORMATION,
} from '../actions/InformationAction.js';

const INITIAL_STATE = {
    isFetchingInformation: false,
    didInvalidateInformation: false,
    information: null
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case     REQUEST_INFORMATION:
            return {
                ...state,
                isFetchingInformation: true,
                didInvalidateInformation: false,
                information: null
            };
        case RECEIVE_INFORMATION:
            return {
                ...state,
                isFetchingInformation: false,
                didInvalidateInformation: false,
                information: action.data,
            };
        case INVALID_INFORMATION:
            return {
                ...state,
                isFetchingLike: false,
                didInvalidateLike: true,
                liking: null
            };
        default:
            return state;
    }
}

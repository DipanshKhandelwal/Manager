import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEE_SAVE_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            // action.payload === { prop: 'name', value: 'Dipansh' }
            return {...state, [action.payload.prop]: action.payload.value };

        case EMPLOYEE_CREATE:
            // action.payload === { prop: 'name', value: 'Dipansh' }
            return INITIAL_STATE;

        case EMPLOYEE_SAVE_SUCCESS:
            // action.payload === { prop: 'name', value: 'Dipansh' }
            return INITIAL_STATE;

        default:
            return state;
    }
};

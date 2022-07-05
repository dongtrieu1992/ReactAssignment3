import {DEPARTMENTS,ROLE,STAFFS} from '../shared/staffs.jsx'

export const initialState ={
        staffs: STAFFS,
        role:ROLE,
        depart:DEPARTMENTS
};

export const Reducer = (state = initialState,action) =>{
    return state;
}; 
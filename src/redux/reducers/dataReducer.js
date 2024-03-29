import { GET_DATA } from "../action";


const initialState={
    data:[]
}

const  dataReducer=function(state =initialState, action){
    switch (action.type) {
        case GET_DATA:
            return{...state,
                data:action.payload};
        default :return state;
    }
}
export default dataReducer;
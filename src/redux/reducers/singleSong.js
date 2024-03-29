import { GET_SONG } from "../action";
import { GET_LIKE } from "../action";


const initialState={
    data:[],
    like:false
}

const  dataReducer=function(state =initialState, action){
    switch (action.type) {
        case GET_SONG:
            return{...state,
                data:action.payload};
        case GET_LIKE:
            return{...state,
                like:action.payload};
      



        default :return state;
    }
}
export default dataReducer;
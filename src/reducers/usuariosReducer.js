import { bindActionCreators } from "redux";

const INITIAL_STATE = {
    usuarios: []
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'TRAER_TODOS_USUARIOS':
            return { ...state, usuarios: action.payload }
            default: return state;
    }
}
export default function commentReducer(state = [], action) {
    switch (action.type) {
        case "ADD_COMMENT":
            return [action.payload, ...state];
        case "DELETE_COMMENT":
            return state.filter(comment => comment.id !== action.payload);
        case 'UPDATE_COMMENT':
            return state.map(comment => comment.id === action.payload.id ? action.payload : comment);
        default:
            return state;
    }
}
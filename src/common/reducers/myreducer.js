export default function myReducer(state,action) {
switch (action.type) {
    case 'ADD':
        return "got added" 
        break;

    default:
       return "this is default"
        break;
}
}
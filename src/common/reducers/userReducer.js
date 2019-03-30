export default  function userReducer(state,action) {
    switch (action.type) {
        case 'LOGIN':
         console.log('got the Login ',action.payload);
            return {
                user:'Naim'
            } 
         break;
        case 'SIGN UP':
        console.log('got signup created user');
        console.log(action.payload);
         
        return  'created user'
        break;

        default:
        console.log('this is default ');
        return " this  is default userReducer" 
            break;
    } 
}
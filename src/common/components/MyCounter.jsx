import React,{useCallback} from 'react'
import {connect} from 'react-redux'
import {useMappedState,useDispatch} from 'redux-react-hook'

function MyCounter(props) {
    const mapState = useCallback(
        state => ({
            
          Data: state.myReducer
        })
      );
 const dispatch=useDispatch();
 
 const Add=useCallback(()=>{
      dispatch({type:'ADD'});
 });

  const {Data} = useMappedState(mapState);
   return (
        <div>this is my new counter with state is {Data}
             <button onClick={Add}>Add dispatch</button> 
         </div>
       ); 
}
export default  MyCounter;

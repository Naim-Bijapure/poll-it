 
export function OnLogin(dispatch,data){
    
        dispatch(GetLogin(data));
}

function GetLogin(data) {
 
 
 return function (dispatch){
        fetch('/login',{
            method: 'POST',
            headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
          }).then(res=>{
     
              res.json().then(data=>{
     
                if(data.success === true){
                 dispatch({type:'LOGIN',payload:data}); 
                 localStorage.setItem('jwtTokenFS',data.token);
                  console.log(data);
               } else if (data.success === false){

     
                         console.log(data);
                     if(data.from === 'nouser'){
     
                         console.log('no user');
                              
                     } else if (data.from === 'wrongpass'){

                     }
     
               }
      
              });
     
          });
    } 
}


export function OnSignUp(dispatch,data) {
      dispatch(createUser(data));
}

function createUser(data) {
   
    return function (dispatch) {
        fetch('/register',{
            method:'POST',
            headers:{
             'Accept': 'application/json',
             'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)

        }).then(res=>{

                 res.json().then(data=>{
    
                  if(data.success === true){
                        
                    dispatch({type:'SIGN UP',payload:data});
                         console.log('now we can login');

                         fetch('/login',{
                             method:'POST',
                             headers:{
                              'Accept': 'application/json',
                              'Content-Type': 'application/json',
                             },
                             body: JSON.stringify(data)
                         }).then(res=>{
                                 res.json().then(recdata=>{
                                   if(recdata.success === true){
                                       console.log('this user created',recdata);
                                       
                                     localStorage.setItem('jwtTokenFS',recdata.token);

                                   }
                                 });
                               
                         });
                  } else if(data.success === false){

                            console.log('error',data);
                            
                    
                  }
              });

        }); 
    } 
}
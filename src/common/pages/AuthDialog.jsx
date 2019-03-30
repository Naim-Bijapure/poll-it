import React,{useCallback,useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {useMappedState,useDispatch} from 'redux-react-hook';
import { OnLogin, OnSignUp } from '../actions/UserAuth';

function AuthDialog(props) {
  const [open, setOpen] = React.useState(false);
 const [user, setuser] = useState(null);
 const [pass, setpass] = useState(null);

  const mapState=useCallback(
    (state) => {
      return {
        data:state
      } 
    }
  )

 const {data}=useMappedState(mapState);
 const dispatch= useDispatch(); 


  


   function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function FetchAccount() {
    let userData={
      username:user,
      password:pass
    }
        props.type=='Login'?OnLogin(dispatch,userData):OnSignUp(dispatch,userData);
        
          
  }

  return (
    <div>
      <Button  variant="outlined"  color="inherit"  onClick={handleClickOpen}>
        {props.type}
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Login</DialogTitle>
        <DialogContent  >

         <TextField
        id="outlined-email-input"
        label="Email"
        className="email"
        type="email"
        name="email"
        autoComplete="email"
        margin="normal"
        variant="outlined"
        onChange={(e)=>{setuser(e.target.value)}}
        />
        
        <TextField
        id="outlined-password-input"
        label="Password"
        className="password"
        type="password"
        autoComplete="current-password"
        margin="normal"
        variant="outlined"
        onChange={(e)=>{setpass(e.target.value)}}
        />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={FetchAccount} color="primary">
           {props.type}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AuthDialog;

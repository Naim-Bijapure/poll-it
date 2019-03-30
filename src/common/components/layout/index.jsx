import React from 'react';
import Header from '../../pages/Header';

const Layout = (props) => {
  return (
    <div>
      
    <Header></Header> 
      {props.children}
    </div>
  );
}

export default Layout;
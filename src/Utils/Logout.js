import React from 'react';
import Auth from './Auth';

export default class Logout extends React.Component{
  static logout(){
    localStorage.removeItem("userLoged");
    // localStorage.removeItem("enterpriseLoged");
    // localStorage.removeItem("permisos");
    Auth.deauthenticateUser();
    
    window.location.href = "/login";
  }
}
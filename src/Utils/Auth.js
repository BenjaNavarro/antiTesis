import React from 'react';

export default class Auth extends React.Component{

	static authenticateToken(x_auth_token){
		localStorage.setItem('x_auth_token', x_auth_token);
		console.log("sesion actual: ", localStorage.getItem('x_auth_token'));
	}

	static updateToken(x_auth_token){
    	console.log("updateToken: ", x_auth_token);
		if (x_auth_token && x_auth_token !== "" && x_auth_token !== null) {
			localStorage.setItem('x_auth_token', x_auth_token);
			console.log("token actualizado: ", localStorage.getItem('x_auth_token'));
		}
		else {
			console.log("es vacio, se mantiene: ", localStorage.getItem('x_auth_token'));
		}
	}

	static isUserAuthenticate(){
		if(localStorage.getItem('x_auth_token') === null)	return false
		return true
	}

	static deauthenticateUser(){
		localStorage.removeItem('x_auth_token');
	}

	static getToken(){
    	console.log("getToken", localStorage.getItem('x_auth_token'));
		return localStorage.getItem('x_auth_token');
	}
}

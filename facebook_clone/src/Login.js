import React from 'react'
import Button from '@material-ui/core/Button';
import "./Login.css"
import {auth, provider} from "./firebase";
import {actionTypes} from "./reducer"
import { useStateValue } from './StateProvider';

function Login() {
debugger;
  const [{user}, dispatch] = useStateValue();

    const signIn = () => {
         auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type :actionTypes.SET_USER,
                    user: result.user
                })
            })
            .catch((error) => alert(error.message));

    }
    return (
        <div className = "login">
            <div className="login_logp">
                <img 
                src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
                alt = "facebook_logo"
               />
                <img
                src = "https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
                alt = "this is second logo"
                />
            </div>
            <Button type = "submit" onClick = {signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login

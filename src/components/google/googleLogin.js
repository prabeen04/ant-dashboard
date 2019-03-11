import React, { useState } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';

export default function LoginWithGoogle(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [googleUser, setGoogleUser] = useState({})
    const responseGoogle = (res) => {
        console.log(res)
        if (res.accessToken) {
            setIsLoggedIn(true)
            setGoogleUser(res.profileObj)
        }
    }
    return (
        <div>
            {googleUser && <h3>{googleUser.name}</h3>}
            {!isLoggedIn && <GoogleLogin

                clientId="553440503285-rgciog1jtcen74j5hq1ojul6o4b93erh.apps.googleusercontent.com"
                buttonText={props.buttonText || 'Login with Google'}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
            />}
            {isLoggedIn && <GoogleLogout
                buttonText="Logout"
                onLogoutSuccess={(res) => {
                    setIsLoggedIn(false)
                    setGoogleUser({})
                }}
            >
            </GoogleLogout>}
        </div>
    )
}

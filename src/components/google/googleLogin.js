import React, { Component } from 'react'
import { GoogleLogin } from 'react-google-login';

class LoginWithGoogle extends Component {
    constructor(props) {
        super(props)
        this.responseGoogle = this.responseGoogle.bind(this);
    }
    responseGoogle = (res) => console.log(res)
    render() {
        return (
            <div>
                <GoogleLogin
                    clientId="553440503285-rgciog1jtcen74j5hq1ojul6o4b93erh.apps.googleusercontent.com"
                    buttonText=" Login with Google "
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                />
            </div>
        )
    }
}
export default LoginWithGoogle;
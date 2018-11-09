import React, { Component } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';

class LoginWithGoogle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false,
            googleUser: {}
        }
        this.responseGoogle = this.responseGoogle.bind(this);
    }
    responseGoogle = (res) =>{ 
        console.log(res)
        if(res.accessToken){
            this.setState({
                isLoggedIn: true,
                googleUser: res.profileObj
            })
        }
    }
    render() {
        return (
            <div>
                {this.state.googleUser && <h3>{this.state.googleUser.name}</h3>}
               {!this.state.isLoggedIn && <GoogleLogin
               
                    clientId="553440503285-rgciog1jtcen74j5hq1ojul6o4b93erh.apps.googleusercontent.com"
                    buttonText={this.props.buttonText || 'Login with Google'}
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                />}
              {this.state.isLoggedIn &&  <GoogleLogout
                    buttonText="Logout"
                    onLogoutSuccess={(res)=>{
                        this.setState({
                            isLoggedIn: false,
                            googleUser: {}
                        })
                    }}
                >
                </GoogleLogout>}
            </div>
        )
    }
}
export default LoginWithGoogle;
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

const GoogleLoginTask = () =>{

    const responseGoogle = (responseGoole) => {
        console.log(responseGoole)
    }

    const responseFacebook = (response) => {
        console.log(response)
    }

    return(
        <div>
             <FacebookLogin
                        appId="275608624298009"
                        autoLoad={true}
                        fields="name,email,picture"
                        callback={responseFacebook} />
<br></br>
             <GoogleLogin
                        clientId="183881717349-ohsm5360abtcjs20ukpftudfrhnqiqfp.apps.googleusercontent.com"
                        buttonText="Login with Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
            />
        </div>
    )

}

export default GoogleLoginTask;
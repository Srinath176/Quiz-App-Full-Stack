import { GoogleLogin } from "@react-oauth/google";
import {jwtDecode} from "jwt-decode";

const GoogleOauth = () => {

  const handleSuccess = (response) => {

    const token = response.credential
    console.log('success')
    localStorage.setItem('auth-token',token)


    const decoded = jwtDecode(token)
    console.log(decoded)

    const username = decoded.name
    localStorage.setItem('user-name',username)

    window.location.replace('/')

  }




  return (
    
    <GoogleLogin

      onSuccess={handleSuccess}
      onError={() => console.log('Google Login Failed')}
      text="continue_with"
      shape="circle"
      size="large"
      width="250px"

    />


  )

}

export default GoogleOauth;
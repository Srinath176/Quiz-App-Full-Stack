
import './css/Login.css'
import { useState } from "react"
import GoogleLogin from './GoogleOauth'
import GoogleOauth from './GoogleOauth'


const Login = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })


    function changeHandler(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const [errorMessage, setErrorMessage] = useState(null)

    const fetchJwtToken = async () => {

        try {

            const response = await fetch("http://localhost:8080/authenticate", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })


            if (response.ok) {
                const data = await response.json()
                localStorage.setItem("auth-token", data.token)
                localStorage.setItem("premium-user",data.premiumUser)
                localStorage.setItem("user-name",data.username)
                window.location.replace('/')
            } else {
                setErrorMessage("Authentication Failed. Try again!")
            }
        } catch (error) {

            setErrorMessage("Authentication Failed. Try again!")
            console.log('error during login ' + error)
        }


    }


    return (
        <form className="form-container container mt-5" style={{ maxWidth: 768 }}>
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
            <h1 className="text-center mb-4">Login</h1>
            <div className="mb-3">
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={changeHandler}
                    placeholder="Your Email"
                    className="form-control mx-auto rounded-input"
                    style={{ width: '70%' }}
                    required
                />
            </div>
            <div className="mb-3">
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder="Password"
                    className="form-control mx-auto rounded-input"
                    style={{ width: '70%' }}
                    required
                />
            </div>
            <div className="d-flex justify-content-center">
                <button
                    type="button"
                    className="btn btn-primary rounded-button"
                    onClick={fetchJwtToken}
                    style={{ width: '30%', padding: '10px 20px', fontSize: '16px' }}
                >
                    Login
                </button>
            </div>
            <div className="text-center mt-3">
                <a href="/forgot-password" className="link-secondary">Forgot Password?</a>
            </div>
            <div className="text-center mt-2">
                <p className="text-muted">Don't have an account? <a href="/signup" className="link-primary">Sign Up</a></p>
            </div>
            <span className='d-flex justify-content-center'>or</span>
            <div className='googleAuth'>
                <GoogleOauth />
            </div>
        </form>
    )
}

export default Login;
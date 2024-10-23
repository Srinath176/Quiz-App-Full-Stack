import { useState } from 'react';
import './css/Signup.css';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import GoogleOauth from './GoogleOauth';

const SignUp = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });

    const [phoneNumber, setPhoneNumber] = useState('');

    function changeHandler(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const createUser  = async () => {
        // Check if required fields are filled
        if (!formData.username || !formData.email || !formData.password) {
            alert("Please fill in all required fields.");
            return;
        }

        try {
            const response = await fetch('http://localhost:8080/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...formData, phoneNumber }) // Include phoneNumber in the request
            });

            if (response.status === 201) {
                window.location.replace('/login');
            } else {
                console.log("Error creating user, try again!");
            }
        } catch (error) {
            console.log("Error: " + error);
        }
    };

    return (
        <form className="form-container container mt-5" style={{ maxWidth: 768 }} onSubmit={(e) => { e.preventDefault(); createUser (); }}>
            <h1 className="text-center mb-4">SignUp</h1>
            <div className="mb-3">
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={changeHandler}
                    placeholder="Choose Username"
                    className="form-control mx-auto rounded-input"
                    style={{ width: '60%' }}
                    required
                />
            </div>
            <div className="mb-3">
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={changeHandler}
                    placeholder="Your Email"
                    className="form-control mx-auto rounded-input"
                    style={{ width: '60%' }}
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
                    style={{ width: '60%' }}
                    required
                />
            </div>
            <div className='mb-5'>
                <PhoneInput
                    className='phone'
                    country={'in'}
                    value={phoneNumber}
                    onChange={phoneNumber => setPhoneNumber(phoneNumber)}
                    inputStyle={{
                        padding: '25px',
                        borderRadius: '20px'
                    }}
                    buttonStyle={{
                        padding: '12px',
                        borderRadius: '20px',
                        left: '20%'
                    }}
                />
            </div>

            <div className="d-flex justify-content-center mt-3 mb-3">
                <button
                    type="submit" // Change to submit type
                    className="btn btn-primary rounded-button"
                    style={{ width: '30%', padding: '10px 20px', fontSize: '16px' }}
                >
                    Submit
                </button>
            </div>
            <div className="text-center mt-2">
                <p className="text-muted">have an account? <a href="/login" className="link-primary">Login</a></p>
            </div>
            <span className='d-flex justify-content-center'>or</span>
            <div className='googleAuth'>
                <GoogleOauth />
            </div>
        </form>
    );
};

export default SignUp;
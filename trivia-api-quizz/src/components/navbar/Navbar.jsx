import { useEffect, useState } from "react"
import './Navbar.css'



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [premiumUser, setPremiumUser] = useState(false);
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('auth-token');
        const premium = localStorage.getItem('premium-user');
        const name = localStorage.getItem('user-name');

        if (token) {
            setPremiumUser(premium === 'true');
            setUserName(name);
        }
    }, []);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handlePremium = () => {

        if (localStorage.getItem('auth-token')) {
            window.location.replace('/premium')
        } else {
            alert('Login/Signup to Buy Premium')
        }
    }

    return (

        <>

            <nav className="navbar navbar-expand-md navbar-light navbar-custom mb-2">
                <a className="navbar-brand" href="#">
                    {/* <img  
                    src="/path/to/your/logo.png" 
                    alt="Brand Logo"  
                    width="30"  
                    height="30"  
                    className="d-inline-block align-top"  
                />   */}
                    <span className="ms-5 fw-bolder">SG </span>
                </a>

                <button
                    className="navbar-toggler"
                    onClick={handleToggle}
                    type="button"
                    aria-controls="navbarNav"
                    aria-expanded={isOpen}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}
                    id="navbarNav"
                >
                    <ul className="navbar-nav d-flex justify-content-between mx-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#category">CATEGORY</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">ABOUT</a>
                        </li>
                        {!localStorage.getItem('auth-token') && <li className="nav-item">
                            <a className="nav-link" href="/login">LOGIN</a>
                        </li>}
                        {!localStorage.getItem('auth-token') && <li className="nav-item">
                            <a className="nav-link" href="/signup">SIGNUP</a>
                        </li>}
                        {localStorage.getItem('auth-token') && <li className="nav-item">
                            <a className="nav-link" href="/"
                                onClick={() => {
                                    localStorage.removeItem('auth-token');
                                    localStorage.removeItem('premium-user')
                                    localStorage.removeItem('user-name')
                                }}>LOGOUT</a>
                        </li>}

                    </ul>
                    <div className="d-flex">
                        {premiumUser ? <span className="mx-5 fw-bold"><img src='\src\assets\icons8-male-user-24.png' alt='profile_icon' /> {userName} </span> :
                            <button className="btn btn-warning ms-2 me-5 fs-5 fw-bold" onClick={handlePremium}>
                                Premium<img src="src\assets\icons8-premium-48.png" className="premium-icon" />
                            </button>}

                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar
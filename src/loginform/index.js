import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

function LoginForm() {
    const navigate = useNavigate();

    const handleSignUp = () => {
        navigate('/home');
    };

    return (
        <div className="main-container">
            <header>
                <img className="logo" src="/images/logo.png" alt="logo" />
            </header>
            <div className="main-content">
                <div className="login-container login-box">
                    <h2>Create a new account</h2>
                    <div>
                        <button onClick={handleSignUp}>
                            Sign Up with Google
                        </button>
                        <button className="signup-button">
                            Create an Account
                        </button>
                    </div>
                    <p>Already have an account? Sign Up</p>
                </div>
            </div>
            <footer>
                &copy; 2023 Reachinbox. All rights reserved.
            </footer>
        </div>
    );
}

export default LoginForm;

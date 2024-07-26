import React, { useState } from 'react';
import './Login.css';
import logo from './logo3.png'; // Adjust the path as necessary
import googleLogin from './google_login.png'; // Import the Google login button
import kakaoLogin from './kakao_login.png'; // Import the Kakao login button
import naverLogin from './naver_login.png'; // Import the Naver login button

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <div className="login-page">
            <div className="background-container"></div>
            <div className="outer-container">
                <div className="header-container">
                    <img src={logo} alt="Logo" className="logo" />
                    <span className="brand-name">MetaCloud3</span>
                </div>
                <div className="login-container">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                placeholder="아이디를 입력해주세요"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="비밀번호를 입력해주세요"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit">Login</button>
                    </form>
                    <div className="signup-container">
                        <span>Don't have an account? <a href="/signup">Sign up</a></span>
                    </div>
                </div>
                <div className="social-login-container">
                    <button className="google-login-button">
                        <img src={googleLogin} alt="Google Login" className="login-logo" />
                    </button>
                    <button className="kakao-login-button">
                        <img src={kakaoLogin} alt="Kakao Login" className="login-logo" />
                    </button>
                    <button className="naver-login-button">
                        <img src={naverLogin} alt="Naver Login" className="login-logo" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;

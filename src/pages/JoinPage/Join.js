import React, { useState } from 'react';
import './Join.css';
import logo from '../../images/app-logo.png';

const Join = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
        console.log('Name:', name);
        console.log('Email:', email);
    };

    return (
        <div className="join-page">
            <div className="background-container"></div>
            <div className="outer-container">
                <div className="header-container">
                    <img src={logo} alt="Logo" className="logo" />
                    <span className="brand-name">MetaCloud</span>
                </div>
                <div className="join-container">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                placeholder="사용하실 아이디를 입력해주세요"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="사용하실 비밀번호를 입력해주세요"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="이름을 입력해주세요"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="이메일을 입력해주세요"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <button className="join-button" type="submit">회원가입</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Join;

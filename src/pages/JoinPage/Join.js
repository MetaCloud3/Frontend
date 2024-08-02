import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './Join.css';
import logo from '../../images/app-logo.png';
import { motion } from "framer-motion";

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
            <Helmet>
                <title>MetaCloud</title>
                <meta name="description" content="회원가입 페이지입니다. MetaCloud에 가입하세요." />
            </Helmet>
            <div className="background-container"></div>
            <div className="outer-container">
                <div className="header-container">
                    <img src={logo} alt="Logo" className="logo" />
                    <span className="brand-name">MetaCloud</span>
                </div>
                <motion.div className="join-container"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            transition={{ duration: 0.5 }}
                >
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
                </motion.div>
            </div>
        </div>
    );
};

export default Join;

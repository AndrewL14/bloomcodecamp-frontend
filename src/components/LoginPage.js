import React, { useState } from "react";
import { useLocalState } from '../assets/utils/useLocalState'

function LoginPage(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [jwt, setJwt] = useLocalState("dsaf3ref3rt43frsefe", "jwt");

    const handleUsernameChange = event => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = event => {
        setPassword(event.target.value);
    };

    const handleSubmit = async event => {
        event.preventDefault();
        console.log('submitted:', { username, password });

        const reqBody = {"username": username, "password": password};
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reqBody)
        };
        

        await fetch('http://localhost:8080/api/auth/login', requestOptions).then((res) => {
            if (res.status === 200) {
                return Promise.all([res, res.headers]);
            } else {
                return Promise.reject("Invalid username or password");
            }
        })
        .then(([body, headers]) => {
            setJwt(headers.get("Authorization"));
            window.location.href = "http://localhost:3000/dashboard";
        })
        .catch((message) => alert(message));
    }

    const s = event => {
        event.preventDefault();
        window.location.href = "http://localhost:3000/dashboard";
    }

    

        return (
            <div className="login-box">
                <div className="login-form">
                    <form>
                        <h2>Login</h2>
                        <label className="login-input">
                            Username:
                            <input type="text" required="required" value={username} onChange={handleUsernameChange} />
                        </label>
                            <br />
                        <label className="login-input">
                            Password:
                            <input type="password" required="required" value={password} onChange={handlePasswordChange} />
                        </label>
                            <br />
                        <button className="login-button" type="submit" onClick={handleSubmit}>Login</button>
                    </form>
                </div>    
            </div>
        )
}

export default LoginPage
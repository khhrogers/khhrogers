import SignUpForm from '../components/SignUpForm/SignUpForm';
import LoginForm from '../components/LoginForm';
import { useState } from 'react';

export default function Auth({ setUser }) {
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = (user) => {
        setUser(user);
        setLoggedIn(true);
    };

    return (
       
        <main className="auth-container">
            
            {!loggedIn && (
                <div>
                    <h3>LOG IN</h3>
                    <LoginForm setUser={handleLogin} />
                </div>
            )}
            <div>
                <h3>SIGN UP</h3>
                <SignUpForm setUser={setUser} />
                <h1>BOOKING YOUR STAY AWAY</h1> {/* Add the heading */}
            </div>
        </main>
    );
}
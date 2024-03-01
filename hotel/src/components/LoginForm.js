import { useState } from "react";
import * as userService from './utilities/user-service'

const LoginForm = ({setUser}) => {
  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setcredentials({ ...credentials, [name]: value });
   
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
   
      const user = await userService.logIn(credentials);
    
    setUser(user)

    } catch (error) {
     
      setError("Login Failed - Try Again");
    }
  };

  return (
    <div>
      <div className="form-container">
                <form autoComplete="off" onSubmit={handleSubmit}>
                <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
          </div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className='signup-button'>LOGIN</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
};

export default LoginForm;
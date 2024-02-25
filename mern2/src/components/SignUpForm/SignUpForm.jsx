import { useState } from 'react';
import {signUp} from '../../utilities/users-service';

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirm: "",
    })

    const [error, setError] = useState("")

    const handleChange = e => {
        const { name, value } = e.target

        setFormData({...formData, [name]: value})

        // setFormData(prevFormData => {
        //     return (
        //         {
        //             ...prevFormData,
        //             [name] : value
        //         }
        //     )
        // })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const userData = {...formData}          
            delete userData.confirm;

            const user = await signUp(userData);

            console.log(user);

    }catch (error) {
        setError('Sign up Failed-Try Again');
    }
    };
    const disable = formData.password !== formData.confirm;

    return (
        <div>
         <div className="form-container">
           <form autoComplete="off" onSubmit={handleSubmit}>
             <label>Name</label>
             <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <label>Confirm</label>
            <input
              type="password"
              name="confirm"
              value={formData.confirm}
              onChange={handleChange}
              required
            />
            <button type="submit" >
              SIGN UP
            </button>
          </form>
        </div>
        <p className="error-message">&nbsp;{error}</p>
      </div>
    )
}

export default SignUpForm
import { useState} from 'react';
import {signUp} from '../utilities/user-service'

const SignUpForm = ({setUser}) => {
    const [formData, setFormData] = useState ({
        name: "",
        email: "",
        password: "",
        confirm: "",
            });

const [error, setError] =useState("");
    
const handleChange = e => {
    const {name , value } = e.target 
    setFormData ({...formData, [ name] : value })
}

const handleSubmit = async e => {
    e.preventDefault()
    try {
     const userData = {...formData}
     delete userData.confirm;

     const user = await signUp(userData);

     setUser(user)
    }catch (error){
     setError('Sign up Failed Please Try Again');

    }
};





return(
<div>
<div className='form-container'>
<form autoComplete="off" onSubmit={handleSubmit} >
<div className="form-group">
<label> Name </label>
<input 
type="text"
name = "name"
value={formData.name}
onChange={handleChange}
required

/>
</div>
<div className="form-group">
<label>Email</label>
<input
type="email"
name="email"
value={formData.email}
onChange={handleChange}
required
/>
</div>
<div className="form-group">
<label>Password</label>
<input 
type="password"
name="password"
value={formData.password}
onChange={handleChange}
required/>
</div>
<label>Confirm</label>
<input 
type="password"
name="confirm"
value={formData.confirm}
onChange={handleChange}
required
/>

<button type="submit" className='signup-button'>
    Sign Up
</button>

</form>
</div>
<p className="error-message">&nbsp;{error}</p>
</div>

)
}

export default SignUpForm
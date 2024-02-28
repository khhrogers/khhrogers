import { useState} from 'react';


const SignUpForm = ({setUser}) => {
    const [formData, setFormData] = useState ({
        name: "",
        email: "",
        password: "",
        confirm: "",
            })
            
const [error, setError] =useState("")
    






return(
<div>
<div className='form-container'>
<form autoComplete="off" >
<label> Name </label>
<input 
type="text"
name = "name"
value={formData.name}
required
/>
<label>Email</label>
<input
type="email"
name="email"
value={formData.email}
required
/>
<label>Password</label>
<input 
type="password"
name="password"
value={formData.password}
required/>
<label>Confirm</label>
<input 
type="password"
name="confirm"
value={formData.confirm}
required
/>
<button type="submit">
    Sign Up
</button>

</form>
</div>
<p className="error-message">&nbsp;{error}</p>
</div>

)
}

export default SignUpForm
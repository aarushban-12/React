import React, {useState} from 'react';
import './style.css'

function App(){
  //state to track password visibility

  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  }

  return(
    <div>
      <h1>Show/Hide Password</h1>
      <div className='box'>
        <input type={showPassword ? "text" : "password"} placeholder='Enter Password'/>
        <button onClick={togglePassword}>Show Password</button>
      </div>
      
    </div>
  )


} 

export default App;

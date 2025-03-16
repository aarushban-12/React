import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';
import React, {useState} from 'react';


function Login({setAuth}) {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const users = [{email : "aarushban15@gmail.com", password: "1234"}, {email : "aarush@gmail.com", password: "5678"}];

  const handleLogin = () => {
    const user = users.find(u => u.email === email && u.password === password);
    if(user) {
      localStorage.setItem("isAuthenticated", "true");
      setAuth(true);
      navigate("/Dashboard");
    } else {
      setError("Invalid Email or password");
    }
    
  };

  return (
    <div>
      <h2>Login Page</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input type='email' placeholder='Enter Email' onChange={(e) => {setEmail(e.target.value)}}/>
      <br/>
      <input type='password' placeholder='Enter Password' onChange={(e) => {setPassword(e.target.value)}}/>
      <br/>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

function Dashboard({setAuth}) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setAuth(false);
    navigate("/");
  } 

  return (
    <div>
      <h2>This is the Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

function App() {
  
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("isAuthenticated") === "true");
  return (
    <BrowserRouter>
      <nav>
        <ul>
          {/* <li><Link to="/">Login</Link></li>
          <li><Link to="/Dashboard">Dashboard</Link></li> */}
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={isAuthenticated ? <navigate to="/Dashboard"/> : <Login setAuth = {setIsAuthenticated}/>}/>
        <Route path='/Dashboard' element={isAuthenticated ? <Dashboard setAuth = {setIsAuthenticated}/> : <navigate to="/"/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App; 

import {BrowserRouter, Link, Routes, Route, useNavigate} from 'react-router-dom';



function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/Dashboard");
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>This is the Dashboard</h2>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/">Login</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

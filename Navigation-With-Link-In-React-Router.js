import {Link, BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function Home () {
  return (
    <div>
      <h1>Welcome to the App!</h1>
    </div>
  );
}

function About () {
  return (
    <div>
      <h1>About Us</h1>
    </div>
  );
}

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/About">About</Link>
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
      </Routes>
    </Router>    
  );
};

export default App;

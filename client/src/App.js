import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './components/login/login';
import Register from './components/register/register';
import "./App.css";

function App(){
  return <Router>
    <Routes>
      <Route path = '/login' element = {<Login/>}/>
      <Route path = '/register' element = {<Register/>}/>
    </Routes>
  </Router>
}
export default App

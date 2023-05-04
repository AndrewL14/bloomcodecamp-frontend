import './App.css';
import { useLocalState } from './assets/utils/useLocalState';
import { Route, Routes} from 'react-router-dom';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import AssigmentView from './components/AssignmentView';

function App() {


  const [jwt, setJwt] = useLocalState("", "jwt")


  return (
    <div className = "App">
      <Routes>
        <Route path= "/login" element ={<LoginPage />} />
        <Route path= "/dashboard" element ={<PrivateRoute><Dashboard data = {jwt} /></PrivateRoute>} />
        <Route path= "/assigments/:id" element ={<PrivateRoute><AssigmentView data = {jwt} /></PrivateRoute>} />
        <Route path= "/" element ={<HomePage/>} />
      </Routes>
    </div>
  );

}

export default App;

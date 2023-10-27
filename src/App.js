import './App.css';
import { Navbar } from './components/Navbar';
import{Routes,Route} from 'react-router-dom'
import { SignIn } from './components/SignIn';
import SignUp from './components/SignUp';
function App() {
  return (
    <div className="App">
        <Routes>
         <Route path='/' element={<Navbar />} ></Route>
         <Route path='/signin' element={<SignIn />} ></Route>
         <Route path='/signup' element={<SignUp />} ></Route>
        </Routes>
        
    </div>
  
  );
}

export default App;



import './App.css';
import Login from './pages/Login/Login';
import Registro from './pages/Registro/Registro';
import Forgot from './pages/Forgot/Forgot';
import Home from './pages/Home/Home';
import { Route,  Routes} from 'react-router-dom'
import { AuthProvider } from './context/AuthContext';
import Perfil from './pages/Perfil/Perfil';
import Tienda from './pages/Tienda/Tienda';
import CartContent from './components/CartContent/CartContent';
import Chat from './pages/Chat/Chat';
import Mapa from './pages/Mapa/Mapa';
import "react-toastify/dist/ReactToastify.css";

function App() {
 
  return (
    <> 
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/registro' element={<Registro/>}/>
        <Route path='/forgot' element={<Forgot/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/perfil' element={ <Perfil/>}/>
        <Route path='/cart' element={ <CartContent/> }/>
        <Route path='/tienda' element={<Tienda/> }/> 
        <Route path='/chat' element={<Chat/>}/> 
        <Route path='/mapa' element={<Mapa/>}/> 
      </Routes>
    </AuthProvider>
    </>
  );
}

export default App;
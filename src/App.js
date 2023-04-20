

import './App.css';
import Login from './pages/Login/Login';
import Registro from './pages/Registro/Registro';
import Forgot from './pages/Forgot/Forgot';
import Home from './pages/Home/Home';
import {BrowserRouter as Router, Route, Navigate, Routes} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import Perfil from './pages/Perfil/Perfil';
import Tienda from './pages/Tienda/Tienda';
import CartContent from './components/CartContent/CartContent';
import Chat from './pages/Chat/Chat';
import Mapa from './pages/Mapa/Mapa';

function App() {
 
  return (
    <> 
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='registro' element={<Registro/>}/>
        <Route path='forgot' element={<Forgot/>}/>

        <Route path='home' element={
         <PrivateRoute>
          <Home/>
         </PrivateRoute>
        }/>

        <Route path='perfil' element={
         <PrivateRoute>
          <Perfil/>
         </PrivateRoute>
        }/>

        <Route path='cart' element={
         <PrivateRoute>
          <CartContent/>
         </PrivateRoute>
        }/>

        <Route path='tienda' element={
         <PrivateRoute>
          <Tienda/>
         </PrivateRoute>
        }/> 

        <Route path='chat' element={
         <PrivateRoute>
          <Chat/>
         </PrivateRoute>
        }/> 

        <Route path='mapa' element={
         <PrivateRoute>
          <Mapa/>
         </PrivateRoute>
        }/> 



        




      </Routes>
    </AuthProvider>
    </>
  );
}

export default App;

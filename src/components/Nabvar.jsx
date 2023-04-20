import { Link } from 'react-router-dom';
import './Navbar.css'
import { useAuth } from "../context/AuthContext";

function Navbar() {

    const auth = useAuth()
    const { displayName, email, photoURL} = auth.user
    

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" data-bs-theme="dark">
                <div className="container-fluid">
                    <div className='user'>
                        <Link to='/perfil' className="navbar-brand" style={{ width: '100px' }}>
                            <img src={photoURL} alt='Perfil' width='80' height='80' className='d-inline-block align-top' />
                        </Link>
                        <div className="user-info">   
                            {email && <p>{email}</p>}    
                        </div>
                    </div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto justify-content-end">
                            <Link to='/chat' className="nav-link" aria-current="page"> <i class="fas fa-comments"></i> Grupos y comunidades</Link>
                            <Link to='' className="nav-link"> <i class="fas fa-video"></i> Streaming</Link>
                            <Link to='/tienda' className="nav-link"> <i class="fas fa-shopping-cart"></i> Tienda</Link>
                            <Link to='/mapa' className="nav-link"> <i class="fas fa-map"></i> Mapa</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
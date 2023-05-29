import { NavLink } from 'react-router-dom';
import './Navbar.css'



function Nabvar() {


    const user = JSON.parse(localStorage.getItem("profile"));
    console.log(user);

   

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" data-bs-theme="dark">
                <div className="container-fluid">
                    <div className='user'>
                        <NavLink to='/perfil' className="navbar-brand" style={{ width: '100px' }}>
                            <img alt={user.result.email} src={user.result.imageUrl} width='80' height='80' className='d-inline-block align-top' />
                            {user.result.email.charAt(0)}
                        </NavLink>
                        <h6>{user.result.email}</h6>

                    </div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto justify-content-end">
                            <NavLink to='/home' className="nav-link" activeclassname="active" aria-current="page"> <i className="fas fa-home"></i> Home</NavLink>
                            <NavLink to='/chat' className="nav-link" activeclassname="active" aria-current="page"> <i className="fas fa-comments"></i> Grupos y comunidades</NavLink>
                            <NavLink to='/tienda' className="nav-link"> <i className="fas fa-shopping-cart"></i> Tienda</NavLink>
                            <NavLink to='/mapa' className="nav-link"> <i className="fas fa-map"></i> Mapa</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nabvar;

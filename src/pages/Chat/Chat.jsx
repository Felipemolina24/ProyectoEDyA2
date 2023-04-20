import './Chat.css'
import { Link } from 'react-router-dom'



const Chat = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" data-bs-theme="dark">
                <div className="container-fluid">
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto justify-content-end">
                            <Link to='/home' className="navbar-title" aria-current="page" > <i class="fas fa-home"> </i>Home</Link>
                            
                        </div>
                    </div>
                </div>
            </nav>
            <section className="body-chat">
                <div className="seccion-titulo">
                    <h3>
                        <i className="fas fa-comments"></i>
                        Sistema de mensajeria
                    </h3>
                </div>
                <div className="seccion-usuarios">
                    <div className="seccion-buscar">
                        <div className="input-buscar">
                            <input type="search" placeholder="Buscar usuario"/>
                                <i className="fas fa-search"></i>
                        </div>
                    </div>
                    <div className="seccion-lista-usuarios">
                        <div className="usuario">
                            <div className="avatar">
                                <img src="/usuario.png" alt="img"/>
                                    <span className="estado-usuario enlinea"></span>
                            </div>
                            <div className="cuerpo">
                                <span> Usuario</span>
                                <span>detalles de mensaje</span>
                            </div>
                            <span className="notificacion">
                                1
                            </span>
                        </div>
                        <div className="usuario">
                            <div className="avatar">
                                <img src="/usuario.png" alt="img"/>
                                    <span className="estado-usuario ocupado"></span>
                            </div>
                            <div className="cuerpo">
                                <span> Usuario</span>
                                <span>detalles de mensaje</span>
                            </div>
                            <span className="notificacion">
                                2
                            </span>
                        </div>
                        <div className="usuario">
                            <div className="avatar">
                                <img src="/usuario.png" alt="img"/>
                                    <span className="estado-usuario desconectado"></span>
                            </div>
                            <div className="cuerpo">
                                <span> Usuario </span>
                                <span>detalles de mensaje</span>
                            </div>
                            <span className="notificacion">
                                4
                            </span>
                        </div>
                    </div>
                </div>
                <div className="seccion-chat">
                    <div className="usuario-seleccionado">
                        <div className="avatar">
                            <img src="/usuario.png" alt="img"/>
                        </div>
                        <div className="cuerpo">
                            <span>Usuario</span>
                            <span>Activo - Escribiendo...</span>
                        </div>
                        <div className="opciones">
                            <ul>
                                <li>
                                    <button type="button"><i className="fas fa-video"></i></button>
                                </li>
                                <li>
                                    <button type="button"><i className="fas fa-phone-alt"></i></button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="panel-chat">
                        <div className="mensaje">
                            <div className="avatar">
                                <img src="/usuario.png" alt="img" />
                            </div>
                            <div className="cuerpo">
                                <img src="http://localhost/multimedia/png/user-foto-3.png" alt="" />
                                <div className="texto">
                                La comunicación es la clave del éxito. ¡Hablemos!
                                    <span className="tiempo">
                                        <i className="far fa-clock"></i>
                                        Hace 5 min
                                    </span>
                                </div>
                                <ul className="opciones-msj">
                                    <li>
                                        <button type="button">
                                            <i className="fas fa-times"></i>
                                        </button>
                                    </li>
                                    <li>
                                        <button type="button">
                                            <i className="fas fa-share-square"></i>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="mensaje left">
                            <div className="cuerpo">
                                <img src="http://localhost/multimedia/png/user-foto-3.png" alt="" />
                                <div className="texto">
                                ¡Conéctate con el mundo! ¡Inicia una conversación ahora!
                                    <span className="tiempo">
                                        <i className="far fa-clock"></i>
                                        Hace 6 min
                                    </span>
                                </div>
                                <ul className="opciones-msj">
                                    <li>
                                        <button type="button">
                                            <i className="fas fa-times"></i>
                                        </button>
                                    </li>
                                    <li>
                                        <button type="button">
                                            <i className="fas fa-share-square"></i>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="avatar">
                                <img src="/usuario.png" alt="img" />
                            </div>
                        </div>
                    </div>
                    <div className="panel-escritura">
                        <form className="textarea">
                            <div className="opcines">
                                <button type="button">
                                    <i className="fas fa-file"></i>
                                    <label for="file"></label>
                                    <input type="file" id="file" />
                                </button>
                                <button type="button">
                                    <i className="far fa-image"></i>
                                    <label for="img"></label>
                                    <input type="file" id="img" />
                                </button>
                            </div>
                            <textarea placeholder="Escribir mensaje"></textarea>
                            <button type="button" className="enviar">
                                <i className="fas fa-paper-plane"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Chat
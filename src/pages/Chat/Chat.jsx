import './Chat.css'
import Nabvar from '../../components/Nabvar'
import io from 'socket.io-client'
import { useState, useEffect } from 'react'
import moment from 'moment'

const socket = io('http://localhost:4000')

const Chat = () => {

    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState([])
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const handleSubmit = (e) => {
        e.preventDefault()
        socket.emit('message', message)
        const newMessage = {
            body: message,
            from: user.result.email,
            timestamp: moment().toISOString()
        }
        setMessages([...messages, newMessage])
        setMessage('')

    }

    useEffect(() => {
        const recibirMensaje = (message) => {
            setMessages([...messages, message])
        }
        socket.on('message', recibirMensaje)

        return () => {
            socket.off('message', recibirMensaje)
        }
    }, [messages])
    return (
        <>
            <Nabvar />
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
                            <input type="search" placeholder="Buscar usuario" />
                            <i className="fas fa-search"></i>
                        </div>
                    </div>
                    <div className="seccion-lista-usuarios">
                        <div className="usuario">
                            <div className="avatar">
                                <img src="/usuario.png" alt="img" />
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
                                <img src="/usuario.png" alt="img" />
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
                                <img src="/usuario.png" alt="img" />
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
                            <img src="/usuario.png" alt="img" />
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
                                    <button type="button"><i class="fas fa-phone"></i></button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="panel-chat">
                        {messages.map((message, index) => (
                            <div key={index} className={message.from === user.result.email ? "mensaje left" : "mensaje"}>
                                {message.from !== user.result.email && (
                                    <div className="avatar">
                                        <img src={user.result.imageUrl} alt={user.result.email} />
                                    </div>
                                )}
                                <div className="cuerpo">
                                    <img src="" alt="" />
                                    <div className="texto">
                                        {message.body}
                                        <span className="tiempo">
                                            <i className="far fa-clock"></i>
                                            {moment(message.timestamp).fromNow()}
                                        </span>
                                    </div>
                                    
                                </div>
                                {message.from === user.result.email && (
                                    <div className="avatar">
                                        <img src={user.result.imageUrl} alt={user.result.email} />
                                    </div>
                                )}
                            </div>
                        ))}


                    </div>
                    <div className="panel-escritura">
                        <form className="textarea" onSubmit={handleSubmit}>
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
                            <textarea placeholder="Escribir mensaje" onChange={e => setMessage(e.target.value)} value={message}></textarea>
                            <button type="submit" className="enviar"  >
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
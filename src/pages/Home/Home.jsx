import React, { useState, useEffect } from "react";
import Label from "../Login/components/Label/Label";
import './Home.css'
import { useAuth } from "../../context/AuthContext";
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import Nabvar from "../../components/Nabvar";
import Banner from "../../components/Banner/Banner";
import Posts from "../../components/Posts/Posts";
import Form from '../../components/Form/Form'
import { useDispatch } from "react-redux";
import {getPosts} from '../../actions/posts'

const Home = () => {


    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts());
      }, [currentId, dispatch]);

    return (
        <>

            <Nabvar />  
            <Container>
                <div className="row">
                    <div className="col-md-8">
                        <Posts setCurrentId={setCurrentId} />
                    </div>
                    <div className="col-md-4">
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </div>
                </div>
            </Container>

        </>
    )
}

export default Home
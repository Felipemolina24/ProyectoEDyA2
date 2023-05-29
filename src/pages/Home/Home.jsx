import React, { useState, useEffect } from "react";
import './Home.css'
import { Container} from 'react-bootstrap'
import Nabvar from "../../components/Nabvar";
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
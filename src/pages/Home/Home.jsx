import React from "react";
import Label from "../Login/components/Label/Label";
import './Home.css'
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Nabvar";
import Banner from "../../components/Banner/Banner";


const Home = () => {

    const auth = useAuth()
    
    
     
    return (
        <>
            <Navbar />
            <Banner/>
        </>
    )
}

export default Home
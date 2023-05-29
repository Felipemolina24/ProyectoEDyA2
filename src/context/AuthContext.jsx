import React, { useState } from "react";
import { createContext, useContext, useEffect } from "react";
import axios from "axios";

export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext)
    if (!context) {
        console.log("Error creating auth context")
    }
    return context;
}


export function AuthProvider({ children }) {

    const [user, setUser] = useState("")

    const [data, setData] = useState([])
    const [car, setCar] = useState([])

    useEffect(() => {
        axios("data.json").then((res) => setData(res.data))
    }, [])

    const buyProducts = (producto) => {
        const productoRepetido = car.find((item) => item.id === producto.id)

        if (productoRepetido) {
            setCar(car.map((item) => item.id === producto.id ? { ...producto, quanty: productoRepetido.quanty + 1 } : item))
        }
        else {
            setCar([...car, producto])
        }

    }

    const setLastPath = (path) => {
        localStorage.setItem("lastPath", path);
    };

    console.log(setUser);



    return (
        <authContext.Provider
            value={{



                user,
                setUser,
                data,
                car,
                setCar,
                buyProducts,
                setLastPath
            }}
        >
            {children}
        </authContext.Provider>
    )
}
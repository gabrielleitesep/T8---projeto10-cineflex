import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";


function Filme({ img, id }) {
    return (
        <Link to={`/sessoes/${id}`}>
            <div className="banner">
                <img src={img} alt="Cartaz do Filme" />
            </div>
        </Link>
    )
}

export default function Filmes() {

    const [catalogo, setCatalogo] = useState([])

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promise.then((r) => {
            setCatalogo(r.data);
        });
    }, []);

    return (
        <div className="listafilmes">
            {catalogo.map((c, index) => (
                <Filme key={index} img={c.posterURL} id={c.id} />
            ))}
        </div>
    )
}
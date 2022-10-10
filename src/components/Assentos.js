import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Header from "./Header";

export default function Assentos() {

    const { assentosId } = useParams()
    const [assento, setAssento] = useState({})

    useEffect(() => {
        const promise = axios.get(
            `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${assentosId}/seats`
        );

        promise.then((r) => {
            setAssento(r.data);

        });
    }, []);

    return (
        <div>
            <Header />
            <div className="selecione-assento">Selecione o(s) assento(s)</div>
            <div className="containerAssento">
                {assento.seats ? assento.seats.map((v) => (
                    <button className="botao-assento">{v.name}</button>
                )) : 'calma'}
            </div>
        </div>
    )
}
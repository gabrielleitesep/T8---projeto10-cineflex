import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "./Header";

function Sessao({ name, id }) {
    return (
        <Link to={`/assentos/${id}`}>
            <button className="botao-horario">{name}</button>
        </Link>
    )
}

function SessaoData({ weekday, date, showtimes }) {
    return (
        <div>
            <div className="data">
                <h1>{weekday}  -  {date}</h1>
            </div>
            <div className="horario">
                {showtimes.map((c, index) => (
                    <Sessao key={index} name={c.name} id={c.id} />
                ))}
            </div>
        </div>
    )
}

export default function Sessoes() {

    const { filmeId } = useParams();
    const [filmes, setFilmes] = useState([]);
    const [datas, setDatas] = useState([]);


    useEffect(() => {
        const promise = axios.get(
            `https://mock-api.driven.com.br/api/v5/cineflex/movies/${filmeId}/showtimes`
        );

        promise.then((r) => {
            setFilmes(r.data);
            setDatas(r.data.days);
        });
        promise.catch((err) => console.log(err.responde.data));
    }, [filmeId]);

    return (
        <div className="tela2">
            <Header />
            <div className="selecione-horario">Selecione o horário</div>
            <div>
                {datas.map((c, index) => (
                    <SessaoData
                        key={index}
                        weekday={c.weekday}
                        date={c.date}
                        showtimes={c.showtimes}
                    />
                ))}
            </div>
            <div className="footer">
                <div className="footer-foto">
                    <img
                        src={filmes.posterURL}
                        alt="mini cartaz do filme"
                    />
                </div>
                <h1>{filmes.title}</h1>
            </div>
        </div>
    )
}
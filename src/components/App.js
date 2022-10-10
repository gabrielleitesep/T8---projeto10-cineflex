import Header from './Header';
import Assentos from './Assentos';
import Filmes from './Filmes';
import Sessoes from './Sessoes';
import Sucesso from './Sucesso';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {

    return (

        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Filmes />} />
                    <Route path='/sessoes/:filmeId' element={<Sessoes />} />
                    <Route path='/assentos/:assentosId' element={<Assentos />} />
                    <Route path='/sucesso' element={<Sucesso />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
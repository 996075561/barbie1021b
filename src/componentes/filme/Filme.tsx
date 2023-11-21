

import React, {useState,useEffect} from 'react';
import './Filme.css'
import axios from 'axios'

export default function App() {
   const [data, setData] = useState(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

useEffect(() => {
    axios('http://localhost:3000/filmes')
    .then(response => {
       setData(response.data)
    })
    .catch(error => {
        console.error("error fetching data: ", error);
        setError(error);
    })
    .finally(() => {
        setLoading(false);
    })

}, [])
if (loading) return "Loading...";
}

type FilmeProps={
    titulo:string,
    sinopse:string,
    imagem:string
}

export default function Filme(props:FilmeProps){
    return(
        <div className="filme_content">
            <div className='foto_filme'>
            <img src={props.imagem} alt=""/>
            </div>
            <div className="texto_foto">
                <h1>{props.titulo}</h1>
                <p className="sinopse">
                    {props.sinopse}
                </p>
            </div>
        </div>
    )
}
import { useState } from "react";
import Filme from "../filme/Filme";
import './Main.css'
type FilmesType = {
    id:number,
    titulo:string,
    sinopse:string,
    imagem:string
}
export default function Main(){
    //Hook
    const [texto,setTexto] = useState("Guilherme")

    const filmes:FilmesType[] = [
    {
        id:1,
        titulo :"Barbie",
        sinopse:"Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.",
        imagem:"/barbie.png"
    },
    {
       id:2,
       titulo:"Transformers",
       sinopse:"Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.",
       imagem:"/Transformers.png"
    }       
        
    ]
    // a função recebe um atributo chamado e de "event"
        function mudaTexto(e:React.ChangeEvent<HTMLInputElement>){
            console.log(e.target.value)
            setTexto (e.target.value)
        }
    return(
        <>
        <div className="pesquisa">
            <p>Buscar Filme</p>
            <input className='barrapesquisa' type="text" onChange={mudaTexto}/>
            <div>
                <p className='texto_digitado'> pesquisa: {texto}</p>
            </div>
        </div>
        <main className="content-main">
            <Filme titulo="Barbie" sinopse="Depois de ser expulsa da 
                    Barbieland por ser uma boneca 
                    de aparência menos do que 
                    perfeita, Barbie parte para o 
                    mundo humano em busca da 
                    verdadeira felicidade."
                    imagem="/barbie.png"
                    />
            <Filme titulo="Transformers" sinopse="Depois de ser expulsa da 
                    Barbieland por ser uma boneca 
                    de aparência menos do que 
                    perfeita, Barbie parte para o 
                    mundo humano em busca da 
                    verdadeira felicidade."
                    imagem="/Transformers.png"
                    />
                     <Filme titulo="Barbie" sinopse="Depois de ser expulsa da 
                    Barbieland por ser uma boneca 
                    de aparência menos do que 
                    perfeita, Barbie parte para o 
                    mundo humano em busca da 
                    verdadeira felicidade."
                    imagem="/barbie.png"
                    />
            <Filme titulo="Transformers" sinopse="Depois de ser expulsa da 
                    Barbieland por ser uma boneca 
                    de aparência menos do que 
                    perfeita, Barbie parte para o 
                    mundo humano em busca da 
                    verdadeira felicidade."
                    imagem="/Transformers.png"
                    />
                     <Filme titulo="Barbie" sinopse="Depois de ser expulsa da 
                    Barbieland por ser uma boneca 
                    de aparência menos do que 
                    perfeita, Barbie parte para o 
                    mundo humano em busca da 
                    verdadeira felicidade."
                    imagem="/barbie.png"
                    />
                   <Filme titulo="Transformers" sinopse="Depois de ser expulsa da 
                    Barbieland por ser uma boneca 
                    de aparência menos do que 
                    perfeita, Barbie parte para o 
                    mundo humano em busca da 
                    verdadeira felicidade."
                    imagem="/Transformers.png"
                    />
                    <Filme titulo="Barbie" sinopse="Depois de ser expulsa da 
                    Barbieland por ser uma boneca 
                    de aparência menos do que 
                    perfeita, Barbie parte para o 
                    mundo humano em busca da 
                    verdadeira felicidade."
                    imagem="/barbie.png"
                    />
                   <Filme titulo="Transformers" sinopse="Depois de ser expulsa da 
                    Barbieland por ser uma boneca 
                    de aparência menos do que 
                    perfeita, Barbie parte para o 
                    mundo humano em busca da 
                    verdadeira felicidade."
                    imagem="/Transformers.png"
                    />

        </main>
        </>
    )
}
import { useState } from "react";
import Filme from "../filme/Filme";
import './Main.css'
type FilmesType = {
    id: number,
    titulo:string,
    sinopse:string,
    imagem:string
}
export default function Main(){
    //Hook
    const [texto,setTexto] = useState("")

    const filmes:FilmesType[] = [
        {
            id:1,
            titulo:"Barbie",
            sinopse:"Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.",
            imagem:"/barbie.png"
        },
        {
            id:2,
            titulo:"Transformers",
            sinopse:"O destino da humanidade está em jogo quando duas raças de robôs, os Autobots e os vilões Decepticons, chegam à Terra. Os robôs possuem a capacidade de se transformarem em diferentes objetos mecânicos enquanto buscam a chave do poder supremo com a ajuda do jovem Sam.",
            imagem:"Transformers.png"
        },
        {
            id:3,
            titulo:"A vida é uma Festa",
            sinopse:"Apesar da proibição da música por gerações de sua família, o jovem Miguel sonha em se tornar um músico talentoso como seu ídolo Ernesto de la Cruz. Desesperado para provar seu talento, Miguel se encontra na deslumbrante e colorida Terra dos Mortos. Depois de conhecer um charmoso malandro chamado Héctor, os dois novos amigos embarcam em uma jornada extraordinária para desvendar a verdadeira história por trás da história da família de Miguel.",
            imagem:"festa.jpg"
        },
        {
            id:4,
            titulo:"Divertidamente",
            sinopse:"Com a mudança para uma nova cidade, as emoções de Riley, que tem apenas 11 anos de idade, ficam extremamente agitadas. Uma confusão na sala de controle do seu cérebro deixa a Alegria e a Tristeza de fora, afetando a vida de Riley radicalmente.",
            imagem:"divertidamente.png"
        }

    ]
    //A função recebe um atributo chamado e de "event"
    function mudaTexto(e:React.ChangeEvent<HTMLInputElement>){
        console.log(e.target.value)
        setTexto(e.target.value)
    }
    return(
        <>
            <div className="pesquisa">
                
                <p>Buscar Filme</p>
                <input className='barrapesquisa' type="text" onChange={mudaTexto} />
                <div>
                    <p className='texto_digitado'>pesquisa: {texto}</p>
                </div>
            </div>
            <main className="content-main">

            {filmes.filter((filme)=>filme.titulo.toLowerCase().includes(texto)).map((filme:FilmesType)=>
            <Filme key={filme.id}
            titulo={filme.titulo}
            sinopse={filme.sinopse}
            imagem={filme.imagem}
            />
            )
            }
            </main>
        </>
    )
}
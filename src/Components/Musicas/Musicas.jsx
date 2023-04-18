// Css
import './Musicas.css'

import { useState } from 'react'

import { BsPlayCircleFill } from 'react-icons/bs'

const Musicas = ({ imgMusica, nomeMusica, descMusica}) => {

  const [mouseOpen, setMouseOpen] = useState(false)
  
  const open = () => setMouseOpen(true);

  const leave = () => setMouseOpen(false)

  return (
    <div>
        <div className='container-musicas' onMouseEnter={open} onMouseLeave={leave}>
            <div className="container-conteudo-musicas">
                <div className="img-musica">
                    < BsPlayCircleFill className={`btn-play ${mouseOpen ? "btn-active" : "btn-inactive"}`}/>
                    <img src={imgMusica} alt={nomeMusica} />
                </div>
                <h2>{nomeMusica}</h2>
                <p>{descMusica}</p>
            </div>
        </div>
    </div>
  )
}

export default Musicas
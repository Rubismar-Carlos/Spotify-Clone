// css
import './Musicas.css'

// react
import { useState } from 'react'

// components
import Musicas from './Musicas'

const MusicasRock = ({nomeProjeto}) => {

    // musicas Sertanejas
    const [rock, setRock] = useState ([
        {
            id: 1,
            imgMusica: "https://portalpopline.com.br/wp-content/uploads/2022/10/maneskin-the-loneliest-clipe.jpg",
            nomeMusica: "THE LONELIEST",
            descMusica: "Måneskin"
        },
        {
            id: 2,
            imgMusica: "https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2022/10/tom-delonge-edging-clipe.jpg",
            nomeMusica: "Edging",
            descMusica: "blink-182"
        },
        {
            id: 3,
            imgMusica: "https://portalpopline.com.br/wp-content/uploads/2022/01/Gayle-Foto-Acacia-Evans.png",
            nomeMusica: "adcdsefu",
            descMusica: "Gayle"
        }
        ,
        {
            id: 4,
            imgMusica: "https://www.udiscovermusic.com/wp-content/uploads/2021/11/Imagine-Dragons-Getty-1353299400-copy-1000x600.jpg",
            nomeMusica: "Sharks",
            descMusica: "Imagine Dragons"
        }
        ,
        {
            id: 5,
            imgMusica: "https://static.ffx.io/images/$zoom_0.53%2C$multiply_0.6988%2C$ratio_1.776846%2C$width_1059%2C$x_0%2C$y_0/t_crop_custom/q_86%2Cf_auto/43873a17c286c1cae6b986a0f86c46320d43818d",
            nomeMusica: "Billie Eilish",
            descMusica: "Happier Than Ever – Edit"
        }
        ,
        {
            id: 6,
            imgMusica: "https://roadiecrew.com/wp-content/uploads/QUEEN-8.jpg",
            nomeMusica: "Face It Alone",
            descMusica: "Quenn"
        }
        ,
        {
            id: 7,
            imgMusica: "https://ucsfm.com.br/wp-content/uploads/2022/06/SITE-01-06-2022-6-800x445.png",
            nomeMusica: "SUPERMODEL",
            descMusica: "Måneskin"
        }
        ,
        {
            id: 8,
            imgMusica: "https://i0.wp.com/poltronavip.com/wp-content/uploads/2021/08/olivia-rodrigo-brutal-videoclipe-jpg.webp?w=1200&ssl=1",
            nomeMusica: "brutal",
            descMusica: "Olivia Rodrigo"
        },
        {
            id: 9,
            imgMusica: "https://upload.wikimedia.org/wikipedia/pt/a/ad/ThisIsWhy.jpg",
            nomeMusica: "This Is Why",
            descMusica: "Paramore"
        },
        {
            id: 10,
            imgMusica: "https://www.rollingstone.com/wp-content/uploads/2022/08/demi-lovato-29-tiktok.jpg?w=1581&h=1054&crop=1",
            nomeMusica: "29",
            descMusica: "Demi Lovato"
        }
    ])

    const [counterDesktop, setCounterDesktop] = useState(7)

    const [btnVisivel, setBtnVisivel] = useState(true)

    const maisMusicasDesktop = () => {

        setCounterDesktop(counterDesktop + 7)

        setBtnVisivel(false)

    }
   

  return (
    <div>
        <div className="descricao-projetos">
            <h2>{nomeProjeto}</h2>
            {btnVisivel && <button className='btn-musicas-desktop' onClick={maisMusicasDesktop}>Mostrar tudo</button>}
        </div>

        {/* ira puchar todas as musicas sertanejas */}
        <div className="container-projetos">
                {rock.slice(0, counterDesktop).map((msc) => (
                    < Musicas 
                        key={msc.id} 
                        imgMusica={msc.imgMusica} 
                        nomeMusica={msc.nomeMusica} 
                        descMusica={msc.descMusica}
                    />
                )) }
        </div>

        {/* projetos de musicas para mobile */}
        <div className="container-projetos-mobile">
                {rock.slice(0, counterDesktop).map((msc) => (
                    < Musicas 
                        key={msc.id} 
                        imgMusica={msc.imgMusica} 
                        nomeMusica={msc.nomeMusica} 
                    />
                )) }
        </div>
    </div>
  )
}

export default MusicasRock
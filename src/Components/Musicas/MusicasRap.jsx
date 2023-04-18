// css
import './Musicas.css'

// react
import { useState } from 'react'

// components
import Musicas from './Musicas'

const MusicasRap = ({nomeProjeto}) => {

    const [rap, setRap] = useState([
        {
            id: 1,
            imgMusica: "https://beats-rhymes-lists.com/wp-content/uploads/2023/01/most-streamed-hip-hop-songs-of-all-time-drake-one-dance.jpg",
            nomeMusica: "One Dance",
            descMusica: "Drake, Wizkid and kyla"
        },
        {
            id: 2,
            imgMusica: "https://i.insider.com/5dee595679d7573482254415?width=1000&format=jpeg&auto=webp",
            nomeMusica: "Lucid Dreams",
            descMusica: "Juice WRLD"
        },
        {
            id: 3,
            imgMusica: "https://s3.amazonaws.com/thumbnails.thecrimson.com/photos/2018/02/27/011010_1328454.png.1500x812_q95_crop-smart_upscale.png",
            nomeMusica: "God’s Plan",
            descMusica: "Drake"
        }
        ,
        {
            id: 4,
            imgMusica: "https://beats-rhymes-lists.com/wp-content/uploads/2021/07/every-single-hip-hop-billboard-number-one-album-since-1986-xxx.jpg",
            nomeMusica: "Sad",
            descMusica: "XXXTentacion"
        }
        ,
        {
            id: 5,
            imgMusica: "https://beats-rhymes-lists.com/wp-content/uploads/2021/09/ranking-travis-scott-first-week-album-sales-birds-trap.jpg",
            nomeMusica: "Goosebumps",
            descMusica: "Travis Scott, Kendrick Lamar"
        }
        ,
        {
            id: 6,
            imgMusica: "https://beats-rhymes-lists.com/wp-content/uploads/2023/01/most-streamed-hip-hop-songs-of-all-time-xxx.jpg",
            nomeMusica: "Jocelyn Flores",
            descMusica: "XXXTentacion"
        }
        ,
        {
            id: 7,
            imgMusica: "https://beats-rhymes-lists.com/wp-content/uploads/2021/07/every-single-hip-hop-billboard-number-one-album-since-1986-lil-uzi.jpg",
            nomeMusica: "XO Tour Llif3",
            descMusica: "Lil Uzi Vert"
        }
        ,
        {
            id: 8,
            imgMusica: "https://beats-rhymes-lists.com/wp-content/uploads/2023/01/most-streamed-hip-hop-songs-of-all-time-kendrick-humble.jpg",
            nomeMusica: "Humble",
            descMusica: "Kendrick Lamar"
        },
        {
            id: 9,
            imgMusica: "https://beats-rhymes-lists.com/wp-content/uploads/2021/07/every-single-hip-hop-billboard-number-one-album-since-1986-astroworld.jpg",
            nomeMusica: "Sicko Mode",
            descMusica: "Travis Scott, Drake"
        },
        {
            id: 10,
            imgMusica: "https://beats-rhymes-lists.com/wp-content/uploads/2021/10/lil-nas-x.jpg",
            nomeMusica: "Industry Baby",
            descMusica: "Lil Nas X, Jack Harlow"
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

        {/* ira puchar todas as musicas de rap */}
        <div className="container-projetos">
                {rap.slice(0, counterDesktop).map((msc) => (
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
                {rap.slice(0, counterDesktop).map((msc) => (
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

export default MusicasRap
// css
import './Musicas.css'

// react
import { useState } from 'react'

// components
import Musicas from './Musicas'

const MusicasSertanejas = ({nomeProjeto}) => {

        // Musicas Eletronicas
    const [sertanejas, setSertanejas] = useState([
        {
            id: 1,
            imgMusica: "https://portalpopline.com.br/wp-content/uploads/2023/01/marilia-mendonca-leao-topo-spotify-brasil-3.jpg",
            nomeMusica: "Leão",
            descMusica: "Marília Mendonça"
        },
        {
            id: 2,
            imgMusica: "https://web.portalsucesso.com.br/wp-content/uploads/2021/07/guilherme-e-benuto-12-julho.png",
            nomeMusica: "Esse B.O é meu",
            descMusica: "Guilherme e Benuto, Matheus e Kauan"
        },
        {
            id: 3,
            imgMusica: "https://tonamidia.com.br/wp-content/uploads/2022/11/IsraeleRodolffoeAnaCastela-04nov-02_ToNaMidia.jpg",
            nomeMusica: "Bombonzinho",
            descMusica: "Israel e Rodolffo, Ana Castela"
        }
        ,
        {
            id: 4,
            imgMusica: "https://musicopolis.com.br/wp-content/uploads/2023/01/Fred-e-Fabricio-com-Hugo-e-Guilherme-Guarda-Roupa.jpg",
            nomeMusica: "Guarda roupa",
            descMusica: "Fred e Fabrício, Hugo e Guilherme"
        }
        ,
        {
            id: 5,
            imgMusica: "https://somdepapo.com.br/portal/wp-content/uploads/2023/03/Screenshot_20230304-133341_Photos.jpg",
            nomeMusica: "Erro gostoso",
            descMusica: "Simone Mendes"
        }
        ,
        {
            id: 6,
            imgMusica: "https://www.radiosatfm.com.br/blogue/wp-content/uploads/2022/10/hq720.jpg",
            nomeMusica: "Eu gosto assim",
            descMusica: "Gustavo Mioto, Mari Fernandez"
        }
        ,
        {
            id: 7,
            imgMusica: "https://akamai.sscdn.co/tb/326x326/palcomp3-discografia/f/4/3/c/6d4545868e1d4f93b97f3ce4dff89036.jpg",
            nomeMusica: "Traumatizei ",
            descMusica: "Henrique e Juliano"
        }
        ,
        {
            id: 8,
            imgMusica: "https://cdn.jornaldebrasilia.com.br/wp-content/uploads/2023/02/09180929/Capa-JBr-5-7.png",
            nomeMusica: "A culpa é nossa",
            descMusica: "Maiara e Maraísa"
        },
        {
            id: 9,
            imgMusica: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjwfD54Rnau2uADm7qRnIlUPpI6dfBM3RLt-rr1NqqQzCXGOq-beLhNBLvHfOd7VmvsZJ44q4lIovbSWXuPTLqfJ-TKWWcZendqusDXDwe2mx3ordKGqWA3qDiCGoM7In6PJQhaT-hoy_e2CZjPkMrh1pRDSfrEW9nO1HwYJEmMwinVRCgcZXDJSVsw/s385/image%20(3).png",
            nomeMusica: "Palhaça",
            descMusica: "Naiara Azevedo ft Ana Castela"
        },
        {
            id: 10,
            imgMusica: "https://akamai.sscdn.co/tb/palcomp3-fotos/f/3/8/1/leoeraphaeloficial-48135538-b9fa-485b-8a50-514c1b2fc634.jpg",
            nomeMusica: "Larga ai pra ver",
            descMusica: "Léo e Raphael, Jorge"
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

        {/* ira puchar todas as musicas eletronicas */}
        <div className="container-projetos">
                {sertanejas.slice(0, counterDesktop).map((msc) => (
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
                {sertanejas.slice(0, counterDesktop).map((msc) => (
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

export default MusicasSertanejas
// CSS
import './Home.css'

// Components
import Navegacao from '../../Components/Navegacao/Navegacao'
import MusicasRap from '../../Components/Musicas/MusicasRap'
import MusicasRock from '../../Components/Musicas/MusicasRock'
import MusicasSertanejas from '../../Components/Musicas/MusicasSertanejas'

const Home = () => {

  return (
    <div className='home'>
        <div className="navegacao">
          <Navegacao/>
        </div>
        <div className="musicas">
          < MusicasSertanejas nomeProjeto={"Sertanejas"} />
        </div>
        <div className='musicas'>
          < MusicasRock nomeProjeto={"Rock"}/>
        </div>
        <div className='musicas'>
          < MusicasRap nomeProjeto={"Hip-Hop"}/>
        </div>
    </div>
  )
}

export default Home
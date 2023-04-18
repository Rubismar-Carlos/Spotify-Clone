// css
import './Navegacao.css'

const Navegacao = () => {

  return (
    <div className='container-navegacao'>
        <div className="container-login">
            <div>
                <button className='btn-inscrever'><h4>Inscrever-se</h4></button>
            </div>
            <div>
                <button className='btn-entrar'>
                  <h4>Entrar</h4>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Navegacao
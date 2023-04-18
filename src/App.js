// css
import './App.css';

// react router
import { BrowserRouter, Route, Routes} from 'react-router-dom'

// Pages
import Home from './Pages/Home/Home';

// Components
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import FooterMobile from './Components/Footer/FooterMobile';

function App() {

  return (
    <div className="App"> 
        <BrowserRouter>
          <main>
          <div className="box-nav-footer">
          < Navbar />
          < Footer className="footer-desktop"/>
          </div>
            <div className="container-conteudo">
              <div className='conteudo'>
                <Routes>
                  <Route path='/' element={ < Home />} />
                </Routes>
              </div>
            </div>
          </main>
          < FooterMobile className="footer-mobile"/>
        </BrowserRouter>
    </div>
  );
}

export default App;

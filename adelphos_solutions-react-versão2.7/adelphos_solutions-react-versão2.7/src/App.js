import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Páginas inicias sem Cadastro
import Home from './components/pages/Home';
import FaleConosco from './components/pages/FaleConosco';
import Login from './components/pages/Login';
import Cadastro from './components/pages/Cadastro';
import Sobre from './components/pages/Sobre'
import DonationPage from './components/pages/DonationPage';

//Páginas do Adm
import AdmPage from './components/AdmPages/page/AdmPage';
import CadastrarEvento from './components/AdmPages/page/CadastrarEvento';
import ListarAssociados from './components/AdmPages/page/ListarAssociados';
import VoluntRegister from './components/AdmPages/page/VoluntRegister';
import AdmDonationPage from './components/AdmPages/page/AdmDonationPage';

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'


import NavbarAdm from './components/layout/NavbarAdm';




function App() {
  return (
    <Router>
    
      <Routes>
        {/* Layouts da Página Inicial */}
        <Route element={<Navbar />} >

        <Route exact path="/" element={<Home />}/>
        <Route path="/FaleConosco" element={<FaleConosco />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/Cadastro" element={<Cadastro />}/>
        <Route path="/Sobre" element={<Sobre />}/>
        <Route path="/DonationPage" element={<DonationPage />}/>

        </Route>

        {/* Layouts da Página do Adm */}
        <Route element={<NavbarAdm />}>

        <Route path="/AdmPage" element={<AdmPage />} />
        <Route path="/CadastrarEvento" element={<CadastrarEvento />}/>
        <Route path="/ListarAssociados" element={<ListarAssociados />}/>
        <Route path="/VoluntRegister" element={<VoluntRegister />}/>
        <Route path="/AdmDonationPage" element={<AdmDonationPage />}/>
        
        </Route>

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Insta from './components/Insta/Insta';
import Team from './components/Team/Team';
import Contacts from './components/Contacts/Contacts';
import Faq from './components/FAQ/Faq';
import Catalog from './components/Catalog/Catalog';
import Quiz from './components/Quiz/Quiz';

function App() {
  return (
    <div className="App">
      <Hero />
      <Catalog />
      <About />
      <Quiz />
      <Team />
      <Faq />
      <Contacts />
      <Insta />
      <Footer />
    </div>
  );
}

export default App;

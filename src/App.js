import 'bootstrap/dist/css/bootstrap.min.css'
import CarouselComponent from './carouselComponent';
import NavbarComponent from './navbarComponent';
import Home from './home';
import FooterComponent from './footerComponent';


function App() {
  return (
      <div className="App">
        <header>
            < NavbarComponent />
        </header>
        < CarouselComponent />
        < Home />
        <FooterComponent />
        
      </div>
  );
}

export default App;

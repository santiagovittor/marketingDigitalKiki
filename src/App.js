import "./sass/css/estilos.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import MainPage from "./components/mainPage/MainPage"
import ContactoPage from "./components/pages/ContactoPage";
import DiseñoWebPage from "./components/pages/DiseñoWebPage";
import MarketingDigitalPage from "./components/pages/MarketingDigitalPage";
import EcommercePage from "./components/pages/EcommercePage";
import Access from "./components/access/Access";
import RestorePassword from "./components/access/RestorePassword";
import Register from "./components/access/Register";
import Joke from "./components/joke/Joke";

const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/joke" component={Joke} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/login" component={Access} exact />
        <Route path="/login/restore-password" component={RestorePassword} exact />
        <Route path="/main" component={MainPage} exact />
        <Route path="/contacto" component={ContactoPage} exact />
        <Route path="/diseño-web" component={DiseñoWebPage} exact />
        <Route path="/e-commerce" component={EcommercePage} exact />
        <Route path="/marketing-digital" component={MarketingDigitalPage} exact />
      </Switch>
    </BrowserRouter>
  )
}

export default App;

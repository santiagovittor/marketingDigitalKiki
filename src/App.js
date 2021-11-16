import "./sass/css/estilos.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import MainPage from "./components/mainPage/MainPage"

const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/main" component={MainPage} exact />
      </Switch>
    </BrowserRouter>
  )
}

export default App;

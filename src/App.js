import Home from "./components/Home";
// Components
import ProductList from "./components/ProductList";
//styling
import "./App.css";
import { Route, Switch } from "react-router";
import Detail from "./components/Detail";
import NavBar from "./components/NavBar";
import products from "./products";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="everything">
      <NavBar />
      <br />
      <Switch>
        <Route exact path="/list/:listSlug">
          <Detail />
        </Route>
        <Route exact path="/list">
          <ProductList product={products} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

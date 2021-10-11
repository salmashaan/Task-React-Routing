import Home from "./components/Home";
// Components
import ProductList from "./components/ProductList";
//styling
import "./App.css";
import { Route, Switch } from "react-router";
import Detail from "./components/Detail";
import NavBar from "./components/NavBar";
import products from "./products";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/List/:listsSlug">
          <Detail />
        </Route>
        <Route exact path="/List">
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

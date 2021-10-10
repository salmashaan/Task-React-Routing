import Home from "./components/Home";
// Components
import ProductList from "./components/ProductList";
//styling
import "./App.css";
import Detail from "./components/Detail";
import { Route, Switch } from "react-router";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/List">
          {" "}
          <ProductList />{" "}
        </Route>
        <Route exact path="/">
          {" "}
          <Home />{" "}
        </Route>
        <Detail />
      </Switch>
    </div>
  );
}

export default App;

/** @format */

import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/cart"} component={Cart} />
      </Switch>
    </div>
  );
}

export default App;

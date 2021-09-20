import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { CatalogDog } from "./pages/catalog/dog/CatalogDog";
import { CatalogCat } from "./pages/catalog/cat/CatalogCat";
import { Navbar } from "./components/navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/catalogDog"} component={CatalogDog} />
        <Route path={"/catalogCat"} component={CatalogCat} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
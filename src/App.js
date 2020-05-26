import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'bulma/css/bulma.css';
import Productos from './components/productos';
import NuevoProducto from './components/nuevoProducto';
import EditarProducto from './components/editarProducto';
import Header from './components/header';

//Redux
import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="container">
          <Header />
          <Switch>
            <Route exact path="/" component={Productos}></Route>
            <Route exact path="/NuevoProducto" component={NuevoProducto}></Route>
            <Route exact path="/EditarProducto/:id" component={EditarProducto}></Route>
          </Switch>
        </div>
      </Provider>
    </BrowserRouter>

    
  );
}

export default App;

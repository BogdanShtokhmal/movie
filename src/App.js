import logo from './logo.svg';
import './App.css';
import {moviesServices} from "./services";
import React from 'react'
import {BaseLayout} from "./layout";
import {Home} from "./pages";




function App() {

  return (
      <BaseLayout>
          <Home/>


      </BaseLayout>

  );
}

export default App;

//Exercicio feito na mentoria Dojo (30/7)

import React from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom'
import pokemons from './data';
import Pokedex from './Pokedex';
import PokemonDetails from './components/PokemonDetails';

function App() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <BrowserRouter>
      <Route exact path='/'
        render={ (props) => <Pokedex {...props} pokemons={ pokemons } /> }
      />
      <Route path='/pokemons/:id'
       render={ (props) => <PokemonDetails {...props} details={ pokemons } /> } />
      </BrowserRouter>
    </div>
  );
}

export default App;

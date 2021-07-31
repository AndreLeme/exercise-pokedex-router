import React from 'react'
import { Link } from 'react-router-dom'

class PokemonDetails extends React.Component {
  render() {
    console.log(this.props.match.params);
    const { name,
       type,
          image,
           moreInfo
           } = this.props.details;

    const { id } = this.props.match.params;    
    const arrPokemons = this.props.details;
    const findPokemon = (what) => {
      console.log(this.props.match.params);
      return arrPokemons.filter((pokemon) => pokemon.id === Number(id))
              .map((pokemon) => pokemon[what])
    } 
    
    return (
      <div>
        <Link to='/'>Home</Link>
        <ul>
          <li>{findPokemon('name')}</li>
          <li>{findPokemon('type')}</li>
          <li>{moreInfo}</li>
          <li>{}</li>
        </ul>
      </div>

    )
  }
}

export default PokemonDetails;

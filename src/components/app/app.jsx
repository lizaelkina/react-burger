import React from 'react';
import {getIngredients} from '../../utils/api';
import {AppHeader} from '../app-header/app-header';

class App extends React.Component {

  state = {
    ingredients: []
  }

  componentDidMount() {
    getIngredients()
        .then((ingredients) => {
          const newState = {
            ...this.state,
            ingredients: ingredients
          }
          this.setState(newState);
        })

  }

  render() {
    return (
        <>
          <AppHeader/>
        </>
    );
  }
}

export default App;
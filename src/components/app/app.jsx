import React from 'react';
import {getIngredients} from '../../utils/api'

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
        <h1>Hello, world!</h1>
    );
  }
}

export default App;
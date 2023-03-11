import React from 'react';

export class IngredientDetails extends React.Component {

  render() {
    return (
        <figure>
          <img src={this.props.ingredient.image} alt={this.props.ingredient.name}/>
          <figcaption>{this.props.ingredient.name}</figcaption>
        </figure>
    );
  }
}

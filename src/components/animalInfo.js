import React, { Component } from 'react';

class AnimalInfo extends Component {

  render() {
    return (
      <tr>
        <th scope="row">{this.props.animals.name}</th>
        <td>{this.props.animals.species}</td>
        <td>{this.props.animals.foods.likes}</td>
        <td>{this.props.animals.foods.dislikes}</td>
      </tr>
    );
  }
}
export default AnimalInfo;

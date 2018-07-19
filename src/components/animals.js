import React, { Component } from 'react';
import AnimalInfo from './animalInfo'

class Animals extends Component {

  render() {
    let animals;
    if (this.props.animals) {
      animals = this.props.animals.map(animal => {
        return <AnimalInfo key={animals.name} animal={animal} />
      })
    }

    function logState(data) {
      console.log(data);
    }

    return (
      <div className="col-md-12">
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Species</th>
              <th scope="col">Likes</th>
              <th scope="col">Dislikes</th>
            </tr>
          </thead>
          <tbody>
            {animals}
          </tbody>
        </table>
      </div>
    );
  }
}

export default AnimalInfo;

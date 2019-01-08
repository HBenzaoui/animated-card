import React, { Component } from 'react';

class Card extends Component {
  state = {
    houses: [
      {
        id: 1,
        name: 'Nouveau de villa',
        adr: 'Bab Ezzoaur',
        bed: 3,
        shower: 1,
        cars: 4,
        img: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg'
      },

      {
        id: 2,
        name: 'Nouveau de villa',
        adr: "M'Sila",
        bed: 5,
        shower: 2,
        cars: 2,
        img:
          'https://images.pexels.com/photos/159553/farmhouse-rustic-input-flowers-159553.jpeg'
      },

      {
        id: 3,
        name: 'Nouveau de villa',
        adr: 'Bab Ezzoaur',
        bed: 3,
        shower: 1,
        cars: 4,
        img: 'https://images.pexels.com/photos/259597/pexels-photo-259597.jpeg'
      }
    ]
  };

  render() {
    return (
      <div className="container">
        <div className="card" style={{ width: '18rem' }}>
          <img
            src={this.state.houses[0].img}
            className="card-img-top rounded-left p-3"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title text-justify">
              {this.state.houses[0].name}
            </h5>
            <p className="card-text text-justify">{this.state.houses[0].adr}</p>
            <div className="text-left">
              <i className="fa fa-bed mr-1" />
              <span className="mr-3">{this.state.houses[0].bed}</span>
              <i className="fa fa-bath mr-1" />
              <span className="mr-3">{this.state.houses[0].shower}</span>
              <i className="fa fa-car mr-1" />
              <span className="mr-3">{this.state.houses[0].cars}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;

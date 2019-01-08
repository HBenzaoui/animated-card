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
            <div className="row">
              <h5 className="card-title col-xs-6 ">
                {this.state.houses[0].name}
              </h5>
              <h5
                className=" "
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.2)',
                  color: '#fff',
                  lineHeight: '20px',
                  fontSize: '14px',
                  position: 'absolute',
                  marginRight: '15px',
                  right: '0',
                  display: 'block',
                  padding: '0 10px'
                }}
              >
                {this.state.houses[0].id}
              </h5>
            </div>
            <p className="card-text text-justify">{this.state.houses[0].adr}</p>
            <div className="text-left">
              <i className="fa fa-bed mr-1" />
              <span className="mr-3">{this.state.houses[0].bed}</span>
              <i
                className="fa fa-bath
               mr-1"
              />
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

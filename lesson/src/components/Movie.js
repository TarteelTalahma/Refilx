import React, { Component } from "react";

class Movie extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        {this.props.movies.map((e) => {
          if (e.id === this.props.match.params.id) {
            return (
              <div>
                <h1>{e.title}</h1>
                <img src={e.img} width="400" height="600" alt="" />
                <p>{e.descrShort}</p>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default Movie;

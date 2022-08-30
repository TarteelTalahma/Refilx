import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        { id: 0, name: "Tarteel " },
        { id: 1, name: "Asil " },
        { id: 2, name: "Areej " },
        { id: 3, name: "Tarneem " },
        { id: 4, name: "Athier " },
      ],
    };
  }
  render() {
    return (
      <div>
        <h1>Who's Watching</h1>
        <div>
          {this.state.users.map((e) => (
            <Link to="/Catalog">
              <span>{e.name}</span>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default Landing;

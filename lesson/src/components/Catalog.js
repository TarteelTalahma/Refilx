import React, { Component } from "react";
import { Link } from "react-router-dom";
import Movie from "./Movie";

class Catalog extends Component {
  constructor() {
    super();
    this.state = {
      budget: 100,
    };
  }

  updateinputText = (event) => {
    this.props.setInputValue(event.target.value);
  };

  updatedMovieStatus = (movieId) => {
    this.props.updatedMovieStatus(movieId);
    // if (this.props.movies.length > 0) {
    //   return (
    //     <div>
    //       <h1>Rented</h1>
    //       <div className="rentedMovies">
    //         {this.movies.map((movie, index) => (
    //           <Movie
    //             movie={movie}
    //             key={index}
    //             updatedMovieStatus={this.props.updatedMovieStatus}
    //           />
    //         ))}
    //       </div>
    //     </div>
    //   );
    // }
  };

  addToBudget = () => {
    let newbudget = this.state.budget + 20;
    this.setState({
      budget: newbudget,
    });
  };

  subFromBudget = (movieId) => {
    let newBudget = this.state.budget - 20;
    if (newBudget > 0) {
      this.updatedMovieStatus(movieId);
      this.setState({
        budget: newBudget,
      });
    }
  };

  render() {
    return (
      <div className="App">
        <input
          type="text"
          placeholder="Search"
          value={this.props.searchInput}
          onChange={this.updateinputText}
        />
        <p>Budget: {this.state.budget}</p>

        <h1>Rented</h1>
        <div className="allMovies">
          {this.props.movies.map((e) => {
            if (e.title.toLowerCase().includes(this.props.searchInput)) {
              return (
                <div>
                  <div>
                    {e.isRented ? (
                      <div>
                        <Link to={"/Movie/" + e.id}>
                          <div>
                            <h1>{e.title}</h1>
                            <img
                              src={e.img}
                              height="400"
                              width="300"
                              alt=""
                            />{" "}
                          </div>{" "}
                        </Link>
                        <a
                          onClick={() => {
                            this.updatedMovieStatus(e.id);
                          }}
                        >
                          -
                        </a>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              );
            }
          })}
        </div>

        <h1>Movies</h1>
        <div className="allMovies">
          {this.props.movies.map((e) => {
            if (e.title.toLowerCase().includes(this.props.searchInput)) {
              return (
                <div>
                  <Link to={"/Movie/" + e.id}>
                    <div>
                      <h1>{e.title}</h1>
                      <img src={e.img} height="400" width="300" alt="" />{" "}
                    </div>{" "}
                  </Link>
                  <div>
                    {e.isRented ? (
                      <div>
                        <a
                          onClick={() => {
                            this.updatedMovieStatus(e.id);
                          }}
                        >
                          -
                        </a>
                      </div>
                    ) : (
                      <div>
                        <a
                          onClick={() => {
                            this.updatedMovieStatus(e.id);
                          }}
                        >
                          +
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default Catalog;

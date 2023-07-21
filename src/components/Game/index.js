import React, { Component } from "react";
import Team from "../Team";
import styles from "./Game.module.css";
import { pokemonData } from "../../mock/pokemonData";
export default class Game extends Component {
  pokemons = pokemonData;

  constructor() {
    super();
    this.state = {
      team1: [],
      team2: [],
      hasBeenClicked: false,
    };
    this.handlePlay = this.handlePlay.bind(this);
  }

  handlePlay() {
    this.setState({ hasBeenClicked: true });
    let hand2 = [];
    let hand1 = [...this.pokemons];
    while (hand2.length < hand1.length) {
      let randomIndx = Math.floor(Math.random() * hand1.length);
      let randomPokemon = hand1.splice(randomIndx, 1)[0];
      hand2.push(randomPokemon);
      this.setState({ team1: hand1, team2: hand2 });
    }
  }

  render() {
    const { hasBeenClicked } = this.state;
    const team1Point = this.state.team1.reduce((sum, pokemon) => {
      return sum + pokemon.base_experience;
    }, 0);

    const team2Point = this.state.team2.reduce((sum, pokemon) => {
      return sum + pokemon.base_experience;
    }, 0);

    return (
      <>
        <button className={styles.play} onClick={this.handlePlay}>
          {hasBeenClicked ? "Play again !" : "Play"}
        </button>
        <div className={styles["game-content"]}>
          {this.state.team2.length ? (
            <>
              <Team
                teamData={this.state.team1}
                teamPoint={team1Point}
                isWinner={team1Point > team2Point}
                name="Team 1"
              />
              <Team
                teamData={this.state.team2}
                teamPoint={team2Point}
                isWinner={team2Point > team1Point}
                name="Team 2"
              />
            </>
          ) : (
            ""
          )}
        </div>{" "}
      </>
    );
  }
}
